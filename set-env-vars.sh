#!/bin/bash

# Script to set Vercel environment variables
echo "🔧 Setting Environment Variables for https://stevenwhyte.vercel.app"
echo "======================================================="
echo ""

VERCEL_CLI="/home/steve/.local/share/pnpm/vercel"

# Set production URL
echo "Setting NEXT_PUBLIC_SITE_URL..."
echo "https://stevenwhyte.vercel.app" | $VERCEL_CLI env add NEXT_PUBLIC_SITE_URL production

echo ""
echo "✅ Environment variable set!"
echo ""
echo "📋 Optional variables you can add:"
echo ""
echo "1. For contact form delivery (Formspree):"
echo "   $VERCEL_CLI env add FORMSPREE_ID production"
echo ""
echo "2. For database (Neon):"
echo "   $VERCEL_CLI env add DATABASE_URL production"
echo ""
echo "3. For file storage (Cloudinary):"
echo "   $VERCEL_CLI env add CLOUDINARY_CLOUD_NAME production"
echo "   $VERCEL_CLI env add CLOUDINARY_API_KEY production"
echo "   $VERCEL_CLI env add CLOUDINARY_API_SECRET production"
echo ""
echo "Or set them in the dashboard:"
echo "https://vercel.com/whytesteven74-1176s-projects/personal-website/settings/environment-variables"
