# Deployment Guide

## 🚀 Deploy to Vercel

When ready to deploy (after review):

### Option 1: Vercel CLI

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy (use token from .env.local or login)
vercel --prod
```

### Option 2: GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Import the `leadrise-landing` repository
3. Vercel will auto-detect Next.js and deploy
4. Custom domain: `www.leadrise.co.uk`
   - Add domain in Vercel dashboard
   - Update DNS records (Vercel will provide instructions)

## ⚙️ Environment Variables

None required for this static landing page.

## 🔗 Custom Domain Setup

In Vercel dashboard:
1. Settings → Domains
2. Add `leadrise.co.uk` and `www.leadrise.co.uk`
3. Copy nameservers or DNS records
4. Update at your domain registrar
5. Wait for propagation (usually < 1 hour)

## ✅ Pre-deployment Checklist

- [x] Build succeeds locally (`npm run build`)
- [x] Production server works (`npm start`)
- [x] All sections render correctly
- [x] Responsive on mobile/tablet/desktop
- [x] Links work (scroll anchors)
- [x] SEO meta tags set (title, description, OG tags)
- [ ] Final content review
- [ ] Test on real devices
- [ ] Run Lighthouse audit

## 📊 Post-deployment

After deploying:
1. Run Lighthouse audit (aim for 95+ performance)
2. Test on real iOS/Android devices
3. Verify all analytics/tracking (if added later)
4. Test contact forms (if added later)

## 🔄 Future Updates

To update the live site:
1. Make changes locally
2. Test with `npm run build && npm start`
3. Commit and push to main branch
4. Vercel auto-deploys on push

---

**Status:** Built and ready for deployment. Awaiting Jamie's review.
