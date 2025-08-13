# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

### Installation
- `npm install` - Install all dependencies

## Architecture Overview

This is a Next.js 15 portfolio website using the App Router architecture with TypeScript and Tailwind CSS.

### Tech Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for page transitions and scroll animations
- **Icons**: Lucide React

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - Each route folder contains a `page.tsx` file
  - `layout.tsx` provides the root layout with Header and Footer
  - `globals.css` contains Tailwind directives and CSS variables
- `/components` - Reusable React components
  - `header.tsx` - Navigation with responsive mobile menu
  - `footer.tsx` - Site footer
- `/lib` - Utility functions
  - `utils.ts` - Contains `cn()` helper for className merging
- `/public` - Static assets including images

### Key Patterns

#### Styling Approach
- Uses Tailwind CSS with custom color scheme defined via CSS variables
- `cn()` utility from `/lib/utils` for conditional class merging
- Custom animations defined in `tailwind.config.ts`

#### Client Components
- Pages use `"use client"` directive for interactivity and animations
- Framer Motion for scroll-triggered animations
- Prevents hydration mismatches with mounted state checks

#### Image Handling
- Next.js Image component for optimization
- Images stored in `/public/images/`
- Project screenshots in `/public/images/projects/`

#### TypeScript Configuration
- Path alias `@/*` maps to root directory
- Strict mode enabled for type safety
- ESLint configured with Next.js recommended rules

### Component Conventions
- Use functional components with TypeScript
- Import order: React/Next → Third-party → Local imports
- Responsive design with mobile-first approach
- Accessibility considerations (aria-labels, semantic HTML)