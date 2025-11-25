# Mac USA Rags Website

A production-ready Next.js 14 website for Mac USA Rags, a US-based thrift clothing export company.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Features

- ✅ Responsive design for all devices
- ✅ SEO optimized with proper metadata
- ✅ Clean, professional UI
- ✅ WhatsApp direct contact button
- ✅ Contact form
- ✅ Google Maps integration
- ✅ Product catalog with 60+ items
- ✅ Quality grading system (Premium, Grade 1, Mixed Rags)
- ✅ Full ordering guide for containers and small orders

## Pages

1. **Home** (`/`) - Hero, quality categories, features, shipping info
2. **About** (`/about`) - Company story, mission, team
3. **Products** (`/products`) - Complete product catalog
4. **How to Order** (`/how-to-order`) - Step-by-step ordering guide
5. **Contact** (`/contact`) - Contact form, map, all contact info

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── products/
│   │   └── page.tsx        # Products page
│   ├── how-to-order/
│   │   └── page.tsx        # How to Order page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   ├── ProductCard.tsx     # Product card component
│   ├── QualityCategoryCard.tsx # Quality category card
│   └── ContactForm.tsx     # Contact form component
└── globals.css             # Global styles with Tailwind
```

## Contact Information

- **Company**: Mac USA Rags
- **Address**: 8211 La Porte Fwy, Houston, TX 77012
- **Phone**: (281) 301-7800
- **WhatsApp**: +1 281 301 7800

## Deployment

This project is ready to deploy on Vercel:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

© 2024 Mac USA Rags. All rights reserved.
