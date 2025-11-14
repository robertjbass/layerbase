# Layerbase

**Software Engineering & Consulting**

We specialize in crafting high-performance web applications that scale with your business. From concept to deployment, we deliver solutions that drive results.

## Tech Stack

- **Framework**: Next.js 16.0.3 with Turbopack
- **React**: 19.2.0 (with View Transitions, useEffectEvent)
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui
- **Icons**: Lucide React & react-icons
- **Fonts**: Inter (sans-serif) & JetBrains Mono (monospace)
- **Theme**: next-themes (dark/light mode)
- **Package Manager**: pnpm
- **Code Quality**: ESLint 9 + Prettier

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

## Adding UI Components with shadcn/ui

This project is configured with shadcn/ui for modern, accessible components.

### Add a new component:
```bash
npx shadcn@latest add [component-name]
```

### Popular components:
```bash
# Essential components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog

# Navigation
npx shadcn@latest add navigation-menu
npx shadcn@latest add dropdown-menu

# Forms
npx shadcn@latest add form
npx shadcn@latest add select
npx shadcn@latest add checkbox

# Data display
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add avatar
```

### Browse all components:
Visit [ui.shadcn.com](https://ui.shadcn.com/docs/components) to see all available components.

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles & CSS variables
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Home page
├── components/         # React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
│   └── utils.ts       # cn() helper for Tailwind
└── components.json    # shadcn/ui configuration
```

## Development

- **Linting**: `pnpm lint` (ESLint 9 with flat config)
- **Auto-fix**: `pnpm lint:fix`
- **Format code**: `pnpm format` (Prettier)
- **Check formatting**: `pnpm format:check`
- **Type checking**: Built into Next.js dev server
- **Hot reload**: Automatic in development mode with Turbopack

## Code Style

This project uses Prettier with the following configuration:
- No semicolons
- Single quotes
- 80 character line width
- 2 space indentation

Run `pnpm format` before committing to ensure consistent code style.

## Deployment

Deploy easily to Vercel, Netlify, or any platform that supports Next.js. This site uses Static Site Generation (SSG) for optimal performance.

### Build Output
- All pages are pre-rendered at build time
- Optimized with Turbopack for fast builds
- No server-side rendering required

## Contact

- **Email**: bob@bbass.co
- **Phone**: (716) 983-2079
- **Location**: Austin, TX & Remote
- **GitHub**: [@robertjbass](https://github.com/robertjbass)
- **Website**: [bbass.co](https://bbass.co)

## License

© 2025 Layerbase, LLC. All rights reserved.

---

For detailed project documentation for AI assistants, see [CLAUDE.md](./CLAUDE.md).
