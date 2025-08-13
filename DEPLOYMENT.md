# Deployment Guide for danieldsun.com

## Quick Deployment Steps

### 1. Deploy to Vercel (Recommended)

#### Option A: Via Vercel Website
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Import Project"
4. Select the `danielsun-portfolio` repository
5. Click "Deploy"

#### Option B: Via CLI
1. Login to Vercel:
   ```bash
   vercel login
   ```

2. Deploy to production:
   ```bash
   vercel --prod
   ```

### 2. Configure Custom Domain (danieldsun.com)

After deployment:

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to Settings → Domains
3. Add `danieldsun.com` as a custom domain
4. Update your DNS records at your domain registrar:

#### DNS Configuration
Add these records at your domain registrar:

**For root domain (danieldsun.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain (www.danieldsun.com):**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### 3. Verify Deployment

After DNS propagation (5-30 minutes):
- Visit https://danieldsun.com
- Check that SSL certificate is active
- Test all pages and navigation

## Local Development

To run the project locally:
```bash
npm run dev
```

To build for production:
```bash
npm run build
npm start
```

## Environment Variables

No environment variables are required for the basic portfolio site.

## Repository Information

- **GitHub Repository**: https://github.com/dansun123/danielsun-portfolio
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Support

For any deployment issues, check:
- [Vercel Status](https://vercel-status.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)