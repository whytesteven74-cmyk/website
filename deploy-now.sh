#!/bin/bash

# Automated Vercel Deployment Script
echo "🚀 Automated Vercel Deployment"
echo "=============================="
echo ""

VERCEL="/home/steve/.local/share/pnpm/vercel"

# Check if already logged in
echo "Checking authentication status..."
if $VERCEL whoami 2>/dev/null; then
    echo "✅ Already authenticated!"
else
    echo "⚠️  Not authenticated. Please run: $VERCEL login"
    echo "Then run this script again."
    exit 1
fi

echo ""
echo "📦 Deploying to Vercel..."
echo ""

# Deploy with automatic yes to all prompts
$VERCEL --yes --prod

echo ""
echo "✨ Deployment complete!"
echo ""
echo "Your site should now be live. Check the URL above!"
echo ""
echo "Next steps:"
echo "1. Copy your production URL"
echo "2. Share it so we can configure environment variables"
echo "3. We'll set up auto-deploy from Bitbucket"
