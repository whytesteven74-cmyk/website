# 🚀 Deployment Guide

## Quick Deploy

Run our automated deployment script:

```bash
./scripts/deploy.sh
```

## Manual Deployment Steps

### 1. Vercel Setup

#### Login to Vercel CLI:
```bash
vercel login
```
Choose your preferred login method:
- GitHub
- GitLab
- Bitbucket
- Email

#### Link Project:
```bash
vercel link
```
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time) or **Y** (if exists)
- Project name: `steven-whyte-website`
- Directory: `./` (current directory)
- Override settings? **N**

#### Deploy:
```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

### 2. Environment Variables

Set these in Vercel Dashboard (Settings → Environment Variables):

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | https://your-domain.vercel.app | All |
| `FORMSPREE_ID` | Your Formspree ID | Production |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | your-domain.com | Production |

### 3. Custom Domain (Optional)

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., `stevenwhyte.com`)
3. Follow DNS configuration instructions

## CI/CD with Bitbucket

### Initial Setup:

1. **Push to Bitbucket:**
   ```bash
   git remote add origin https://YOUR_USERNAME@bitbucket.org/YOUR_WORKSPACE/steven-whyte-website.git
   git push -u origin main
   ```

2. **Get Vercel Project Info:**
   ```bash
   cat .vercel/project.json
   ```
   Copy `orgId` and `projectId`

3. **Set Bitbucket Variables:**
   - Go to Repository Settings → Repository variables
   - Add:
     - `VERCEL_TOKEN` (from vercel.com/account/tokens)
     - `VERCEL_ORG_ID` (from project.json)
     - `VERCEL_PROJECT_ID` (from project.json)

### Deployment Flow:

```
Push to main → Bitbucket Pipeline → Build & Test → Deploy to Vercel Production
Push to develop → Bitbucket Pipeline → Build & Test → Deploy to Vercel Preview
Pull Request → Bitbucket Pipeline → Build & Test → Comment with preview URL
```

## Local Development

### Start dev server:
```bash
pnpm dev
```

### Build locally:
```bash
pnpm build
```

### Run production build locally:
```bash
pnpm build && pnpm start
```

## Pre-Deployment Checklist

- [ ] Run tests: `pnpm test`
- [ ] Run linter: `pnpm lint`
- [ ] Run type check: `pnpm typecheck`
- [ ] Run audit: `pnpm audit`
- [ ] Build successfully: `pnpm build`
- [ ] Update environment variables
- [ ] Commit all changes
- [ ] Push to repository

## Monitoring

### Vercel Dashboard:
- View deployments: [vercel.com/dashboard](https://vercel.com/dashboard)
- Analytics: Available in project dashboard
- Function logs: Settings → Functions

### Bitbucket Pipelines:
- View builds: Repository → Pipelines
- Check logs for any failures

## Rollback

### Via Vercel:
1. Go to project dashboard
2. Click on deployments
3. Find previous stable deployment
4. Click "..." → "Promote to Production"

### Via Git:
```bash
# Revert last commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard COMMIT_HASH
git push --force origin main
```

## Troubleshooting

### Build Failures:

**TypeScript errors:**
```bash
pnpm typecheck
```

**Missing dependencies:**
```bash
pnpm install
```

**Environment variables:**
- Check `.env.example` for required variables
- Ensure all are set in Vercel dashboard

### Deployment Issues:

**Vercel CLI not working:**
```bash
# Reinstall
pnpm remove -g vercel
pnpm add -g vercel
```

**Authentication issues:**
```bash
vercel logout
vercel login
```

**Project link issues:**
```bash
rm -rf .vercel
vercel link
```

## Performance Optimization

### Before deploying:

1. **Run build analysis:**
   ```bash
   pnpm analyze
   ```

2. **Check bundle size:**
   - Keep under 500KB for optimal performance
   - Use dynamic imports for large components

3. **Optimize images:**
   - Use WebP format
   - Implement lazy loading
   - Use Next.js Image component

4. **Test Core Web Vitals:**
   - Use PageSpeed Insights
   - Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

## Security

### Pre-deployment security check:

1. **No sensitive data in code:**
   ```bash
   grep -r "api_key\|secret\|password\|token" src/
   ```

2. **Dependencies audit:**
   ```bash
   pnpm audit
   ```

3. **Headers configured:**
   - Check `vercel.json` for security headers

4. **Environment variables:**
   - Never commit `.env` files
   - Use Vercel's encrypted variables

## Support

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Bitbucket Support:** [support.atlassian.com](https://support.atlassian.com)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

Last Updated: November 2024
Version: 1.0.0
