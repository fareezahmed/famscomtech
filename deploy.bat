@echo off
REM Famscontech Website Deployment Script (Batch)
REM This script helps with deploying the website to GitHub Pages

setlocal enabledelayedexpansion

echo 🚀 Famscontech Website Deployment Script
echo ========================================

if "%1"=="" goto :help
if "%1"=="help" goto :help
if "%1"=="deploy" goto :deploy
if "%1"=="setup" goto :setup
if "%1"=="status" goto :status
goto :help

:deploy
echo 📦 Preparing deployment...
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    exit /b 1
)

REM Check if we're in a git repository
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    echo ❌ Not in a git repository. Please initialize git first:
    echo    git init
    echo    git remote add origin https://github.com/yourusername/famscomtech.git
    exit /b 1
)

REM Check if required files exist
if not exist "index.html" (
    echo ❌ Missing required file: index.html
    exit /b 1
)

if not exist "CNAME" (
    echo ❌ Missing required file: CNAME
    exit /b 1
)

REM Add all files
echo 📝 Adding files to git...
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if errorlevel 1 (
    REM Commit changes
    echo 💾 Committing changes...
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
    set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
    set "timestamp=%YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"
    git commit -m "Deploy website updates - %timestamp%"
    
    REM Push to main branch
    echo 🚀 Pushing to main branch...
    git push origin main
    
    echo ✅ Deployment initiated!
    echo 📋 Check the Actions tab in your GitHub repository to monitor deployment progress
) else (
    echo ℹ️  No changes to commit
)
goto :end

:setup
echo 📋 Setting up GitHub Pages...
echo.
echo 1. Go to your GitHub repository: https://github.com/yourusername/famscomtech
echo 2. Click on 'Settings' tab
echo 3. Scroll down to 'Pages' section in the left sidebar
echo 4. Under 'Source', select 'GitHub Actions'
echo 5. The deployment will start automatically when you push to main branch
echo.
echo ✅ GitHub Pages will be available at: https://yourusername.github.io/famscomtech
echo 🌐 Custom domain (if configured): https://famscontech.com.au
goto :end

:status
echo 🔍 Checking deployment status...
echo.
echo 1. Visit: https://github.com/yourusername/famscomtech/actions
echo 2. Look for the latest workflow run
echo 3. Check if the deployment was successful
echo.
echo 🌐 Your website should be available at:
echo    - GitHub Pages: https://yourusername.github.io/famscomtech
echo    - Custom domain: https://famscontech.com.au (if configured)
goto :end

:help
echo Usage: deploy.bat [COMMAND]
echo.
echo Commands:
echo   deploy     - Deploy the website to GitHub Pages
echo   setup      - Show GitHub Pages setup instructions
echo   status     - Check deployment status
echo   help       - Show this help message
echo.
echo Examples:
echo   deploy.bat deploy    # Deploy the website
echo   deploy.bat setup     # Show setup instructions
echo   deploy.bat status    # Check deployment status
goto :end

:end
endlocal
