# India Circus - Next.js Conversion

This is a Next.js conversion of the India Circus e-commerce website.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about-us/           # About page
│   ├── customer/account/   # Customer account page
│   └── api/                # API routes
├── components/
│   ├── Header.tsx          # Header component
│   ├── Footer.tsx          # Footer component
│   ├── HeroSlider.tsx      # Hero slider
│   ├── WhatsNew.tsx        # What's New section
│   └── PopularProducts.tsx # Popular products
└── styles/                 # CSS files from original design

```

## Features Converted

- ✅ Home page with hero slider
- ✅ Header with navigation
- ✅ Footer
- ✅ Product listing components
- ✅ About Us page
- ✅ Customer Account page
- ✅ API routes for products and session

## Next Steps

1. Copy remaining CSS files from `design/assets/css/` to `src/styles/`
2. Copy images from `design/assets/images/` to `public/images/`
3. Implement remaining pages (checkout, product details, etc.)
4. Add state management (Redux/Zustand)
5. Integrate with backend API
6. Add authentication
7. Implement cart functionality
8. Add search functionality

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS Modules (from original design)

## Notes

- PHP functionality has been converted to Next.js API routes
- jQuery dependencies removed in favor of React hooks
- Server-side rendering enabled for better SEO
- Image optimization using Next.js Image component
