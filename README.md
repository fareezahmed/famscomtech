# Famscomtech pty Ltd Website

A professional single-page website for Famscomtech pty Ltd, a Network Infrastructure Construction Services company based in Australia.

## About Famscomtech pty Ltd

Famscomtech pty Ltd provides Network Infrastructure Construction Services specialising in:
- Site surveys
- Technology installation
- Infrastructure augmentation
- Commissioning
- Integration

The company has been operating and providing excellent services for over 10 years, serving major Australian Mobile carriers and vendors.

## Sister Companies

The website also features sections for two sister companies:

### Ultraclean247
- **Website**: [ultraclean247.au](https://ultraclean247.au)
- **Services**: 24x7 Laundry and Coin Laundry services
- **Description**: Round-the-clock laundry services with state-of-the-art equipment and professional staff

### Fams Support Network
- **Website**: [famssupportnetwork.com.au](https://famssupportnetwork.com.au)
- **Services**: NDIS Support Partner
- **Description**: Trusted partner for tailored, respectful, and empowering NDIS support every day

## Website Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Single Page Application**: All content accessible through smooth scrolling navigation
- **Contact Form**: Interactive contact form for client inquiries
- **Professional Branding**: Consistent color scheme and typography
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)
- Responsive design principles

## Sections

1. **Hero Section**: Main introduction with call-to-action
2. **Services**: Detailed overview of network infrastructure services
3. **About**: Company information and statistics
4. **Sister Companies**: Information about Ultraclean247 and Fams Support Network
5. **Contact**: Contact information and inquiry form
6. **Footer**: Social links and company information

## Getting Started

Simply open `index.html` in a web browser to view the website. The website is self-contained and doesn't require any additional setup or dependencies.

## Deployment

### Automatic Deployment (Recommended)

The website is configured for automatic deployment to GitHub Pages using GitHub Actions. When you push changes to the main branch, the website will be automatically deployed.

#### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your GitHub repository: `https://github.com/yourusername/famscomtech`
   - Click on "Settings" tab
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Deploy using scripts:**
   ```bash
   # Linux/Mac
   chmod +x deploy.sh
   ./deploy.sh deploy
   
   # Windows PowerShell
   .\deploy.ps1 deploy
   
   # Windows Batch (alternative)
   deploy.bat deploy
   ```

3. **Manual deployment:**
   ```bash
   git add .
   git commit -m "Deploy website updates"
   git push origin main
   ```

#### Deployment Scripts

- **`deploy.sh`** - Bash script for Linux/Mac users
- **`deploy.ps1`** - PowerShell script for Windows users
- **`deploy.bat`** - Batch script for Windows users (alternative to PowerShell)
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment

#### Script Commands:

```bash
# Show help
./deploy.sh help

# Deploy website
./deploy.sh deploy

# Show setup instructions
./deploy.sh setup

# Check deployment status
./deploy.sh status
```

### Website URLs

After deployment, your website will be available at:
- **GitHub Pages**: `https://yourusername.github.io/famscomtech`
- **Custom Domain**: `https://famscomtech.com.au` (if configured)

## Customization

The website can be easily customized by modifying:
- Colors in the CSS variables
- Content in the HTML sections
- Images and icons
- Contact information
- Social media links

## Browser Support

The website is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License - see the LICENSE file for details.