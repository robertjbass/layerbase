export const contactInfo = {
  email: 'bob@bbass.co',
  phone: '(716) 983-2079',
  phoneDisplay: '716.983.2079',
  phoneHref: 'tel:+17169832079',
  location: 'Austin, TX & Remote',
  company: {
    name: 'Layerbase',
    legalName: 'Layerbase, LLC',
    tagline: 'Software Engineering & Consulting',
  },
} as const

export const socialLinks = {
  website: 'https://layerbase.com',
  linkedin: 'https://linkedin.com/company/layerbase',
  github: 'https://github.com/robertjbass',
} as const

export const businessHours = {
  timezone: 'CST',
  availability: '24/7 Support Available',
  responseTime: 'Within 24 hours',
} as const

export const projects = [
  {
    name: 'Efficient App',
    description:
      'Flagship developer tooling platform providing productivity solutions for modern development teams',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'AWS'],
    link: 'https://efficient.app',
    category: 'SaaS Platform',
  },
  {
    name: 'DebtOS',
    description:
      'SaaS platform for accounts receivable automation. Winner of 2020 Pioneer startup program',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    category: 'FinTech',
    year: '2019-2022',
  },
  {
    name: 'PGP Encryption Tool',
    description:
      'User-friendly PGP encryption application with local SQLite database for secure key management',
    technologies: ['TypeScript', 'SQLite', 'Node.js'],
    link: 'https://github.com/robertjbass/pgp',
    category: 'Security Tools',
  },
  {
    name: 'Ask Chat',
    description:
      'Terminal-based ChatGPT client designed for quick questions without interrupting development workflow',
    technologies: ['TypeScript', 'Node.js', 'OpenAI API'],
    link: 'https://github.com/robertjbass/ask-chat',
    category: 'Developer Tools',
  },
  {
    name: 'NodePM UI',
    description:
      'Terminal process manager for Node.js applications with intuitive interface',
    technologies: ['TypeScript', 'Node.js'],
    link: 'https://github.com/robertjbass/nodepm-ui',
    category: 'Developer Tools',
  },
  {
    name: 'ReactX State Management',
    description:
      'Framework-agnostic state management library inspired by Vuex patterns',
    technologies: ['TypeScript', 'React'],
    link: 'https://github.com/robertjbass/reactx-state-management',
    category: 'Open Source',
  },
] as const
