# Deployment Guide – Raj Clinic Website

This web application is built as a static Single Page Application (SPA) using React 18, Vite, and TypeScript. It requires zero paid server infrastructure and can be deployed directly on **Cloudflare Pages**, **Netlify**, or **Vercel** with full HTTPS and custom domain support.

---

## 1. Cloudflare Pages (Recommended – Free & Fast in India)

1. Connect your GitHub repository to Cloudflare Pages.
2. Configure build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `Raj-Clinic-Website` (or workspace root if pushed individually)
3. Ensure SPA routing by adding a `_redirects` file in `public/` (or Cloudflare handles single-page apps automatically with 200 rule).
4. Add custom domain: `rajclinicdudahi.com` or clinic domain with free automatic SSL.

---

## 2. Netlify Deployment

1. Drag and drop the `dist/` directory into Netlify, or link via Git.
2. Build Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify automatically respects SPA redirects using `public/_redirects`:
   ```
   /*    /index.html   200
   ```

---

## 3. Vercel Deployment

1. Import Git repository into Vercel.
2. Framework Preset will auto-detect **Vite**.
3. Build & Output Settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

---

## 4. SPA Redirects Configuration

To ensure routes like `/doctors`, `/services`, `/about` load properly upon direct browser refresh, create `public/_redirects`:

```
/*    /index.html   200
```

