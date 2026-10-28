const repos = {
  mailbot: 'https://github.com/tommasomiraglia/MailBot-AI',
  thesisCode: 'https://github.com/tommasomiraglia/forecasting-transformers',
  thesisPdf: 'https://github.com/tommasomiraglia/Thesis',
  pokerogue: 'https://github.com/tommasomiraglia/OOP24-Poke-Rogue',
  chess: 'https://github.com/imutkarsht/Chess_analyzer/graphs/contributors?from=11%2F07%2F2026',
}

export const profile = {
  name: 'Tommaso Miraglia',
  title: 'MSc Computer Science student',
  tagline: 'I build backend services in Java and Python, and connect them to APIs, including LLMs.',
  availability:
    'Looking for a part-time student developer role in Copenhagen. EU citizen, no work permit needed, available alongside lectures.',
  photo: '/images/profile.jpg',
  email: 'tommasomiraglia2005@gmail.com',
  phone: '+45 81946145',
  location: 'Copenhagen, Denmark',
  github: 'https://github.com/tommasomiraglia',
  linkedin: 'https://www.linkedin.com/in/tommaso-miraglia-79b105373',
  leetcode: 'https://leetcode.com/u/9y3nJjhyWe/',
}

/** Absolute links so the same nav works on the home page and on /blog/. */
export const navItems = [
  { label: 'Work', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Writing', href: '/blog/' },
  { label: 'Connect', href: '/#connect' },
]

export const bioParagraphs = [
  `I’m an MSc Computer Science student at Roskilde University. Before that I did a BSc in Computer Science and Engineering at the University of Bologna.`,
  `Most of my work is on the backend. During my internship at Halnet I built an email-support bot with Spring Boot and Apache Camel that answers customers through the OpenAI API. I also work with SQL and TypeScript, and contribute to Chess Analyzer Pro, an open-source Python app.`,
  `For five years I was also a head waiter on weekends while studying full time. It taught me reliability, clear communication and good time management.`,
]

export type ExperienceItem = {
  id: string
  date: string
  role: string
  company: string
  href?: string
  summary: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'halnet',
    date: 'Sep – Nov 2025',
    role: 'Software Developer Intern',
    company: 'Halnet',
    href: 'https://www.linkedin.com/company/halnet-s.r.l./home/',
    summary: [
      'Developed MailBot-AI, an email-support bot in Spring Boot and Apache Camel that monitors a mailbox over IMAP and filters senders against a whitelist.',
      'Integrated the OpenAI API to generate replies automatically, with an escalation path: complex requests are forwarded to a human expert via SMTP while the customer is notified.',
      'Automated LinkedIn content with n8n workflows that generate and publish posts.',
    ],
    tags: ['Java', 'Spring Boot', 'Apache Camel', 'OpenAI API', 'n8n'],
  },
  {
    id: 'waiter',
    date: '2021 – Jul 2026',
    role: 'Head Waiter',
    company: 'Part-time and weekends, alongside full-time studies',
    summary: [
      'Held a head-waiter role for five years while completing a full-time degree, coordinating service and guests during busy weekend shifts.',
    ],
    tags: [],
  },
  {
    id: 'eco',
    date: 'May – Jul 2022',
    role: 'Web Developer Intern',
    company: 'ECO Certificazioni',
    summary: [
      'Built the company’s official website from operational and compliance requirements.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
]

export type ProjectItem = {
  id: string
  /** Shown only when the project has no image. */
  year?: string
  title: string
  description: string
  href?: string
  /** Path under /public, e.g. `/images/projects/chess.png`. */
  image?: string
  imageAlt?: string
  tags: string[]
}

export const projects: ProjectItem[] = [
  {
    id: 'chess',
    title: 'Chess Analyzer Pro (open source)',
    description:
      'Contributing bug fixes and tests, via GitHub pull requests, to the analysis engine of a free desktop chess analysis app with Stockfish integration and an opening explorer.',
    href: repos.chess,
    image: '/images/projects/chess.png',
    imageAlt: 'Chess Analyzer Pro screenshot',
    tags: ['Python', 'PyQt6', 'Stockfish', 'SQLite', 'pytest'],
  },
  {
    id: 'thesis',
    title: 'Bachelor’s Thesis: Time-Series Forecasting with Transformers',
    description:
      'Compared a from-scratch Minimalist Transformer with the pre-trained foundation models Chronos (Amazon) and TimeGPT on 30 quarterly M4 series. On this sample it reached the lowest mean normalized RMSE (0.077 vs 0.086 for TimeGPT and 0.098 for Chronos). Also ran a linear-probing experiment (PyTorch forward hooks, logistic regression) on whether seasonality is encoded in the model’s latent space; results are preliminary. Thesis written in Italian.',
    href: repos.thesisCode,
    image: '/images/projects/forecasting.png',
    imageAlt: 'Time-series forecasting results',
    tags: ['Python', 'PyTorch', 'scikit-learn', 'pandas'],
  },
  {
    id: 'pokerogue',
    title: 'PokéRogue (team of 4)',
    description:
      'Turn-based roguelike in Java with an MVC architecture, game content in JSON and Pokémon data imported from the PokéAPI.',
    href: repos.pokerogue,
    image: '/images/projects/pokemon.png',
    imageAlt: 'PokéRogue screenshot',
    tags: ['Java', 'MVC', 'JSON'],
  },
]

/** Keep in sync with the CV. Icons are mapped by name in components/Toolbox.tsx. */
export const skillGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'SQL', 'TypeScript', 'JavaScript', 'HTML/CSS', 'PHP'],
  },
  {
    label: 'Backend & APIs',
    items: ['Spring Boot', 'Apache Camel', 'Maven', 'API integration', 'OpenAI API', 'n8n'],
  },
  {
    label: 'Data & ML',
    items: ['pandas', 'scikit-learn', 'PyTorch', 'SQLite', 'Data modeling'],
  },
  {
    label: 'Tools & testing',
    items: ['Git', 'GitHub', 'GitHub Actions', 'pytest', 'JUnit', 'Linux', 'Claude Code'],
  },
]

/**
 * Blog comments are stored in this repository's GitHub Discussions via giscus
 * (https://giscus.app). Each post gets its own discussion, created on the first comment.
 */
export const comments = {
  repo: 'tommasomiraglia/Portfolio',
  repoId: 'R_kgDOVJz2pA',
  category: 'General',
  categoryId: 'DIC_kwDOVJz2pM4DJ2Lr',
}
