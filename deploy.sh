#!/bin/bash

# Famscontech Website Deployment Script
# This script helps with deploying the website to GitHub Pages

echo "🚀 Famscontech Website Deployment Script"
echo "========================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/yourusername/famscomtech.git"
    exit 1
fi

# Function to check if files exist
check_files() {
    local missing_files=()
    
    if [[ ! -f "index.html" ]]; then
        missing_files+=("index.html")
    fi
    
    if [[ ! -f "CNAME" ]]; then
        missing_files+=("CNAME")
    fi
    
    if [[ ${#missing_files[@]} -gt 0 ]]; then
        echo "❌ Missing required files: ${missing_files[*]}"
        return 1
    fi
    
    return 0
}

# Function to setup GitHub Pages
setup_github_pages() {
    echo "📋 Setting up GitHub Pages..."
    echo ""
    echo "1. Go to your GitHub repository: https://github.com/yourusername/famscomtech"
    echo "2. Click on 'Settings' tab"
    echo "3. Scroll down to 'Pages' section in the left sidebar"
    echo "4. Under 'Source', select 'GitHub Actions'"
    echo "5. The deployment will start automatically when you push to main branch"
    echo ""
    echo "✅ GitHub Pages will be available at: https://yourusername.github.io/famscomtech"
    echo "🌐 Custom domain (if configured): https://famscontech.com.au"
}

# Function to deploy
deploy() {
    echo "📦 Preparing deployment..."
    
    # Check if files exist
    if ! check_files; then
        exit 1
    fi
    
    # Add all files
    echo "📝 Adding files to git..."
    git add .
    
    # Check if there are changes to commit
    if git diff --cached --quiet; then
        echo "ℹ️  No changes to commit"
    else
        # Commit changes
        echo "💾 Committing changes..."
        git commit -m "Deploy website updates - $(date '+%Y-%m-%d %H:%M:%S')"
        
        # Push to main branch
        echo "🚀 Pushing to main branch..."
        git push origin main
        
        echo "✅ Deployment initiated!"
        echo "📋 Check the Actions tab in your GitHub repository to monitor deployment progress"
    fi
}

# Function to check deployment status
check_status() {
    echo "🔍 Checking deployment status..."
    echo ""
    echo "1. Visit: https://github.com/yourusername/famscomtech/actions"
    echo "2. Look for the latest workflow run"
    echo "3. Check if the deployment was successful"
    echo ""
    echo "🌐 Your website should be available at:"
    echo "   - GitHub Pages: https://yourusername.github.io/famscomtech"
    echo "   - Custom domain: https://famscontech.com.au (if configured)"
}

# Function to show help
show_help() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  deploy     - Deploy the website to GitHub Pages"
    echo "  setup      - Show GitHub Pages setup instructions"
    echo "  status     - Check deployment status"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 deploy    # Deploy the website"
    echo "  $0 setup     # Show setup instructions"
    echo "  $0 status    # Check deployment status"
}

# Main script logic
case "${1:-help}" in
    "deploy")
        deploy
        ;;
    "setup")
        setup_github_pages
        ;;
    "status")
        check_status
        ;;
    "help"|*)
        show_help
        ;;
esac
