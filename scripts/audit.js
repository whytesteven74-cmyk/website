#!/usr/bin/env node

/**
 * Website Audit Script
 * Comprehensive analysis of performance, SEO, accessibility, and usability
 */

const fs = require('fs');
const path = require('path');

const AUDIT_RESULTS = {
  performance: [],
  seo: [],
  accessibility: [],
  usability: [],
  security: [],
  codeQuality: []
};

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(type, message) {
  let color;
  switch (type) {
    case 'error': color = colors.red; break;
    case 'warning': color = colors.yellow; break;
    case 'success': color = colors.green; break;
    case 'info': color = colors.cyan; break;
    default: color = colors.reset;
  }
  console.log(`${color}${message}${colors.reset}`);
}

// Performance Checks
function checkPerformance() {
  log('info', '\n📊 Performance Analysis:');
  
  // Check for image optimization
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    const images = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
    
    if (images.length === 0) {
      AUDIT_RESULTS.performance.push({
        type: 'info',
        message: 'No raster images found - using SVGs (good for performance)'
      });
    }
  }
  
  // Check for lazy loading
  const srcDir = path.join(process.cwd(), 'src');
  const hasLazyLoad = checkFilesForPattern(srcDir, /loading\s*=\s*["']lazy["']/);
  if (!hasLazyLoad) {
    AUDIT_RESULTS.performance.push({
      type: 'warning',
      message: 'Consider adding lazy loading for images and heavy components'
    });
  }
  
  // Check bundle size warnings
  const packageJson = require(path.join(process.cwd(), 'package.json'));
  const heavyDeps = ['moment', 'lodash'];
  heavyDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      AUDIT_RESULTS.performance.push({
        type: 'warning',
        message: `Heavy dependency "${dep}" detected. Consider lighter alternatives.`
      });
    }
  });
  
  log('success', `✅ ${AUDIT_RESULTS.performance.filter(r => r.type === 'success').length} checks passed`);
  log('warning', `⚠️  ${AUDIT_RESULTS.performance.filter(r => r.type === 'warning').length} warnings`);
}

// SEO Checks
function checkSEO() {
  log('info', '\n🔍 SEO Analysis:');
  
  // Check for meta tags
  const layoutFile = path.join(process.cwd(), 'src/app/layout.tsx');
  if (fs.existsSync(layoutFile)) {
    const content = fs.readFileSync(layoutFile, 'utf8');
    
    const seoChecks = [
      { pattern: /metadataBase/, name: 'metadataBase' },
      { pattern: /openGraph/, name: 'Open Graph tags' },
      { pattern: /twitter/, name: 'Twitter cards' },
      { pattern: /keywords/, name: 'Keywords meta' },
      { pattern: /description/, name: 'Description meta' }
    ];
    
    seoChecks.forEach(check => {
      if (check.pattern.test(content)) {
        AUDIT_RESULTS.seo.push({
          type: 'success',
          message: `✅ ${check.name} configured`
        });
      } else {
        AUDIT_RESULTS.seo.push({
          type: 'warning',
          message: `Missing ${check.name}`
        });
      }
    });
  }
  
  // Check for sitemap
  if (fs.existsSync(path.join(process.cwd(), 'src/app/sitemap.ts'))) {
    AUDIT_RESULTS.seo.push({
      type: 'success',
      message: '✅ Sitemap configured'
    });
  }
  
  // Check for robots.txt
  if (fs.existsSync(path.join(process.cwd(), 'src/app/robots.ts'))) {
    AUDIT_RESULTS.seo.push({
      type: 'success',
      message: '✅ Robots.txt configured'
    });
  }
  
  log('success', `✅ ${AUDIT_RESULTS.seo.filter(r => r.type === 'success').length} checks passed`);
  log('warning', `⚠️  ${AUDIT_RESULTS.seo.filter(r => r.type === 'warning').length} warnings`);
}

// Accessibility Checks
function checkAccessibility() {
  log('info', '\n♿ Accessibility Analysis:');
  
  const srcDir = path.join(process.cwd(), 'src');
  
  // Check for alt text
  const hasAltText = checkFilesForPattern(srcDir, /alt\s*=\s*["'][^"']+["']/);
  AUDIT_RESULTS.accessibility.push({
    type: hasAltText ? 'success' : 'warning',
    message: hasAltText ? '✅ Alt attributes found' : 'Missing alt attributes on images'
  });
  
  // Check for aria labels
  const hasAriaLabels = checkFilesForPattern(srcDir, /aria-label/);
  AUDIT_RESULTS.accessibility.push({
    type: hasAriaLabels ? 'success' : 'warning',
    message: hasAriaLabels ? '✅ ARIA labels found' : 'Consider adding ARIA labels for better screen reader support'
  });
  
  // Check for skip link
  const hasSkipLink = checkFilesForPattern(srcDir, /Skip to content/);
  AUDIT_RESULTS.accessibility.push({
    type: hasSkipLink ? 'success' : 'warning',
    message: hasSkipLink ? '✅ Skip link present' : 'Add skip link for keyboard navigation'
  });
  
  // Check for semantic HTML
  const semanticElements = ['<header', '<nav', '<main', '<footer', '<section', '<article'];
  semanticElements.forEach(element => {
    if (checkFilesForPattern(srcDir, new RegExp(element))) {
      AUDIT_RESULTS.accessibility.push({
        type: 'success',
        message: `✅ Using semantic ${element.replace('<', '')} element`
      });
    }
  });
  
  log('success', `✅ ${AUDIT_RESULTS.accessibility.filter(r => r.type === 'success').length} checks passed`);
  log('warning', `⚠️  ${AUDIT_RESULTS.accessibility.filter(r => r.type === 'warning').length} warnings`);
}

