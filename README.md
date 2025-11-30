# SageStone Inc

A modern, minimalist business process outsourcing website built with React, Vite, and Tailwind CSS v4.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Inter (body/UI), Playfair Display (headings)
- **UI Components**: Radix UI primitives

## Design System

### Fonts
- **Inter**: Used for body text and UI elements
- **Playfair Display**: Used for headline accents

### Brand Colors (from tokens.css)
- Primary: `#7A3EF2` (purple)
- Primary Dark: `#5A2BC4`
- Primary Light: `#9B66FF`
- Accent Pink: `#E05CF8`
- Neutrals: Full scale from 50-900

### Pages
- Home
- About Us
- Services
- Pricing
- How It Works
- Blogs
- Case Studies
- Contact Us

## Building for Production

```bash
npm run build
```

The output will be in the `build/` directory. To serve locally:

```bash
npm start
```

## Deployment

### Railway Deployment (Recommended)

This application is designed for deployment on Railway as a static site.

1. **Connect Repository**: Link your GitHub repository to Railway
2. **Auto-Detection**: Railway will auto-detect the build settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`
3. **Environment Variables**: Add any required variables in the Railway dashboard (prefix with `VITE_` for client-side)
4. **Deploy**: Push to deploy automatically

### Alternative Static Hosting

The `npm run build` command outputs static files to `build/`. These can be deployed to any static hosting provider:

- Upload the `build/` directory contents
- Configure your server to serve `index.html` for all routes (SPA fallback)
- No server-side code required

## Development

### Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── ui/         # Base UI primitives
│   └── ...         # Feature components
├── pages/          # Page components
├── styles/         # CSS files
│   ├── globals.css # Main stylesheet with Tailwind
│   └── tokens.css  # Brand color tokens
├── App.tsx         # Main app with routing
└── main.tsx        # Entry point
```

### Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS plugins
- `vite.config.ts` - Vite build configuration
  