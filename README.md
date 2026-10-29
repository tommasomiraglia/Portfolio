# Personal Website

My portfolio and blog, live at [tommasomiraglia.vercel.app](https://tommasomiraglia.vercel.app).

Built with React, TypeScript, Vite and Tailwind CSS.
Blog comments use [giscus](https://giscus.app), backed by GitHub Discussions on this repository.

## Run it locally

You need Node.js 20.19 or newer.

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # type-check and build into dist/
npm run preview   # serve the built site
npm run lint      # run oxlint
```

## Project layout

```text
index.html              Home page entry
blog/index.html         Blog page entry (/blog/ and /blog/<slug>)
src/
  App.tsx               Home page sections
  components/           Header, hero, experience, projects, toolbox, connect, footer
  data/content.ts       All home page text: profile, bio, experience, projects, skills, links
  hooks/                Scroll reveal and hash scrolling
  blog/
    posts/*.md          Blog posts
    posts.ts            Loads and parses the posts
    markdown.ts         Markdown rendering and code highlighting
    BlogPage.tsx        Post list, post view and not found page
vercel.json             Rewrites /blog/<slug> to the blog page in production
```

## Editing content

Most text on the home page lives in `src/data/content.ts`.
Change it there and the components pick it up.

Toolbox icons come from [simple-icons](https://simple-icons.org).
When you add a skill to `skillGroups`, map it to an icon in `src/components/Toolbox.tsx`, or it shows without one.

## Writing a blog post

Add a Markdown file to `src/blog/posts/`.
The file name becomes the URL, so `my-first-guide.md` is served at `/blog/my-first-guide`.

Start the file with front matter:

```markdown
---
title: My first guide
date: 2026-11-01
summary: One sentence shown in the post list and on the home page.
---

The post body, in normal Markdown.
```

Posts are sorted by date, newest first, and the three latest appear on the home page.
Code blocks are highlighted for bash, java, javascript, json, powershell, properties, python, sql, typescript, xml and yaml.
To support another language, register it in `src/blog/markdown.ts`.

Each post gets its own comment thread, created in GitHub Discussions the first time someone comments.

## Deployment

Vercel deploys every push to `main` automatically.
