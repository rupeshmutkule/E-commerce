# Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

Check your versions:
```bash
node --version  # Should be v18 or higher
npm --version   # Should be 9 or higher
```

---

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd path/to/Next-Ecommerce
```

### 2. Verify Project Setup

Run the verification script:
```bash
node verify-setup.js
```

This will check if all required files and directories are present.

### 3. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- ESLint
- And all other dependencies

**Expected output:**
```
added 300+ packages in 30s
```

### 4. Copy Static Assets (Optional)

Copy images from the original design folder:

**Windows PowerShell:**
```powershell
Copy-Item -Path "design/assets/images/*" -Destination "public/images/" -Recurse -Force
```

**Linux/Mac:**
```bash
cp -r design/assets/images/* public/images/
```

### 5. Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Ready in 2.5s
```

### 6. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

You should see the India Circus homepage! 🎉

---

## Troubleshooting

### Issue: Port 3000 already in use

**Solution 1:** Kill the process
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

**Solution 2:** Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution:** Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:** Check TypeScript configuration
```bash
npx tsc --noEmit
```

### Issue: Build fails

**Solution:** Check for syntax errors
```bash
npm run lint
```

---

## Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: External API
EXTERNAL_API_URL=https://api.indiacircus.com
API_KEY=your_api_key_here
```

---

## Production Build

### Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

### Start Production Server

```bash
npm start
```

### Test Production Build Locally

```bash
npm run build && npm start
```

---

## Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Use `next export` for static export
- **AWS**: Use AWS Amplify or EC2
- **Docker**: Create Dockerfile for containerization

---

## Verification Checklist

After installation, verify:

- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Homepage loads at http://localhost:3000
- [ ] No console errors in browser
- [ ] Images load correctly
- [ ] Navigation works
- [ ] TypeScript compiles without errors

---

## Next Steps After Installation

1. ✅ Verify installation
2. 🔄 Customize components
3. 🔄 Connect to backend API
4. 🔄 Add authentication
5. 🔄 Implement remaining features
6. 🔄 Deploy to production

---

## Getting Help

If you encounter issues:

1. Check the error message carefully
2. Review the documentation files:
   - `README.md`
   - `SETUP.md`
   - `QUICK_START.md`
3. Check Next.js documentation: https://nextjs.org/docs
4. Search for similar issues on Stack Overflow

---

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npx tsc --noEmit    # Check TypeScript

# Package Management
npm install <package>     # Install new package
npm uninstall <package>   # Remove package
npm update               # Update packages

# Cleanup
rm -rf node_modules .next  # Clean build
npm install                # Reinstall
```

---

## Success! 🎉

Your Next.js e-commerce site is now running!

Visit: http://localhost:3000
