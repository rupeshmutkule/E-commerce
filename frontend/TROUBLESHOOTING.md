# Troubleshooting Guide

## Common Issues and Solutions

### ✅ FIXED: CSS Syntax Error

**Error:**
```
Syntax error: Unknown word
// @include fonts("GothamBook",400,14);
```

**Cause:** SCSS comment syntax (`//`) in CSS file

**Solution:** Changed to CSS comment syntax (`/* */`)

---

## Build & Compilation Issues

### Issue: "Failed to compile" - CSS Syntax Error

**Symptoms:**
- Build fails with CSS syntax error
- Unknown word or unexpected token in CSS

**Solutions:**

1. **Check for SCSS syntax in CSS files:**
   - Replace `//` comments with `/* */`
   - Remove `@include`, `@mixin`, `@extend` (SCSS-only)
   - Remove nested selectors (use plain CSS)

2. **Verify CSS file extensions:**
   ```bash
   # CSS files should end in .css, not .scss
   ls src/styles/
   ```

3. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

## Installation Issues

### Issue: "Module not found"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Cannot find module 'next'"

**Solution:**
```bash
npm install next@14.1.0 react@18.2.0 react-dom@18.2.0
```

### Issue: TypeScript errors

**Solution:**
```bash
npm install --save-dev typescript @types/react @types/node
```

---

## Runtime Issues

### Issue: Port 3000 already in use

**Solution 1 - Kill the process:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

**Solution 2 - Use different port:**
```bash
npm run dev -- -p 3001
```

### Issue: Images not loading

**Solution:**
1. Check `next.config.js` has correct image domains:
   ```js
   images: {
     domains: ['icmedianew.gumlet.io', 'indiacircus.com'],
   }
   ```

2. Copy images to public folder:
   ```bash
   cp -r design/assets/images/* public/images/
   ```

3. Restart dev server:
   ```bash
   npm run dev
   ```

---

## CSS Issues

### Issue: Styles not applying

**Solutions:**

1. **Check import in globals.css:**
   ```css
   @import url('../styles/header.css');
   @import url('../styles/footer.css');
   @import url('../styles/home.css');
   ```

2. **Verify CSS file paths:**
   ```bash
   ls src/styles/
   ```

3. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

4. **Check for CSS syntax errors:**
   - No SCSS syntax (`//`, `@include`, etc.)
   - Proper bracket closing
   - Valid CSS properties

---

## TypeScript Issues

### Issue: Type errors in components

**Solution:**
```bash
# Check for errors
npx tsc --noEmit

# Install missing types
npm install --save-dev @types/react @types/react-dom @types/node
```

### Issue: "Cannot find module" for imports

**Solution:**
Check `tsconfig.json` has correct paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Performance Issues

### Issue: Slow build times

**Solutions:**

1. **Clear cache:**
   ```bash
   rm -rf .next node_modules
   npm install
   ```

2. **Disable source maps in development:**
   ```js
   // next.config.js
   module.exports = {
     productionBrowserSourceMaps: false,
   }
   ```

3. **Use SWC instead of Babel:**
   - Next.js 14 uses SWC by default
   - Remove `.babelrc` if present

---

## API Issues

### Issue: API routes not working

**Solutions:**

1. **Check route file naming:**
   - Must be named `route.ts` or `route.js`
   - Located in `src/app/api/[name]/route.ts`

2. **Verify HTTP methods:**
   ```ts
   export async function GET() { }
   export async function POST() { }
   ```

3. **Check CORS if calling from external:**
   ```ts
   export async function GET() {
     return NextResponse.json(data, {
       headers: {
         'Access-Control-Allow-Origin': '*',
       },
     })
   }
   ```

---

## Deployment Issues

### Issue: Build fails in production

**Solutions:**

1. **Test production build locally:**
   ```bash
   npm run build
   npm start
   ```

2. **Check for environment variables:**
   - Create `.env.production`
   - Set `NEXT_PUBLIC_*` variables

3. **Verify all imports:**
   ```bash
   npm run lint
   ```

---

## Browser Issues

### Issue: Page not loading in browser

**Solutions:**

1. **Check console for errors:**
   - Open DevTools (F12)
   - Look for red errors

2. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R`

3. **Try different browser:**
   - Test in Chrome, Firefox, Safari

4. **Check network tab:**
   - Verify API calls are successful
   - Check for 404 or 500 errors

---

## Quick Fixes

### Reset Everything
```bash
# Nuclear option - start fresh
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

### Verify Setup
```bash
# Run verification script
node verify-setup.js
```

### Check Logs
```bash
# Development logs
npm run dev

# Build logs
npm run build
```

---

## Getting More Help

1. **Check error message carefully**
   - Read the full error stack trace
   - Note the file and line number

2. **Search documentation:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [React Docs](https://react.dev)
   - [TypeScript Docs](https://typescriptlang.org/docs)

3. **Search online:**
   - Stack Overflow
   - GitHub Issues
   - Next.js Discussions

4. **Check project docs:**
   - README.md
   - SETUP.md
   - INSTALLATION.md

---

## Prevention Tips

1. **Always use CSS comments:** `/* */` not `//`
2. **Run lint before commit:** `npm run lint`
3. **Test builds locally:** `npm run build`
4. **Keep dependencies updated:** `npm update`
5. **Use TypeScript:** Catch errors early
6. **Clear cache regularly:** `rm -rf .next`

---

## Still Having Issues?

If none of these solutions work:

1. Check the error message again
2. Search for the exact error online
3. Review the code changes you made
4. Try reverting to last working state
5. Ask for help with specific error details

---

**Last Updated:** March 2026  
**Next.js Version:** 14.1.0
