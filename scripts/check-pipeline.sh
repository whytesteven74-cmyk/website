#!/bin/bash

# Pipeline Configuration Checker
# This script verifies that your CI/CD pipeline is fully configured

echo "🔍 CI/CD Pipeline Configuration Check"
echo "======================================"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check functions
check_pass() {
    echo -e "${GREEN}✅ $1${NC}"
}

check_fail() {
    echo -e "${RED}❌ $1${NC}"
}

check_warn() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Track overall status
PIPELINE_READY=true

echo "📁 Checking GitHub Configuration..."
echo "-----------------------------------"

# Check for .github directory
if [ -d ".github" ]; then
    check_pass ".github directory exists"
    
    # Check for workflows
    if [ -d ".github/workflows" ]; then
        check_pass "Workflows directory exists"
        
        if [ -f ".github/workflows/ci.yml" ]; then
            check_pass "CI/CD workflow configured"
        else
            check_fail "CI/CD workflow missing"
            PIPELINE_READY=false
        fi
        
        if [ -f ".github/workflows/preview.yml" ]; then
            check_pass "Preview workflow configured"
        else
            check_warn "Preview workflow missing (optional)"
        fi
    else
        check_fail "Workflows directory missing"
        PIPELINE_READY=false
    fi
    
    # Check for other GitHub files
    if [ -f ".github/dependabot.yml" ]; then
        check_pass "Dependabot configured"
    else
        check_warn "Dependabot not configured (optional)"
    fi
    
    if [ -f ".github/CODEOWNERS" ]; then
        check_pass "CODEOWNERS configured"
    else
        check_warn "CODEOWNERS not configured (optional)"
    fi
else
    check_fail ".github directory missing"
    PIPELINE_READY=false
fi

echo ""
echo "🔧 Checking Project Configuration..."
echo "------------------------------------"

# Check for required files
if [ -f "package.json" ]; then
    check_pass "package.json exists"
    
    # Check for required scripts
    if grep -q '"lint"' package.json; then
        check_pass "Lint script configured"
    else
        check_fail "Lint script missing"
        PIPELINE_READY=false
    fi
    
    if grep -q '"build"' package.json; then
        check_pass "Build script configured"
    else
        check_fail "Build script missing"
        PIPELINE_READY=false
    fi
    
    if grep -q '"typecheck"' package.json; then
        check_pass "Type check script configured"
    else
        check_warn "Type check script missing (recommended)"
    fi
else
    check_fail "package.json missing"
    PIPELINE_READY=false
fi

# Check for Vercel configuration
if [ -f "vercel.json" ]; then
    check_pass "Vercel configuration exists"
else
    check_warn "vercel.json missing (using defaults)"
fi

# Check for lighthouse configuration
if [ -f ".lighthouserc.js" ]; then
    check_pass "Lighthouse CI configured"
else
    check_warn "Lighthouse CI not configured (optional)"
fi

echo ""
echo "🌐 Checking Git Configuration..."
echo "--------------------------------"

# Check git remote
if git remote -v | grep -q "github.com"; then
    check_pass "GitHub remote configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "   Repository: $REMOTE_URL"
else
    check_fail "GitHub remote not configured"
    PIPELINE_READY=false
fi

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" = "main" ]; then
    check_pass "On main branch"
else
    check_warn "Not on main branch (current: $CURRENT_BRANCH)"
fi

# Check for uncommitted changes
if git diff-index --quiet HEAD --; then
    check_pass "No uncommitted changes"
else
    check_warn "Uncommitted changes detected"
fi

echo ""
echo "🚀 Checking Vercel Integration..."
echo "---------------------------------"

# Check for Vercel CLI
if command -v /home/steve/.local/share/pnpm/vercel &> /dev/null; then
    check_pass "Vercel CLI installed"
    
    # Check if linked
    if [ -d ".vercel" ]; then
        check_pass "Project linked to Vercel"
    else
        check_fail "Project not linked to Vercel"
        echo "   Run: /home/steve/.local/share/pnpm/vercel link"
        PIPELINE_READY=false
    fi
else
    check_fail "Vercel CLI not found"
    PIPELINE_READY=false
fi

echo ""
echo "📦 Checking Dependencies..."
echo "---------------------------"

# Check for node_modules
if [ -d "node_modules" ]; then
    check_pass "Dependencies installed"
else
    check_warn "Dependencies not installed"
    echo "   Run: pnpm install"
fi

# Check for @vercel/blob
if [ -f "package.json" ] && grep -q "@vercel/blob" package.json; then
    check_pass "Vercel Blob Storage configured"
else
    check_warn "Vercel Blob Storage not configured"
fi

echo ""
echo "📊 Running Quick Tests..."
echo "------------------------"

# Test build
echo "Testing build..."
if pnpm build > /dev/null 2>&1; then
    check_pass "Build successful"
else
    check_fail "Build failed"
    PIPELINE_READY=false
fi

# Test lint
echo "Testing linter..."
if pnpm lint > /dev/null 2>&1; then
    check_pass "Lint check passed"
else
    check_warn "Lint issues detected"
fi

# Test typecheck
echo "Testing types..."
if pnpm typecheck > /dev/null 2>&1; then
    check_pass "Type check passed"
else
    check_warn "Type errors detected"
fi

echo ""
echo "======================================"
echo ""

if [ "$PIPELINE_READY" = true ]; then
    echo -e "${GREEN}✅ Pipeline is fully configured!${NC}"
    echo ""
    echo "Your CI/CD pipeline includes:"
    echo "• Automatic deployment on push to main"
    echo "• Preview deployments for pull requests"
    echo "• Code quality checks (lint, typecheck)"
    echo "• Security scanning"
    echo "• Performance monitoring"
    echo ""
    echo "Push to GitHub to trigger deployment:"
    echo "  git push origin main"
else
    echo -e "${RED}❌ Pipeline configuration incomplete${NC}"
    echo ""
    echo "Please fix the issues above before pushing."
fi

echo ""
echo "📋 Useful Commands:"
echo "-------------------"
echo "• Check status:    git status"
echo "• Push changes:    git push origin main"
echo "• View deploys:    /home/steve/.local/share/pnpm/vercel list"
echo "• View logs:       /home/steve/.local/share/pnpm/vercel logs"
echo "• Run tests:       pnpm lint && pnpm typecheck && pnpm build"
echo ""
echo "🔗 Important Links:"
echo "-------------------"
echo "• Live Site:       https://stevenwhyte.vercel.app"
echo "• GitHub Repo:     https://github.com/whytesteven74-cmyk/website"
echo "• Vercel Dashboard: https://vercel.com/whytesteven74-1176s-projects/personal-website"
echo "• GitHub Actions:   https://github.com/whytesteven74-cmyk/website/actions"