// Usability Checks
function checkUsability() {
  log('info', '\n🎯 Usability Analysis:');
  
  const srcDir = path.join(process.cwd(), 'src');
  
  // Check for loading states
  const hasLoadingStates = checkFilesForPattern(srcDir, /loading|skeleton|spinner/i);
  AUDIT_RESULTS.usability.push({
    type: hasLoadingStates ? 'success' : 'warning',
    message: hasLoadingStates ? '✅ Loading states implemented' : 'Consider adding loading states'
  });
  
  // Check for error boundaries
  const hasErrorHandling = checkFilesForPattern(srcDir, /error\.(tsx?|jsx?)|catch|try/);
  AUDIT_RESULTS.usability.push({
    type: hasErrorHandling ? 'success' : 'warning',
    message: hasErrorHandling ? '✅ Error handling present' : 'Add error boundaries for better UX'
  });
  
  // Check for 404 page
  const has404 = fs.existsSync(path.join(process.cwd(), 'src/app/not-found.tsx'));
  AUDIT_RESULTS.usability.push({
    type: has404 ? 'success' : 'warning',
    message: has404 ? '✅ Custom 404 page exists' : 'Add custom 404 page'
  });
  
  // Check for mobile responsiveness
  const hasResponsive = checkFilesForPattern(srcDir, /sm:|md:|lg:|xl:|2xl:/);
  AUDIT_RESULTS.usability.push({
    type: hasResponsive ? 'success' : 'warning',
    message: hasResponsive ? '✅ Responsive design implemented' : 'Ensure mobile responsiveness'
  });
  
  log('success', `✅ ${AUDIT_RESULTS.usability.filter(r => r.type === 'success').length} checks passed`);
  log('warning', `⚠️  ${AUDIT_RESULTS.usability.filter(r => r.type === 'warning').length} warnings`);
}

// Security Checks
function checkSecurity() {
  log('info', '\n🔒 Security Analysis:');
  
  // Check for environment variables
  if (fs.existsSync('.env.example')) {
    AUDIT_RESULTS.security.push({
      type: 'success',
      message: '✅ .env.example file present for configuration'
    });
  }
  
  // Check for secure headers in vercel.json
  if (fs.existsSync('vercel.json')) {
    const vercelConfig = require(path.join(process.cwd(), 'vercel.json'));
    if (vercelConfig.headers) {
      AUDIT_RESULTS.security.push({
        type: 'success',
        message: '✅ Security headers configured'
      });
    }
  }
  
  // Check for exposed sensitive data
  const srcDir = path.join(process.cwd(), 'src');
  const hasSensitiveData = checkFilesForPattern(srcDir, /api[_-]?key|secret|password|token/i);
  if (hasSensitiveData) {
    AUDIT_RESULTS.security.push({
      type: 'warning',
      message: 'Potential sensitive data found - ensure using environment variables'
    });
  }
  
  log('success', `✅ ${AUDIT_RESULTS.security.filter(r => r.type === 'success').length} checks passed`);
  log('warning', `⚠️  ${AUDIT_RESULTS.security.filter(r => r.type === 'warning').length} warnings`);
}

// Helper function to check files for patterns
function checkFilesForPattern(dir, pattern) {
  if (!fs.existsSync(dir)) return false;
  
  const files = getAllFiles(dir);
  for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(file, 'utf8');
      if (pattern.test(content)) {
        return true;
      }
    }
  }
  return false;
}

// Get all files recursively
function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) {
      results = results.concat(getAllFiles(file));
    } else {
      results.push(file);
    }
  });
  
  return results;
}

// Generate report
function generateReport() {
  log('info', '\n📋 AUDIT SUMMARY:');
  log('info', '═══════════════════════════════════════');
  
  let totalIssues = 0;
  let totalWarnings = 0;
  let totalSuccess = 0;
  
  Object.entries(AUDIT_RESULTS).forEach(([category, results]) => {
    const warnings = results.filter(r => r.type === 'warning').length;
    const errors = results.filter(r => r.type === 'error').length;
    const success = results.filter(r => r.type === 'success').length;
    
    totalWarnings += warnings;
    totalIssues += errors;
    totalSuccess += success;
    
    if (results.length > 0) {
      log('info', `\n${category.toUpperCase()}:`);
      results.forEach(result => {
        if (result.type === 'error') {
          log('error', `  ❌ ${result.message}`);
        } else if (result.type === 'warning') {
          log('warning', `  ⚠️  ${result.message}`);
        } else if (result.type === 'success') {
          log('success', `  ✅ ${result.message}`);
        } else {
          log('info', `  ℹ️  ${result.message}`);
        }
      });
    }
  });
  
  log('info', '\n═══════════════════════════════════════');
  log('success', `✅ Total Passed: ${totalSuccess}`);
  log('warning', `⚠️  Total Warnings: ${totalWarnings}`);
  log('error', `❌ Total Issues: ${totalIssues}`);
  
  // Generate JSON report
  const reportPath = path.join(process.cwd(), 'audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(AUDIT_RESULTS, null, 2));
  log('info', `\n📄 Detailed report saved to: ${reportPath}`);
}

// Main execution
function main() {
  log('info', '🔍 Starting Comprehensive Website Audit...\n');
  
  checkPerformance();
  checkSEO();
  checkAccessibility();
  checkUsability();
  checkSecurity();
  
  generateReport();
  
  log('info', '\n✨ Audit Complete!\n');
}

main();
