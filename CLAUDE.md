# Layerbase - Project Documentation for AI Assistants

## Project Overview

Layerbase is a professional software engineering and consulting company website built with Next.js 16 and modern web technologies. The site showcases technical expertise, services, and portfolio projects while maintaining a clean, professional aesthetic.

## Tech Stack

### Core Framework

- **Next.js 16.0.3** with Turbopack (default bundler)
- **React 19.2.0** with latest features (View Transitions, useEffectEvent)
- **TypeScript 5.9.3**

### Styling

- **Tailwind CSS 4.1.9** with custom design system
- **next-themes** for dark/light mode support
- **shadcn/ui** component library (Button, Card, Badge)
- **Lucide React** for icons
- **react-icons** for technology logos

### Development Tools

- **ESLint 9.39.1** with flat config
- **Prettier 3.6.2** configured with:
  - No semicolons (`semi: false`)
  - Single quotes (`singleQuote: true`)
  - 80 character width (`printWidth: 80`)
- **pnpm** as package manager

## Project Structure

```
layerbase/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── icon.svg             # Favicon (L with playful bubbles)
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main homepage (SSG)
├── components/
│   ├── icons/
│   │   └── tech-icons.tsx   # Technology icon exports
│   ├── theme-provider.tsx   # Dark mode theme provider
│   └── ui/                  # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── data.ts              # Static data (contact info, projects, etc.)
│   └── utils.ts             # Utility functions (cn helper)
└── public/                  # Static assets
```

## Key Features

### 1. Static Site Generation (SSG)

All pages are statically generated at build time for optimal performance. The homepage uses server components without dynamic data fetching.

### 2. Sections

- **Hero**: Introduction and main CTAs
- **Services**: 6 core service offerings with icons
- **Technologies**: 24+ technology logos in responsive grid
- **Projects**: 6 featured projects with links and tech stacks
- **About**: Company info with statistics
- **Contact**: Contact information cards

### 3. Design System

- **Primary Color**: Purple (`#8B5CF6`)
- **Theme**: Supports dark/light/system modes
- **Typography**: Inter (body), JetBrains Mono (code)
- **Responsive**: Mobile-first design with breakpoints

## Business Context

### Company Information

- **Name**: Layerbase, LLC
- **Contact**: bob@bbass.co | (716) 983-2079
- **Location**: Austin, TX & Remote
- **Founder**: Robert J Bass (robertjbass on GitHub)

### Background

Robert J Bass is a collection agency owner turned software engineer with expertise in:

- TypeScript, Node.js, React, Next.js
- PostgreSQL, MongoDB, Redis, SQLite
- AWS, Vercel, Cloudflare
- Full-stack web development and SaaS platforms

### Notable Projects

1. **Efficient App** - Current flagship developer tooling platform
2. **DebtOS** - SaaS for accounts receivable automation (2020 Pioneer winner)
3. **PGP Tool** - Encryption app with SQLite
4. **Ask Chat** - Terminal ChatGPT client
5. **NodePM UI** - Node.js process manager
6. **ReactX** - Framework-agnostic state management

## Development Guidelines

### Code Style

- Use Prettier formatting (single quotes, no semicolons, 80 chars)
- Follow ESLint rules
- TypeScript strict mode enabled
- Server components by default (Next.js 16 App Router)

### Adding Content

1. **New Projects**: Add to `lib/data.ts` in the `projects` array
2. **Technologies**: Import icon from `react-icons/si` and add to `tech-icons.tsx`
3. **Metadata**: Update `app/layout.tsx` for SEO

### Build & Deploy

```bash
pnpm install          # Install dependencies
pnpm dev              # Development server
pnpm build            # Production build (SSG)
pnpm format           # Format code with Prettier
pnpm lint             # Check code with ESLint
pnpm lint:fix         # Auto-fix ESLint issues
```

## Important Notes

### Next.js 16 Changes

- Turbopack is now default (no `--turbopack` flag needed)
- Minimum Node.js version: 20.9.0
- TypeScript minimum: 5.1.0
- ESLint config removed from `next.config.mjs` (use `eslint.config.mjs`)

### Known Issues

- Peer dependency warnings for `@vercel/analytics` and `next-themes` expecting React 18 (harmless, packages work with React 19)
- Sharp build scripts ignored by pnpm (requires manual approval if needed)

## Resources

- **Portfolio**: https://bbass.co
- **GitHub**: https://github.com/robertjbass
- **LinkedIn**: https://linkedin.com/company/layerbase
- **Next.js Docs**: https://nextjs.org/docs

## Future Enhancements

Potential improvements to consider:

- Blog section with MDX
- Case studies for featured projects
- Contact form with email integration
- Analytics and monitoring
- SEO optimizations (Open Graph, structured data)
- Internationalization (i18n)
