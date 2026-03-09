# Project Files Overview

## Core Configuration Files

- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `.eslintrc.json` - ESLint configuration
- `.gitignore` - Git ignore rules

## Documentation Files

- `README.md` - Main project documentation
- `SETUP.md` - Detailed setup instructions
- `QUICK_START.md` - Quick start guide
- `CONVERSION_SUMMARY.md` - Conversion details

## Source Files (`src/`)

### App Directory (`src/app/`)
- `layout.tsx` - Root layout with Header/Footer
- `page.tsx` - Home page
- `globals.css` - Global styles

#### Pages
- `about-us/page.tsx` - About Us page
- `cart/page.tsx` - Shopping cart page
- `customer/account/page.tsx` - Customer account page
- `products/[slug]/page.tsx` - Dynamic product detail pages

#### API Routes (`src/app/api/`)
- `products/route.ts` - Products API endpoint
- `session/route.ts` - Session management API

### Components (`src/components/`)
- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer
- `HeroSlider.tsx` - Homepage hero slider
- `WhatsNew.tsx` - What's New section
- `PopularProducts.tsx` - Popular products grid

### Utilities (`src/lib/`)
- `api.ts` - API utility functions

### Types (`src/types/`)
- `index.ts` - TypeScript type definitions

### Styles (`src/styles/`)
- `header.css` - Header styles
- `footer.css` - Footer styles
- `home.css` - Home page styles
- `customnew.css` - Custom styles

## Public Assets (`public/`)
- `images/` - Static images directory

## Original Design Files (`design/`)
All original HTML/PHP files preserved for reference

## File Count Summary

- **React Components**: 5
- **Pages**: 5
- **API Routes**: 2
- **CSS Files**: 4+
- **Config Files**: 5
- **Documentation**: 4

## Total Lines of Code (Approximate)

- TypeScript/TSX: ~800 lines
- CSS: ~2000+ lines (from original)
- Configuration: ~100 lines
- Documentation: ~500 lines

## Key Files to Customize

1. `src/app/layout.tsx` - Site-wide layout
2. `src/components/Header.tsx` - Navigation menu
3. `src/components/Footer.tsx` - Footer content
4. `src/app/page.tsx` - Homepage content
5. `src/styles/*.css` - Styling

## Files to Connect to Backend

1. `src/app/api/products/route.ts` - Product data
2. `src/app/api/session/route.ts` - User session
3. `src/lib/api.ts` - API utilities
4. `src/types/index.ts` - Data types
