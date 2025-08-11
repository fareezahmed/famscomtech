# Deployment script for FamsComTech
# Usage: .\deploy.ps1

# Load environment variables from .env files if they exist
$envFiles = @(".env.local", ".env")
foreach ($envFile in $envFiles) {
    if (Test-Path $envFile) {
        Write-Host "Loading environment variables from $envFile..." -ForegroundColor Blue
        Get-Content $envFile | ForEach-Object {
            if ($_ -match "^([^#][^=]+)=(.*)$") {
                $name = $matches[1].Trim()
                $value = $matches[2].Trim()
                Set-Item -Path "env:$name" -Value $value
            }
        }
        break  # Use the first file found
    }
}

# Check if GITHUB_TOKEN is set
if (-not $env:GITHUB_TOKEN) {
    Write-Host "GITHUB_TOKEN environment variable is not set!" -ForegroundColor Red
    Write-Host "Please either:" -ForegroundColor Yellow
    Write-Host "1. Set it with: `$env:GITHUB_TOKEN='your_token_here'" -ForegroundColor Yellow
    Write-Host "2. Create a .env.local file with: GITHUB_TOKEN=your_token_here" -ForegroundColor Yellow
    exit 1
}

Write-Host "Starting deployment..." -ForegroundColor Green

# Build the project
Write-Host "Building project..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Verify that all expected pages were generated
Write-Host "Verifying static pages..." -ForegroundColor Blue
$expectedPages = @(
    "index.html",
    "about.html", 
    "admin.html",
    "areas.html",
    "book.html",
    "contact.html",
    "design-system.html",
    "faq.html",
    "marketing.html",
    "pricing.html",
    "pwa.html",
    "services.html",
    "sustainability.html",
    "404.html"
)

foreach ($page in $expectedPages) {
    if (Test-Path "out\$page") {
        Write-Host "✓ $page" -ForegroundColor Green
    } else {
        Write-Host "✗ $page (missing)" -ForegroundColor Red
    }
}

# Fix for GitHub Pages: Rename _next folder to static
# GitHub Pages ignores folders starting with underscore
Write-Host "Fixing _next folder for GitHub Pages..." -ForegroundColor Blue
if (Test-Path "out\_next") {
    # Use Move-Item instead of Rename-Item for better handling of directories with subdirectories
    Move-Item "out\_next" "out\static" -Force
    Write-Host "Renamed _next to static" -ForegroundColor Green
    
    # Update all HTML files to reference 'static' instead of '_next'
    Write-Host "Updating HTML files to reference 'static' folder..." -ForegroundColor Blue
    Get-ChildItem "out\*.html" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $updatedContent = $content -replace '/_next/', '/static/'
        Set-Content $_.FullName $updatedContent -NoNewline
    }
    Write-Host "Updated HTML files" -ForegroundColor Green
} else {
    Write-Host "Warning: _next folder not found" -ForegroundColor Yellow
}

# Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Blue
npx gh-pages -d out --repo https://$env:GITHUB_TOKEN@github.com/fareezahmed/famscomtech.git

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
    Write-Host "Your site should be available at: https://fareezahmed.github.io/famscomtech/" -ForegroundColor Cyan
} else {
    Write-Host "Deployment failed!" -ForegroundColor Red
    exit 1
}
