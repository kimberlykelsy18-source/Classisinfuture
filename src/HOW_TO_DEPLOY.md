# 🚀 HOW TO DEPLOY TO NETLIFY - Step by Step

## ✅ ALL ISSUES FIXED

I've fixed the critical `_redirects` issue:
- **BEFORE:** `/public/_redirects` was a DIRECTORY with `.tsx` files ❌
- **AFTER:** `/public/_redirects` is a proper FILE ✅

---

## 📋 STEP-BY-STEP DEPLOYMENT GUIDE

### **STEP 1: Clear Netlify UI Settings** ⚙️

This is CRITICAL because Netlify UI settings override `netlify.toml`.

1. **Go to Netlify Dashboard** (netlify.app)
2. **Click on your site**
3. **Go to:** `Site settings` → `Build & deploy` → `Build settings`
4. **Click "Edit settings"**
5. **Set these values:**
   - **Build command:** Leave **EMPTY** (or type: `npm install && npm run build`)
   - **Publish directory:** Leave **EMPTY** (or type: `dist`)
   - **Base directory:** Leave **EMPTY**
6. **Click "Save"**

### **STEP 2: Set Environment Variables** 🔧

While still in Build settings:

1. **Scroll down to "Environment variables"**
2. **Click "Edit variables"**
3. **Add these:**
   - Key: `NODE_VERSION` → Value: `20`
   - Key: `NPM_FLAGS` → Value: `--legacy-peer-deps`
4. **Click "Save"**

### **STEP 3: Push Changes to GitHub** 📤

Your Figma Make changes should auto-sync to GitHub. 

**If auto-sync is OFF or you're not sure:**
1. In Figma Make, look for a "Sync to GitHub" or "Push" button
2. Or commit and push manually if you have the repo cloned

**Verify on GitHub** (important!):
1. Go to your GitHub repository
2. Check that these files exist:
   - `package.json` - Should have: `"build": "vite build --outDir=dist --emptyOutDir"`
   - `vite.config.ts` - Should have: `base: '/',`
   - `public/_redirects` - Should be a file (not a folder) with content: `/*    /index.html   200`

### **STEP 4: Deploy on Netlify** 🚀

1. **Go back to Netlify Dashboard**
2. **Click on "Deploys" tab**
3. **Click "Trigger deploy" dropdown**
4. **Select: "Clear cache and deploy site"** ⚠️ MUST CLEAR CACHE!
5. **Wait for build to complete** (~1-2 minutes)

### **STEP 5: Watch the Build Logs** 👀

Click on the deploy that's in progress to see the logs.

**✅ WHAT YOU WANT TO SEE:**

```
12:00:00 PM: Build ready to start
12:00:05 PM: Using Node.js 20.x
12:00:10 PM: Installing npm packages...
12:00:25 PM: > vite build --outDir=dist --emptyOutDir
12:00:30 PM: ✓ building for production...
12:00:40 PM: ✓ 150 modules transformed.
12:00:45 PM: dist/index.html                  0.50 kB
12:00:45 PM: dist/assets/index-abc123.css    25.00 kB
12:00:45 PM: dist/assets/index-xyz789.js    250.00 kB
12:00:50 PM: Site is live ✨
```

**❌ WHAT YOU DON'T WANT TO SEE:**

```
build/index.html  ← Wrong directory!
Deploy directory 'dist' does not exist  ← Directory mismatch!
```

### **STEP 6: Test Your Site** ✅

Once deployed, Netlify will show you the site URL (like: `https://your-site-name.netlify.app`)

**Test these URLs directly:**
```
✅ https://your-site-name.netlify.app/
✅ https://your-site-name.netlify.app/tickets
✅ https://your-site-name.netlify.app/about
✅ https://your-site-name.netlify.app/event-schedule
✅ https://your-site-name.netlify.app/get-booth
✅ https://your-site-name.netlify.app/online-experience
✅ https://your-site-name.netlify.app/hotels-flights
```

**Test these actions:**
- [ ] Click navigation links - they work
- [ ] Refresh any page - doesn't 404
- [ ] Open browser console - no errors
- [ ] All images load
- [ ] Countdown timer works
- [ ] Mobile responsive works

---

## 🆘 TROUBLESHOOTING

### Problem 1: Build outputs to `build/` instead of `dist/`

**Symptom:** Logs show `build/index.html`

