#!/bin/bash

echo "🔍 Verifying Vite Configuration..."
echo ""

# Check vite.config.ts
echo "📄 Checking vite.config.ts..."
if grep -q 'outDir.*dist' vite.config.ts; then
    echo "✅ vite.config.ts has outDir: 'dist'"
else
    echo "❌ vite.config.ts does NOT have outDir: 'dist'"
    echo "   Current value:"
    grep 'outDir' vite.config.ts
fi

echo ""

# Check package.json
echo "📄 Checking package.json..."
if grep -q 'vite build --outDir dist' package.json; then
    echo "✅ package.json build script has --outDir dist flag"
elif grep -q 'vite build' package.json; then
    echo "⚠️  package.json has 'vite build' but no --outDir flag"
    echo "   Current value:"
    grep '"build"' package.json
fi

echo ""

# Check netlify.toml
echo "📄 Checking netlify.toml..."
if grep -q 'publish.*dist' netlify.toml; then
    echo "✅ netlify.toml has publish = \"dist\""
else
    echo "❌ netlify.toml does NOT have publish = \"dist\""
    echo "   Current value:"
    grep 'publish' netlify.toml
fi

echo ""

# Check .nvmrc
echo "📄 Checking .nvmrc..."
if [ -f .nvmrc ]; then
    NODE_VER=$(cat .nvmrc)
    echo "✅ .nvmrc exists (Node $NODE_VER)"
else
    echo "❌ .nvmrc does NOT exist"
fi

echo ""
echo "================================"
echo "🎯 Configuration Summary"
echo "================================"

ISSUES=0

if ! grep -q 'outDir.*dist' vite.config.ts; then
    ISSUES=$((ISSUES+1))
fi

if ! grep -q 'publish.*dist' netlify.toml; then
    ISSUES=$((ISSUES+1))
fi

if [ $ISSUES -eq 0 ]; then
    echo "✅ All configurations look correct!"
    echo ""
    echo "Next steps:"
    echo "1. Push these changes to GitHub"
    echo "2. Go to Netlify dashboard"
    echo "3. Trigger deploy → Clear cache and deploy"
    echo "4. Watch for 'dist/' folder in build logs"
else
    echo "⚠️  Found $ISSUES configuration issue(s)"
    echo ""
    echo "Please review the files above and fix any issues."
fi

echo ""
