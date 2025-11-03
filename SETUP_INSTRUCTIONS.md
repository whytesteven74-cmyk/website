# 🚀 Quick Setup Instructions

## Current Status ✅
- ✅ **Git repository**: Initialized with first commit
- ✅ **Bitbucket remote**: Connected to `https://bitbucket.org/stevework1979/website.git`
- ✅ **Vercel CLI**: Installed and ready (v48.8.0)
- ✅ **Website**: Running at http://localhost:3000

## Step 1: Push to Bitbucket 📤

### Option A: Using App Password (Recommended)
1. **Create Bitbucket App Password:**
   - Go to: https://bitbucket.org/account/settings/app-passwords/
   - Click "Create app password"
   - Label: "Website Deployment"
   - Permissions: Select "Repositories: Write"
   - Copy the generated password

2. **Push your code:**
   ```bash
   # Run this command and paste your app password when prompted:
   git push -u origin main
   ```
   
   If that doesn't prompt for password, use:
   ```bash
   # Replace YOUR_APP_PASSWORD with the actual password
   git push https://stevework1979:YOUR_APP_PASSWORD@bitbucket.org/stevework1979/website.git main
   ```

### Option B: Using SSH (Alternative)
```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy your public key
cat ~/.ssh/id_ed25519.pub

# Add to Bitbucket: https://bitbucket.org/account/settings/ssh-keys/
# Then change remote to SSH:
git remote set-url origin git@bitbucket.org:stevework1979/website.git
git push -u origin main
```

## Step 2: Login to Vercel 🔐

```bash
# Run the login command
/home/steve/.local/share/pnpm/vercel login

# Choose your preferred login method:
# - GitHub
# - GitLab  
# - Bitbucket (recommended since you're using Bitbucket)
# - Email
```

## Step 3: Link & Deploy with Vercel 🌐

```bash
# Link your project to Vercel
/home/steve/.local/share/pnpm/vercel link

# Answer the prompts:
# - Set up and deploy? → Y
# - Which scope? → Select your account
# - Link to existing project? → N (first time)
# - Project name? → steven-whyte-website (or your preference)
# - Directory? → ./ (current directory)
# - Override settings? → N

# Deploy to production
/home/steve/.local/share/pnpm/vercel --prod
```

## Step 4: Connect Bitbucket to Vercel for Auto-Deploy 🔄

1. **In Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Go to Settings → Git
   - Click "Connect Git Repository"
   - Choose Bitbucket
   - Authorize and select `stevework1979/website`

2. **Configure:**
   - Production Branch: `main`
   - Auto-deploy: ✅ Enabled
   - Preview deployments: ✅ Enabled

## Step 5: Set Environment Variables 🔧

In Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your Vercel URL (e.g., https://steven-whyte.vercel.app) | Production |
| `FORMSPREE_ID` | Your Formspree form ID (optional) | Production |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Your domain (optional, for analytics) | Production |

## Step 6: Get Project IDs for CI/CD 📝

After linking with Vercel, check:
```bash
cat .vercel/project.json
```

You'll see:
```json
{
  "projectId": "prj_xxxxx",
  "orgId": "team_xxxxx"
}
```

Save these for Bitbucket Pipeline variables later.

## Quick Commands Reference 📋

```bash
# Check git status
git status

# View remote
git remote -v

# Push changes
git push origin main

# Vercel commands
/home/steve/.local/share/pnpm/vercel          # Deploy to preview
/home/steve/.local/share/pnpm/vercel --prod   # Deploy to production
/home/steve/.local/share/pnpm/vercel list     # List deployments
/home/steve/.local/share/pnpm/vercel logs     # View logs
```

## Troubleshooting 🔧

**Git push authentication failed?**
- Make sure you're using an app password, not your account password
- App passwords: https://bitbucket.org/account/settings/app-passwords/

**Vercel login issues?**
```bash
/home/steve/.local/share/pnpm/vercel logout
/home/steve/.local/share/pnpm/vercel login
```

**Can't find Vercel command?**
```bash
# It's installed at:
alias vercel="/home/steve/.local/share/pnpm/vercel"
```

---

## 🎯 Next Actions

1. **First**: Create Bitbucket app password and push your code
2. **Then**: Login to Vercel CLI
3. **Finally**: Deploy and connect for auto-deployments

Your website is ready to go live! 🚀
