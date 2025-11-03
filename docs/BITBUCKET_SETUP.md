# Bitbucket CI/CD Setup Guide

## 🚀 Quick Start

This guide will help you set up your Bitbucket repository and CI/CD pipeline for the Steven Whyte website.

## 📋 Prerequisites

1. **Bitbucket Account**: Create one at [bitbucket.org](https://bitbucket.org)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Git installed locally**

## 🔧 Step 1: Create Bitbucket Repository

1. Log in to Bitbucket
2. Click **Create repository**
3. Configure:
   - **Project name**: `Personal Website`
   - **Repository name**: `steven-whyte-website`
   - **Access level**: Private
   - **Include a README**: No (we have one)
   - **Version control**: Git

## 🔗 Step 2: Connect Local Repository

```bash
# Add Bitbucket as origin
git remote add origin https://YOUR_USERNAME@bitbucket.org/YOUR_USERNAME/steven-whyte-website.git

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Steven Whyte personal website"

# Push to Bitbucket
git push -u origin main
```

## 🔑 Step 3: Get Vercel Token

1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Name it: `Bitbucket CI/CD`
4. Copy the token (you won't see it again!)

## 🔐 Step 4: Configure Bitbucket Variables

In your Bitbucket repository:

1. Go to **Repository settings** → **Repository variables**
2. Add these secured variables:

| Variable Name | Value | Secured |
|--------------|--------|---------|
| `VERCEL_TOKEN` | Your Vercel token | ✅ |
| `VERCEL_ORG_ID` | Your Vercel Org ID | ✅ |
| `VERCEL_PROJECT_ID` | Your Vercel Project ID | ✅ |
| `NEXT_PUBLIC_SITE_URL` | https://stevenwhyte.com | ❌ |
| `FORMSPREE_ID` | Your Formspree ID (optional) | ✅ |

### Getting Vercel IDs:

1. Install Vercel CLI locally (already done!)
2. Link your project:
   ```bash
   vercel link
   ```
3. Find IDs in `.vercel/project.json`:
   ```json
   {
     "orgId": "YOUR_ORG_ID",
     "projectId": "YOUR_PROJECT_ID"
   }
   ```

## 🚦 Step 5: Enable Pipelines

1. Go to **Repository settings** → **Pipelines** → **Settings**
2. Toggle **Enable Pipelines** to ON

## 📝 Step 6: Configure Deployment Environments

1. Go to **Repository settings** → **Deployments**
2. Add environments:
   - **Production** (for main branch)
   - **Staging** (for develop branch)

## 🌿 Step 7: Set Up Branch Protection

1. Go to **Repository settings** → **Branch permissions**
2. Add restriction for `main`:
   - **Merge checks**: At least 1 approval
   - **Prevent deletion**: ✅
   - **Restrict direct commits**: ✅

## 📦 Step 8: First Deployment

Your pipeline will automatically:

1. **On push to main**:
   - Build and test
   - Deploy to Vercel production
   
2. **On push to develop**:
   - Build and test
   - Deploy preview to Vercel
   
3. **On Pull Requests**:
   - Run build and tests
   - Comment with preview URL

## 🔄 Workflow

### Development Flow:

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
git add .
git commit -m "Add new feature"

# Push to Bitbucket
git push origin feature/new-feature

# Create Pull Request in Bitbucket UI
```

### Deployment Flow:

```
feature/* → PR → develop → Preview Deploy
develop → PR → main → Production Deploy
```

## 🧪 Testing Pipeline

Test your pipeline manually:

```bash
# Test build locally
pnpm run build

# Test lint
pnpm run lint

# Run audit
pnpm run audit

# Type check
pnpm run typecheck
```

## 📊 Monitoring

### Pipeline Status:
- Check in **Pipelines** section of your repository
- Each commit shows build status

### Vercel Deployments:
- View at [vercel.com/dashboard](https://vercel.com/dashboard)
- Each deployment gets a unique URL

## 🚨 Troubleshooting

### Pipeline Fails:

1. Check pipeline logs in Bitbucket
2. Common issues:
   - Missing environment variables
   - Build errors (run `pnpm run build` locally)
   - Lint errors (run `pnpm run lint:fix`)

### Vercel Deploy Fails:

1. Check Vercel dashboard logs
2. Ensure all environment variables are set
3. Verify project is linked correctly

## 🔒 Security Best Practices

1. **Never commit** `.env` files
2. **Always use** secured variables for sensitive data
3. **Rotate tokens** regularly
4. **Use branch protection** for main/production
5. **Review PRs** before merging

## 📚 Additional Resources

- [Bitbucket Pipelines Documentation](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🤝 Support

For issues or questions:
1. Check the pipeline logs
2. Review this documentation
3. Contact the development team

---

Last Updated: November 2024
