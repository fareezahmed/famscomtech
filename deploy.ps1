# Famscontech Website Deployment Script (PowerShell)
# This script helps with deploying the website to GitHub Pages

param(
    [Parameter(Position=0)]
    [ValidateSet("deploy", "setup", "status", "help")]
    [string]$Command = "help"
)

Write-Host "🚀 Famscontech Website Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Check if git is installed
function Test-GitInstalled {
    try {
        git --version | Out-Null
        return $true
    }
    catch {
        return $false
    }
}

# Check if we're in a git repository
function Test-GitRepository {
    try {
        git rev-parse --git-dir | Out-Null
        return $true
    }
    catch {
        return $false
    }
}

# Check if required files exist
function Test-RequiredFiles {
    $missingFiles = @()
    
    if (-not (Test-Path "index.html")) {
        $missingFiles += "index.html"
    }
    
    if (-not (Test-Path "CNAME")) {
        $missingFiles += "CNAME"
    }
    
    if ($missingFiles.Count -gt 0) {
        Write-Host "❌ Missing required files: $($missingFiles -join ', ')" -ForegroundColor Red
        return $false
    }
    
    return $true
}

# Setup GitHub Pages instructions
function Show-GitHubPagesSetup {
    Write-Host "📋 Setting up GitHub Pages..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Go to your GitHub repository: https://github.com/yourusername/famscomtech" -ForegroundColor White
    Write-Host "2. Click on 'Settings' tab" -ForegroundColor White
    Write-Host "3. Scroll down to 'Pages' section in the left sidebar" -ForegroundColor White
    Write-Host "4. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "5. The deployment will start automatically when you push to main branch" -ForegroundColor White
    Write-Host ""
    Write-Host "✅ GitHub Pages will be available at: https://yourusername.github.io/famscomtech" -ForegroundColor Green
    Write-Host "🌐 Custom domain (if configured): https://famscontech.com.au" -ForegroundColor Green
}

# Deploy function
function Deploy-Website {
    Write-Host "📦 Preparing deployment..." -ForegroundColor Yellow
    
    # Check if git is installed
    if (-not (Test-GitInstalled)) {
        Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
        exit 1
    }
    
    # Check if we're in a git repository
    if (-not (Test-GitRepository)) {
        Write-Host "❌ Not in a git repository. Please initialize git first:" -ForegroundColor Red
        Write-Host "   git init" -ForegroundColor White
        Write-Host "   git remote add origin https://github.com/yourusername/famscomtech.git" -ForegroundColor White
        exit 1
    }
    
    # Check if required files exist
    if (-not (Test-RequiredFiles)) {
        exit 1
    }
    
    # Add all files
    Write-Host "📝 Adding files to git..." -ForegroundColor Yellow
    git add .
    
    # Check if there are changes to commit
    $status = git status --porcelain
    if ([string]::IsNullOrEmpty($status)) {
        Write-Host "ℹ️  No changes to commit" -ForegroundColor Blue
    } else {
        # Commit changes
        Write-Host "💾 Committing changes..." -ForegroundColor Yellow
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Deploy website updates - $timestamp"
        
        # Push to main branch
        Write-Host "🚀 Pushing to main branch..." -ForegroundColor Yellow
        git push origin main
        
        Write-Host "✅ Deployment initiated!" -ForegroundColor Green
        Write-Host "📋 Check the Actions tab in your GitHub repository to monitor deployment progress" -ForegroundColor White
    }
}

# Check deployment status
function Show-DeploymentStatus {
    Write-Host "🔍 Checking deployment status..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Visit: https://github.com/yourusername/famscomtech/actions" -ForegroundColor White
    Write-Host "2. Look for the latest workflow run" -ForegroundColor White
    Write-Host "3. Check if the deployment was successful" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Your website should be available at:" -ForegroundColor White
    Write-Host "   - GitHub Pages: https://yourusername.github.io/famscomtech" -ForegroundColor White
    Write-Host "   - Custom domain: https://famscontech.com.au (if configured)" -ForegroundColor White
}

# Show help
function Show-Help {
    Write-Host "Usage: .\deploy.ps1 [COMMAND]" -ForegroundColor White
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor White
    Write-Host "  deploy     - Deploy the website to GitHub Pages" -ForegroundColor White
    Write-Host "  setup      - Show GitHub Pages setup instructions" -ForegroundColor White
    Write-Host "  status     - Check deployment status" -ForegroundColor White
    Write-Host "  help       - Show this help message" -ForegroundColor White
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor White
    Write-Host "  .\deploy.ps1 deploy    # Deploy the website" -ForegroundColor White
    Write-Host "  .\deploy.ps1 setup     # Show setup instructions" -ForegroundColor White
    Write-Host "  .\deploy.ps1 status    # Check deployment status" -ForegroundColor White
}

# Main script logic
switch ($Command) {
    "deploy" {
        Deploy-Website
    }
    "setup" {
        Show-GitHubPagesSetup
    }
    "status" {
        Show-DeploymentStatus
    }
    "help" {
        Show-Help
    }
    default {
        Show-Help
    }
}
