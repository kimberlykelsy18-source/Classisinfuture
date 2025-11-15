# 🖼️ FIX IMAGES FOR PRODUCTION DEPLOYMENT

## ⚠️ THE PROBLEM:

Your site uses **48 images** imported from Figma using `figma:asset/` paths:

```tsx
import imgFrame6 from "figma:asset/f44ba939b1b5618f5af1869aada43813575d3f22.png";
```

**These work in Figma Make development environment** but **NOT in production** (Netlify, Vercel, GitHub Pages, etc.).

When deployed, these images will show as broken/missing because the `figma:asset` protocol only works in the Figma Make preview.

---

## ✅ THE SOLUTION:

You need to **export the images from Figma** and place them in your `/public/images/` folder, then update the imports.

---

## 📋 STEP-BY-STEP INSTRUCTIONS:

### **Step 1: Export Images from Figma**

1. **Open your Figma design file**
2. **For each image in your design:**
   - Select the image layer
   - Right-click → **Export**
   - Choose format: **PNG** (or JPG for photos)
   - Click **Export [image name]**
   - Save to your computer

3. **Create organized folders:**
   ```
   - landing-page-images/
   - about-overview-images/
   - about-schedule-images/
   - about-booth-images/
   - about-hotels-images/
   - about-online-images/
   - speaker-photos/
   - partner-logos/
   ```

---

### **Step 2: Upload Images to Your Project**

1. **In your project, create the folder structure:**
   ```
   /public/
     /images/
       /landing/
       /about/
       /speakers/
       /partners/
       /logos/
   ```

2. **Upload your exported images to these folders**

3. **Rename files with descriptive names:**
   - Instead of: `f44ba939b1b5618f5af1869aada43813575d3f22.png`
   - Use: `hero-background.png`, `speaker-john-doe.jpg`, `dell-logo.svg`, etc.

---

### **Step 3: Update Import Paths**

