# 🚀 Deployment Guide

## Quick Start: Deploy to GitHub + Netlify

Follow these steps to get your site live in minutes!

---

## Step 1: Push to GitHub

### Option A: Using Git Command Line

1. **Open Terminal/Command Prompt in your project folder**

2. **Initialize Git:**
```bash
git init
```

3. **Add all files:**
```bash
git add .
```

4. **Commit:**
```bash
git commit -m "Initial commit: Event website ready for deployment"
```

5. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `event-website-prototype` (or your choice)
   - Make it Public or Private
   - **DO NOT** check "Add README" or "Add .gitignore" boxes
   - Click "Create repository"

6. **Connect and push:**
```bash
# Replace YOUR-USERNAME and REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click "File" → "Add Local Repository"
3. Select your project folder
4. Click "Publish repository"
5. Choose repository name and visibility
6. Click "Publish repository"

---

## Step 2: Deploy to Netlify

### Method 1: Via GitHub (Recommended - Auto-deploys on updates)

1. **Go to [Netlify](https://app.netlify.com)**

2. **Sign up/Login** (you can use your GitHub account)

3. **Click "Add new site" → "Import an existing project"**

4. **Choose "Deploy with GitHub"**

5. **Authorize Netlify** to access your GitHub repositories

6. **Select your repository** from the list

7. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (These should be auto-detected from `netlify.toml`)

8. **Click "Deploy site"**

9. **Wait 2-3 minutes** for the build to complete

10. **Your site is live!** You'll get a URL like `https://random-name-123.netlify.app`

11. **Optional: Change site name:**
    - Go to Site settings → Site details → Change site name
    - Or add a custom domain

### Method 2: Via Drag & Drop (Quick test)

1. **Build your project locally:**
```bash
npm install
npm run build
```

2. **Go to [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag the `dist` folder** onto the page

4. **Your site is live instantly!**

Note: Drag & drop doesn't connect to GitHub, so updates require manual rebuilds.

### Method 3: Via Netlify CLI

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Build and deploy:**
```bash
npm run build
netlify deploy --prod
```

4. **Follow the prompts** to create a new site or select an existing one

---

## Step 3: Verify Your Deployment

✅ **Check these pages work:**
- Homepage: `/`
- Tickets: `/tickets` 
- About: `/about`
- Schedule: `/about/schedule`
- Booth: `/about/booth`
- Online: `/about/online`
- Hotels: `/about/hotels`

✅ **Test navigation:**
- Click all menu links
- Test browser back/forward buttons

✅ **Check responsiveness:**
- View on mobile
- View on tablet
- View on desktop

---

## Troubleshooting

### Problem: Page refresh shows 404 on Netlify

**Solution:** Already fixed! The `netlify.toml` and `public/_redirects` files handle SPA routing.

### Problem: Images not loading

**Solution:** Check that all image paths are correct and files exist in the project.

### Problem: Build fails on Netlify

**Common fixes:**
1. Check build logs in Netlify dashboard
2. Ensure `package.json` lists all dependencies
3. Try building locally: `npm run build`
4. Check Node version (should be 18+)

### Problem: Styles not applying

**Solution:** 
1. Verify `styles/globals.css` is imported in `src/main.tsx`
2. Clear browser cache
3. Check Tailwind CSS is properly configured

---

## Updating Your Site

### After pushing to GitHub:

If you connected via GitHub, Netlify auto-deploys on every push:

```bash
# Make your changes
git add .
git commit -m "Updated homepage"
git push
```

Netlify will automatically rebuild and deploy (takes 2-3 minutes).

### Manual updates:

If using drag & drop:

```bash
npm run build
# Then drag the new dist folder to Netlify Drop
```

---

## Custom Domain Setup

1. **In Netlify dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `myevent.com`)

2. **Update DNS settings** with your domain provider:
   - Add Netlify's nameservers, OR
   - Add an A record pointing to Netlify's IP

3. **Enable HTTPS** (automatic with Netlify)

---

## Environment Variables (if needed later)

If you add API keys or secrets:

1. **In Netlify dashboard:**
   - Go to Site settings → Environment variables
   - Click "Add a variable"
   - Add key-value pairs

2. **Access in code:**
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Performance Tips

✅ Already optimized:
- Vite build minification
- CSS purging with Tailwind
- Image optimization
- SPA routing

📈 Further improvements:
- Add lazy loading for images
- Implement code splitting
- Use CDN for assets
- Enable Netlify's asset optimization

---

## Support & Resources

- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vitejs.dev
- **GitHub Help:** https://docs.github.com

---

**🎉 That's it! Your event website is now live!**
