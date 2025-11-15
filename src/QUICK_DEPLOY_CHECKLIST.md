# ⚡ Quick Deploy Checklist

## Before You Deploy

- [x] `vite.config.ts` has `outDir: 'dist'`
- [x] `package.json` build script: `"vite build --outDir dist"`
- [x] `netlify.toml` has `publish = "dist"`
- [x] `.nvmrc` exists with Node 20
- [x] `.gitignore` exists
- [x] `public/_redirects` file exists (not directory)
- [x] No `.tsx` files in `/public/` directory
- [x] All Tailwind imports correct

---

## Deploy Steps

### 1️⃣ Push to GitHub
```bash
# Via Figma Make GitHub integration
# OR manually:
git add .
git commit -m "Deploy: Fixed build configuration"
git push origin main
```

### 2️⃣ Deploy on Netlify
1. Go to Netlify Dashboard
2. Click "Deploys" tab
3. Click "Trigger deploy" → "Clear cache and deploy site"
4. Wait 2-3 minutes

### 3️⃣ Watch Build Logs
Look for:
- ✅ `vite build --outDir dist`
- ✅ `dist/index.html` (NOT build/index.html)
- ✅ `ls -la dist` showing files
- ✅ "Site is live"

---

## If Build Fails

### Check 1: Output Directory
**In build logs, search for:**
- ✅ GOOD: `dist/index.html`
- ❌ BAD: `build/index.html`

**If shows `build/`:**
1. Check GitHub repo `vite.config.ts` file
2. Ensure it says `outDir: 'dist'` not `'build'`
3. Commit fix and redeploy

### Check 2: TypeScript Errors
**If build fails with TS errors:**
1. Check `tsconfig.json` has `"strict": false`
2. Or override in Netlify: Build command = `npm run build -- --mode production`

### Check 3: Missing Dependencies
**If "Module not found":**
1. Clear Netlify cache
2. Change build command to: `npm install && npm run build`

---

## Quick Fixes

### Force `dist/` Output
**Edit Netlify build command to:**
```bash
npm install && npx vite build --outDir=dist --emptyOutDir
```

### Alternative: Use `build/` Instead
**If you can't fix dist, use build:**

In Netlify settings:
- Change "Publish directory" to `build`

In `netlify.toml`:
```toml
publish = "build"
```

---

## Success Indicators

✅ Build completes without errors
✅ `dist/` folder created
✅ ~50 files in dist/
✅ "Site is live" message
✅ URL loads: `https://your-site.netlify.app`

---

## Post-Deploy Tests

Visit these URLs (replace with your domain):

```
https://your-site.netlify.app/
https://your-site.netlify.app/tickets
https://your-site.netlify.app/about
https://your-site.netlify.app/event-schedule
https://your-site.netlify.app/get-booth
https://your-site.netlify.app/online-experience
https://your-site.netlify.app/hotels-flights
```

Test:
- [ ] All pages load
- [ ] No 404 errors
- [ ] Images display
- [ ] Navigation works
- [ ] Page refresh works
- [ ] No console errors

---

## Emergency: Deploy to Vercel Instead

If Netlify keeps failing:

1. Go to [vercel.com](https://vercel.com)
2. Import from GitHub
3. Click Deploy
4. Done! ✅

Vercel auto-detects everything.

---

## Files to Verify in GitHub

Before deploying, check these files in your GitHub repo:

| File | Should Contain |
|------|----------------|
| `vite.config.ts` | `outDir: 'dist'` |
| `package.json` | `"build": "vite build --outDir dist"` |
| `netlify.toml` | `publish = "dist"` |
| `.nvmrc` | `20` |
| `public/_redirects` | `/*    /index.html   200` |

---

## One-Line Deploy Test

Run locally to verify build works:

```bash
npm install && npm run build && ls -la dist/
```

Should show:
```
dist/
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-abc123.css
└── vite.svg (maybe)
```

---

**Ready to deploy? Push to GitHub and trigger Netlify!** 🚀
