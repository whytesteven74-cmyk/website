#!/bin/bash

# Deployment Script for Steven Whyte Website
# This script helps with Vercel deployment setup

echo "🚀 Steven Whyte Website - Deployment Setup"
echo "========================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    pnpm add -g vercel
else
    echo "✅ Vercel CLI is installed"
fi

# Check if logged in
echo ""
echo "📝 Step 1: Login to Vercel"
echo "Please run: vercel login"
echo "Then press Enter to continue..."
read

# Link project
echo ""
echo "🔗 Step 2: Link Project"
vercel link

# Deploy
echo ""
echo "🚀 Step 3: Deploy to Vercel"
echo "Choose deployment type:"
echo "1) Preview deployment"
echo "2) Production deployment"
read -p "Enter choice (1-2): " choice

case $choice in
    1)
        echo "Deploying to preview..."
        vercel
        ;;
    2)
        echo "Deploying to production..."
        vercel --prod
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✨ Deployment complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Copy the deployment URL"
echo "2. Update NEXT_PUBLIC_SITE_URL in your environment"
echo "3. Push to Bitbucket to trigger CI/CD pipeline"
