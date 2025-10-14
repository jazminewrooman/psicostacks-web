# PsicoStacks

A Next.js application for verifying hiring credentials using blockchain and AI technology.

## Features

- **Mobile-first responsive design** with Tailwind CSS
- **Portable credentials** that can be shared across multiple employers
- **AI-generated insights** from psychological assessments
- **PDF upload support** - upload existing psychometric reports
- **Blockchain verification** with Bitcoin anchoring
- **Privacy-focused** - no personal data stored on-chain
- **One-time QR codes** for secure credential sharing

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with reusable design system
- **Icons**: Custom SVG icons and components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set the backend URL (default: `http://localhost:3001`).

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note**: Make sure the backend (`psicostacks-backend`) is running on the configured port before uploading reports.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── candidate/         # Candidate-specific pages
│   ├── employer/          # Employer-specific pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Benefits, etc.)
│   └── ui/               # UI components (Button, Logo, etc.)
└── lib/                  # Utilities and constants
    ├── colors.ts         # Color palette
    └── utils.ts          # Utility functions
```

## Design System

The application uses a consistent design system with:

- **Colors**: Lilac-based palette with violet, purple, and slate tones
- **Typography**: Inter font with clear hierarchy
- **Components**: Reusable UI components with consistent styling
- **Layout**: Mobile-first responsive design with max-width containers

## Pages

- **Home** (`/`): Landing page with hero, benefits, and CTAs
- **Candidate** (`/candidate`): Page for candidates to create credentials
- **Employer** (`/employer`): Page for employers to verify credentials

## Development

The project is set up with:

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Next.js App Router for modern React patterns

## License

This is a demo product for hackathon purposes.
