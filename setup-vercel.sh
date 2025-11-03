#!/bin/bash

# Vercel Setup Helper Script
echo "🚀 Vercel Setup Helper"
echo "====================="
echo ""

# Create alias for easier access
echo "Creating 'vercel' alias for easier access..."
echo 'alias vercel="/home/steve/.local/share/pnpm/vercel"' >> ~/.bashrc
source ~/.bashrc 2>/dev/null || true

echo "✅ Vercel CLI is ready at: /home/steve/.local/share/pnpm/vercel"
echo ""
echo "📋 Quick Setup Steps:"
echo ""
echo "1️⃣  Login to Vercel:"
echo "    /home/steve/.local/share/pnpm/vercel login"
echo ""
echo "2️⃣  Link your project:"
echo "    /home/steve/.local/share/pnpm/vercel link"
echo ""
echo "3️⃣  Deploy to production:"
echo "    /home/steve/.local/share/pnpm/vercel --prod"
echo ""
echo "For Bitbucket push, first create an app password at:"
echo "https://bitbucket.org/account/settings/app-passwords/"
echo ""
echo "Then push with:"
echo "git push https://stevework1979:YOUR_APP_PASSWORD@bitbucket.org/stevework1979/website.git main"