**CURRENT (won't work in production):**
```tsx
import imgFrame6 from "figma:asset/f44ba939b1b5618f5af1869aada43813575d3f22.png";
```

**CHANGE TO (will work in production):**
```tsx
import imgFrame6 from "/images/landing/hero-background.png";
```

Or use direct paths in JSX:
```tsx
<img src="/images/landing/hero-background.png" alt="Hero background" />
```

---

## 📝 LIST OF ALL IMAGES TO EXPORT:

### **Landing Page (LandingPage.tsx):**
- `imgFrame6` - Frame 6 image
- `imgFrame87` - Frame 87 image  
- `imgFrame96` - Frame 96 image
- `imgFrame97` - Frame 97 image
- `imgFrame98` - Frame 98 image
- `imgFrame99` - Frame 99 image
- `imgImage` - Main image
- `imgImage2` - Image 2
- `imgImage4` - Image 4

### **About - Overview Page:**
- Check `/imports/AboutOverviewPage.tsx` for image imports

### **About - Event Schedule Page:**
- Check `/imports/AboutEventSchedulePage.tsx` for image imports

### **About - Get a Booth Page:**
- Check `/imports/AboutGetABoothPage.tsx` for image imports

### **About - Hotels & Flights Page:**
- Check `/imports/AboutHotelsFlightsPage.tsx` for image imports

### **About - Online Experience Page:**
- Check `/imports/AboutOnlineExperiencePage.tsx` for image imports

---

## 🔍 HOW TO FIND ALL IMAGES:

Run this search in your code editor:

**Search for:** `figma:asset`

This will show you ALL image imports that need to be replaced.

**Example results:**
```tsx
// LandingPage.tsx
import imgFrame6 from "figma:asset/f44ba939b1b5618f5af1869aada43813575d3f22.png";
import imgFrame87 from "figma:asset/432e7c780bf5aaf8f514bb4317ac4ca674f57902.png";
// ... etc

// AboutOverviewPage.tsx  
import img1 from "figma:asset/[hash].png";
// ... etc
```

---

## 🛠️ QUICK FIX TEMPLATE:

For each file with `figma:asset` imports:

### **Before:**
```tsx
import imgFrame6 from "figma:asset/f44ba939b1b5618f5af1869aada43813575d3f22.png";
import imgFrame87 from "figma:asset/432e7c780bf5aaf8f514bb4317ac4ca674f57902.png";

function Component() {
  return (
    <div style={{ backgroundImage: `url(${imgFrame6})` }}>
      <img src={imgFrame87} alt="Frame" />
    </div>
  );
}
```

### **After:**
```tsx
import imgFrame6 from "/images/landing/hero-bg.png";
import imgFrame87 from "/images/landing/feature-image.png";

function Component() {
  return (
    <div style={{ backgroundImage: `url(${imgFrame6})` }}>
      <img src={imgFrame87} alt="Frame" />
    </div>
  );
}
```

---

## 📦 AUTOMATED APPROACH (Advanced):

If you have many images, you can:

1. **Export ALL images from Figma at once:**
   - Select all image layers
   - Export → Bulk export as PNG
   - Download zip file

2. **Name them systematically:**
   - `landing-hero.png`
   - `landing-speaker-1.jpg`
   - `landing-speaker-2.jpg`
   - `about-overview-hero.png`
   - etc.

3. **Find and replace in your code:**
   - Find: `figma:asset/f44ba939b1b5618f5af1869aada43813575d3f22.png`
   - Replace: `/images/landing/hero-bg.png`

---

## ⚡ ALTERNATIVE: USE PLACEHOLDER IMAGES (Quick Test)

If you want to test deployment quickly without exporting from Figma:

**Use Unsplash placeholder URLs:**
```tsx
// Replace figma:asset imports temporarily
const imgFrame6 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200";
const imgFrame87 = "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800";
```

This will show placeholder images so you can test the deployment, then replace with real images later.

---

## 📂 RECOMMENDED FOLDER STRUCTURE:

```
/public/
  /images/
    /landing/
      - hero-bg.png
      - speaker-1.jpg
      - speaker-2.jpg
      - speaker-3.jpg
      - partner-dell.svg
      - partner-ibm.svg
      - partner-cisco.svg
      - feature-1.png
      - feature-2.png
    /about/
      /overview/
        - hero.png
        - feature-1.png
      /schedule/
        - day-1-event.jpg
        - day-2-event.jpg
      /booth/
        - booth-standard.png
        - booth-premium.png
      /hotels/
        - hotel-1.jpg
        - hotel-2.jpg
        - hotel-3.jpg
      /online/
        - virtual-experience.png
        - streaming-preview.jpg
    /speakers/
      - john-doe.jpg
      - jane-smith.jpg
      - etc.
    /logos/
      - dell.svg
      - ibm.svg
      - cisco.svg
```

---

## ✅ CHECKLIST:

- [ ] Export all images from Figma design
- [ ] Create `/public/images/` folder structure
- [ ] Upload images to appropriate folders
- [ ] Rename images with descriptive names
- [ ] Update all `figma:asset` imports to `/images/...` paths
- [ ] Test locally to ensure images load
- [ ] Deploy to production
- [ ] Verify all images appear on deployed site

---

## 🚨 IMPORTANT NOTES:

1. **Images in `/public/` folder are accessible via `/images/...` paths**
2. **Don't include `/public/` in the import path** - just `/images/...`
3. **Use lowercase filenames with hyphens** (e.g., `hero-background.png`)
4. **Optimize images before uploading** (compress to reduce file size)
5. **Use appropriate formats:**
   - PNG for graphics with transparency
   - JPG for photos
   - SVG for logos and icons
   - WebP for modern browsers (optional)

---

## 💡 OPTIMIZATION TIPS:

**Compress images before deployment:**
- Use [TinyPNG](https://tinypng.com) for PNG/JPG compression
- Use [SVGOMG](https://jakearchibald.github.io/svgomg/) for SVG optimization
- Target: < 200KB per image for fast loading

**Consider responsive images:**
```tsx
<img 
  src="/images/landing/hero-bg.png"
  srcSet="/images/landing/hero-bg-sm.png 640w,
          /images/landing/hero-bg-md.png 1280w,
          /images/landing/hero-bg-lg.png 1920w"
  alt="Hero background"
/>
```

---

## 🎯 SUMMARY:

**Problem:** `figma:asset` paths don't work in production deployment

**Solution:** 
1. Export images from Figma
2. Upload to `/public/images/`
3. Update imports from `figma:asset/...` to `/images/...`
4. Deploy and verify

**Time estimate:** 30-60 minutes depending on number of images

---

## 📞 NEED HELP?

If you need assistance:
1. List all `figma:asset` imports using search
2. Identify what each image is (hero, logo, photo, etc.)
3. Export from Figma one section at a time
4. Update imports incrementally
5. Test locally before deploying

**The images work in development, but for production deployment, you MUST export them from Figma and host them in your `/public/images/` folder.**

---

**Once you complete these steps, your images will display correctly on the deployed site!** 🎉
