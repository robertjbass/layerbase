# Layerbase

**Software Engineering & Consulting**

We specialize in crafting high-performance web applications that scale with your business.

## Tech Stack

- **Framework**: Next.js 15.5.2
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui
- **Fonts**: Inter (sans-serif) & JetBrains Mono (monospace)
- **Package Manager**: pnpm

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

- **Linting**: `pnpm lint`
- **Type checking**: Built into Next.js dev server
- **Hot reload**: Automatic in development mode

## Deployment

Deploy easily to Vercel, Netlify, or any platform that supports Next.js.
