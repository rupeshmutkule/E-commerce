# Setup Instructions

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Copy Assets
The CSS files have been copied to `src/styles/`. You need to copy images manually:

```bash
# Copy images from design folder to public folder
cp -r design/assets/images/* public/images/
```

Or on Windows PowerShell:
```powershell
Copy-Item -Path "design/assets/images/*" -Destination "public/images/" -Recurse
```

### 3. Environment Variables (Optional)
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Build for Production
```bash
npm run build
npm start
```

## Migration Status

### ✅ Completed
- Project structure setup
- Home page conversion
- Header component
- Footer component
- Hero slider
- Product listing components
- About Us page
- Customer Account page
- API routes structure
- TypeScript types
- CSS integration

### 🔄 In Progress / TODO
- Complete all page conversions
- Shopping cart functionality
- User authentication
- Product detail pages
- Checkout flow
- Search functionality
- Wishlist feature
- Payment integration
- Admin panel

## File Structure Mapping

| Original (design/) | New (src/) |
|-------------------|-----------|
| index.html | app/page.tsx |
| about-us.html | app/about-us/page.tsx |
| customer/account.html | app/customer/account/page.tsx |
| assets/css/* | styles/* |
| assets/js/* | components/* (converted to React) |
| *.php | app/api/*/route.ts |

## Key Changes

1. **jQuery → React Hooks**: All jQuery code converted to React hooks
2. **PHP → Next.js API Routes**: Server-side PHP converted to API routes
3. **Static HTML → React Components**: Reusable component architecture
4. **CSS**: Preserved original CSS, imported in components
5. **Images**: Using Next.js Image component for optimization

## Development Notes

- Use `'use client'` directive for components with interactivity
- API routes are in `src/app/api/`
- All pages use TypeScript for type safety
- Images are optimized automatically by Next.js