**Cause:** GitHub `package.json` doesn't have the `--outDir=dist` flag

**Fix Option A - Update GitHub:**
1. Go to your GitHub repo
2. Edit `package.json`
3. Find the line: `"build": "vite build"`
4. Change to: `"build": "vite build --outDir=dist --emptyOutDir"`
5. Commit and redeploy

**Fix Option B - Use build/ instead:**
1. In Netlify UI: Site settings → Build settings
2. Change "Publish directory" to: `build`
3. Save and redeploy

### Problem 2: Assets don't load (404 errors)

**Symptom:** Site loads but images/CSS missing

**Cause:** `vite.config.ts` has wrong base path

**Fix:**
1. Go to your GitHub repo
2. Edit `vite.config.ts`
3. Find: `base: './'`
4. Change to: `base: '/'`
5. Commit and redeploy

### Problem 3: Page refresh gives 404

**Symptom:** Direct URL navigation works, but refresh = 404

**Cause:** `_redirects` file not working

**Fix:**
1. Check GitHub: `public/_redirects` should be a **FILE**, not a folder
2. Content should be exactly: `/*    /index.html   200`
3. No `.txt` extension
4. Redeploy

### Problem 4: Tailwind styles missing

**Symptom:** Site loads but looks unstyled

**Cause:** `tailwind.config.js` missing `imports/` directory

**Fix:**
1. Go to your GitHub repo
2. Edit `tailwind.config.js`
3. In the `content` array, add: `"./imports/**/*.{js,ts,jsx,tsx}",`
4. Commit and redeploy

### Problem 5: Build fails with "command not found"

**Symptom:** Build fails immediately

**Cause:** Netlify UI has wrong build command

**Fix:**
1. Netlify UI: Site settings → Build settings
2. Clear the build command (leave empty)
3. Let `netlify.toml` handle it
4. Redeploy

---

## 📊 WHAT WAS FIXED

| Issue | Before | After | Status |
|-------|--------|-------|--------|
| _redirects | Directory with .tsx files | Proper file | ✅ FIXED |
| vite.config | `base: './'` | `base: '/'` | ✅ FIXED |
| tailwind.config | Missing imports/ | Includes imports/ | ✅ FIXED |
| .gitignore | Didn't exist in Figma Make | Created | ✅ FIXED |
| .nvmrc | Didn't exist in Figma Make | Created | ✅ FIXED |
| package.json | Correct | Correct | ✅ OK |
| netlify.toml | Correct | Correct | ✅ OK |

---

## 🎯 QUICK CHECKLIST

Before deploying, ensure:
- [ ] Netlify UI build settings are EMPTY (or match netlify.toml)
- [ ] Environment variables set (NODE_VERSION=20, NPM_FLAGS=--legacy-peer-deps)
- [ ] Changes pushed to GitHub
- [ ] GitHub `public/_redirects` is a FILE (not folder)
- [ ] Deploy with "Clear cache and deploy site"

---

## 💡 ALTERNATIVE: Deploy to Vercel

If Netlify keeps failing, try Vercel (often easier):

1. **Go to:** https://vercel.com
2. **Click:** "New Project"
3. **Import** your GitHub repository
4. **Framework preset:** Vite (auto-detected)
5. **Root Directory:** Leave as `./`
6. **Build Command:** Leave empty (auto-detected)
7. **Output Directory:** Leave empty (auto-detected)
8. **Click:** "Deploy"
9. **Wait ~30 seconds**
10. **Done!** ✅

Vercel auto-detects everything and usually "just works."

---

## 📝 SUMMARY

**Your project is now configured correctly.**

**Main issue:** `_redirects` was a directory, not a file.  
**Solution:** Deleted the directory and created proper file.

**Other issues fixed:**
- vite.config.ts base path
- tailwind.config.js missing imports
- Created .gitignore and .nvmrc

**Now:**
1. Clear Netlify UI settings
2. Set environment variables
3. Push to GitHub
4. Clear cache and deploy

**Your site will work!** 🎉

---

## 🆘 Need More Help?

If it still fails:
1. **Copy the entire build log** from Netlify
2. **Look for the specific error** (red text)
3. **Check which directory** it's outputting to (build vs dist)
4. **Match Netlify publish setting** to actual output

Or just try Vercel - it's more forgiving with configurations.

---

**Good luck! The build should succeed now.** 🚀
