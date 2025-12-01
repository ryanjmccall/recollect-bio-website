# Recollect Bio Landing Page

A modern, accessible, and performant landing page for Recollect Bio - a stealth-mode biotech company. Your Biological Operating System.

## Features

- ✨ Beautiful interactive galaxy background using Spline 3D
- 📱 Fully responsive design (mobile-first)
- ♿ WCAG 2.1 AA accessibility compliant
- 🎨 Dark mode with Tailwind CSS
- 🚀 Optimized for performance (LCP < 2.5s target)
- 📧 Email capture with interest tagging
- 🔒 Privacy-focused with proper disclaimers
- 🎭 Respects prefers-reduced-motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **3D Graphics**: Spline
- **Icons**: Lucide React
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd recollectbiolanding
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your values
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── api/lead/            # Email capture API route
│   ├── privacy/             # Privacy policy page
│   ├── terms/               # Terms of use page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # UI components (shadcn)
│   │   ├── sparkles.tsx    # Particle background component
│   │   ├── button.tsx      # Button component
│   │   ├── dialog.tsx      # Dialog component
│   │   ├── input.tsx       # Input component
│   │   └── badge.tsx       # Badge component
│   └── email-capture-dialog.tsx  # Email capture form
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── public/                  # Static assets
```

## Key Components

### Galaxy Background
An interactive 3D galaxy background using Spline. Features:
- Lazy-loaded for performance
- Gradient overlays for text readability
- Interactive mouse tracking

### EmailCaptureDialog
A form dialog for capturing waitlist signups with:
- Name and email fields
- Interest tag selection (Research, Clinical, Investor, Talent)
- Validation and error handling
- Success state feedback

## Performance Optimization

- Server-side rendering where possible
- Lazy loading of 3D components
- Reduced motion support for accessibility
- Target: LCP < 2.5s, JS bundle < 200KB

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG 2.1 AA standards
- Respects `prefers-reduced-motion`

## Compliance & Legal

The site includes proper disclaimers:
- "For research use only. Not for diagnostic or therapeutic use."
- No medical claims or efficacy statements
- Clear privacy policy and terms of use
- Not a solicitation for investment

## Email Integration

The email form uses Formspree for submissions. To update:

1. Create a form at https://formspree.io
2. Update the endpoint in `components/email-capture-dialog.tsx`
3. Rebuild and redeploy

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy!

The build configuration is pre-configured for Vercel.

### Static Export (Any Static Host)

```bash
pnpm build
```

Upload the contents of the `/out` folder to your static hosting server via SFTP.

### Other Platforms

Build command: `pnpm build`
Output directory: `.next`
Install command: `pnpm install`

## Environment Variables

See `.env.local.example` for all available environment variables.

## License

Copyright © 2025 Recollect Bio. All rights reserved.

## Support

For questions or issues, contact: [contact@recollect.bio](mailto:contact@recollect.bio)
