#!/bin/bash

# Deployment script for portfolio-src
# This script builds the Next.js project and copies the output to the portfolio repo
# Similar to: flutter build web --pwa-strategy=none --release && cp -r build/web/* ../portfolio/

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Step 1: Build the Next.js project
echo -e "${BLUE}📦 Building Next.js project...${NC}"
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo -e "${YELLOW}❌ Build failed: 'out' directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Step 2: Determine portfolio repo path
# Assuming portfolio repo is a sibling directory (same as Flutter workflow)
PORTFOLIO_REPO="../portfolio"

if [ ! -d "$PORTFOLIO_REPO" ]; then
    echo -e "${YELLOW}⚠️  Portfolio repo not found at: $PORTFOLIO_REPO${NC}"
    echo -e "${YELLOW}   Please update PORTFOLIO_REPO variable in deploy.sh if your portfolio repo is elsewhere${NC}"
    exit 1
fi

# Step 3: Copy built files to portfolio repo
echo -e "${BLUE}📋 Copying built files to portfolio repo...${NC}"
cp -r out/* "$PORTFOLIO_REPO/"

echo -e "${GREEN}✅ Files copied successfully to $PORTFOLIO_REPO${NC}"
echo -e "${BLUE}📝 Next steps:${NC}"
echo -e "   1. cd $PORTFOLIO_REPO"
echo -e "   2. git add ."
echo -e "   3. git commit -m 'Deploy: Update from portfolio-src build'"
echo -e "   4. git push"
echo -e "${GREEN}🎉 Deployment files ready!${NC}"

