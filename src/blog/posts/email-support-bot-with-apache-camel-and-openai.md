---
title: Building an email support bot with Apache Camel and the OpenAI API
date: 2026-10-28
summary: How MailBot-AI reads a mailbox, filters senders, lets an LLM draft the reply and hands the hard cases to a human.
---

During my internship at Halnet I built [MailBot-AI](https://github.com/tommasomiraglia/MailBot-AI), a first-level support bot that answers customer emails.
The idea is simple: an LLM can handle the easy questions ("have you tried restarting it?"), but anything complex must reach a human technician, and the customer should know that it did.

This post walks through how it works and what I learned building it.

## The flow

1. Watch a mailbox over IMAP and pick up unread emails.
2. Ignore senders that are not on a whitelist.
3. Send the email to the OpenAI API with a support-agent system prompt.
4. If the model says the request is too complex, forward it to an expert and tell the customer.
5. Otherwise, send the AI reply back over SMTP.

## Why Apache Camel

Apache Camel is an integration framework: you describe a pipeline as a *route*, and Camel provides ready-made components for the endpoints (IMAP, SMTP, HTTP, queues and many more).
That fits this problem well, because the bot is mostly plumbing between two mail servers and one API.

The route starts from an IMAP endpoint.
`unseen=true` picks up only unread emails, and `delete=false` leaves them in the mailbox:

```java
String imapUri = "imap://" + emailConfig.getImapHost()
        + "?username=" + emailConfig.getUsername()
        + "&password=" + emailConfig.getPassword()
        + "&delete=false&unseen=true";

from(imapUri)
        .routeId("OpenAIEmailResponder")
        .setHeader("OriginalFrom", simple("${header.from}"))
        .setHeader("OriginalSubject", simple("${header.subject}"))
        .setHeader("OriginalBody", body())
        // ...
```

Saving the original sender, subject and body in headers early matters: later steps replace the message body with the AI reply, and the escalation email still needs the original text.

## Filtering senders

The bot should only answer known customers.
A `whitelist.txt` file lists allowed addresses, or whole domains written as `@company.com`:

```java
public boolean isAllowedSender(String from) {
    if (from == null || from.isEmpty()) {
        return false;
    }
    String emailAddress = EmailCleaner.extractEmailAddress(from).toLowerCase();
    String domain = EmailCleaner.extractDomain(emailAddress);
    return allowedSenders.contains(emailAddress)
            || allowedSenders.contains("@" + domain);
}
```

The `From` header often looks like `Jane Doe <jane@company.com>`, so the address has to be extracted before comparing.
In the route, this check is a Camel `choice()`: allowed senders continue, everyone else is logged and ignored.

## Asking the model

The call itself is a standard chat completion with two messages: a long system prompt describing the support agent, and the customer's email as the user message.

The system prompt does most of the work.
It describes the company's services, tells the model to assume the customer is not technical, and defines two cases:

- **Case A:** a simple, clearly described technical problem that the customer can fix in one to three steps. The model answers with numbered, beginner-friendly instructions.
- **Case B:** anything complex, unclear or outside the company's services. The model must not try to solve it.

## Letting the model trigger escalation

For case B, the prompt tells the model to start its answer with a marker: `[HLN_ESCALATION]`.
The route then checks for the marker and picks a branch:

```java
if (aiResponse != null && aiResponse.contains(TOKEN_ESCALATION)) {
    processEscalation(exchange, aiResponse, originalSubject, originalBody, recipient);
} else {
    processStandardReply(exchange, aiResponse, originalSubject, recipient);
}
```

On escalation, the bot sends two emails: one to the expert with the original message and the AI's notes, and one to the customer saying their request was forwarded (with the marker stripped out).
A Camel `direct:` endpoint keeps each branch as its own small route, which makes the main route much easier to read.

## What I would improve next

- **Structured output instead of a text marker.** Searching the reply for a token works, but asking the model for JSON (or using function calling) with an explicit `escalate` field is more reliable.
- **Failures should go to a human.** If the API call fails, the error text should be routed to the expert, never sent to the customer as a reply.
- **Secrets and TLS.** Credentials in endpoint URIs and a permissive `ssl.trust` setting are fine for a prototype, but a production setup should load secrets from a vault and verify certificates.

Building this taught me that the LLM call is the easy part.
Most of the work is everything around it: deciding when *not* to trust the model, and making sure a human sees the cases that matter.
