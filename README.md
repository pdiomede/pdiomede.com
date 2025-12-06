# Paolo Diomede - Personal Portfolio Website

> Professional portfolio showcasing web3 governance expertise, ecosystem building, and community leadership.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

🔗 **Live Site**: [pdiomede.com](https://pdiomede.com)

---

## 📋 About

This is the source code for my personal portfolio website, highlighting my work in:

- **web3 Governance** - Technical Account Manager at [Certora](https://www.certora.com)
- **Ecosystem Building** - Advisory Board Member at [Livepeer](https://livepeer.org)
- **Community Leadership** - Former Ecosystem Manager at [The Graph Foundation](https://thegraph.com) (2022-2025), Founder of [Graphtronauts](https://graphtronauts.app) and [Live Pioneers](https://livepioneers.app)
- **Innovation** - Creator of [IndexerScore.com](https://indexerscore.com) and [GraphTools.pro](https://graphtools.pro)

---

## ✨ Features

### Performance
- ⚡ **Fast Loading** - Optimized for speed with lazy loading, image preloading, and minimal JavaScript
- 📱 **Responsive Design** - Mobile-first approach, works on all devices
- 🎯 **Core Web Vitals** - Excellent LCP, CLS, and FID scores

### Accessibility
- ♿ **WCAG 2.1 AAA Compliant** - 100/100 Accessibility Score
- ⌨️ **Keyboard Navigation** - Full keyboard support with skip links
- 🎨 **ARIA Labels** - Comprehensive screen reader support

### SEO & Security
- 🔍 **SEO Optimized** - Complete meta tags, Schema.org structured data
- 🔒 **Secure** - Content Security Policy, SRI, secure headers
- 🌐 **PWA Ready** - Progressive Web App capabilities

### Design
- 🌗 **Dark Mode** - System preference detection with manual toggle
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🖼️ **Brand Integration** - Dynamic logos with light/dark variants
- 🎛️ **Interactive Toggles** - Circular design selector and theme toggle that expand on click

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone or download** the repository:
```bash
git clone https://github.com/pdiomede/pdiomede.com.git
cd pdiomede.com
```

2. **Open the website**:
   - Simply open `index.html` in your browser, or
   - Use a local server (recommended):

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. **Visit**: `http://localhost:8000`

---

## 🎨 Design Variants

This project includes multiple design style variants, each with unique visual characteristics:

### **Elegant Frame (Classic)** - `index.html` (Default)
- **Solid background colors** with clean, professional aesthetic
- **Traditional borders** with elegant 4px frame styling
- **Classic box shadows** for depth without blur effects
- **Corner decorations** with subtle accent lines
- **Clean, minimalist design** with refined typography
- **Subtle gradient overlays** for visual interest

### 1. **Liquid Glass (iPhone Style)** - `index-liquid-glass.html`
- **Vibrant animated gradient backgrounds** with flowing color transitions
- **Backdrop blur effects** creating frosted glass appearance
- **Smooth cubic-bezier animations** with scale and rotation effects
- **Shimmer effects** on interactive elements and background overlays
- **iPhone-inspired aesthetic** with translucent surfaces and vibrant colors
- **Dynamic, eye-catching** visual style with pronounced animations

### 2. **Material Design** - `index-material.html`
- **Material Design elevation** with layered shadows
- **Ripple effects** on cards and buttons for tactile feedback
- **Material color palette** (#1976d2 primary blue)
- **Roboto typography** following Material guidelines
- **Card-based layout** with proper depth hierarchy

All variants maintain the same HTML structure and functionality, differing only in CSS styling. Each supports dark mode and is fully responsive.

---

## 📁 Project Structure

```
myWeb/
├── index.html                              # Main HTML file (Elegant Frame - default)
├── index-liquid-glass.html                 # Liquid Glass design variant (iPhone-style)
├── index-material.html                     # Material Design variant
├── README.md                               # Project overview and setup guide
├── CHANGELOG.md                            # Complete version history and documentation
├── LICENSE.md                              # MIT License with content rights notice
├── manifest.json                           # PWA manifest
└── images/
    ├── me2024.jpg                              # Profile image
    ├── _light_mode.png                    #  logo (light)
    ├── _dark_mode.png                     #  logo (dark)
    ├── Livepeer-Logo-Symbol_light_mode.svg     # Livepeer logo (light)
    ├── Livepeer-Logo-Symbol_dark_mode.svg      # Livepeer logo (dark)
    ├── The_Graph_Logomark_light_mode.png       # The Graph logo mark (light)
    ├── The_Graph_Logomark_dark_mode.png        # The Graph logo mark (dark)
    ├── TheGraph_Extended_Logo_light_mode.svg   # The Graph extended logo (light)
    ├── TheGraph_Extended_Logo_dark_mode.svg    # The Graph extended logo (dark)
    ├── favicon.ico                             # Browser favicon
    ├── favicon-16x16.png                       # Favicon 16x16
    ├── favicon-32x32.png                       # Favicon 32x32
    ├── apple-touch-icon.png                    # Apple touch icon
    ├── android-chrome-192x192.png              # Android icon 192x192
    └── android-chrome-512x512.png              # Android icon 512x512
```

---

## 🔧 Configuration

### Updating Content

1. **Personal Information**: Edit meta tags and Schema.org data in `<head>`
2. **Profile Image**: Replace `./images/me2024.jpg`
3. **Brand Logos**: Update files in `./images/` directory
4. **Social Links**: Modify links in the header and footer sections

### Theme Customization

CSS custom properties are defined in `:root` and `[data-theme="dark"]`:

```css
:root {
  --bg-color: #fafafa;
  --text-color: #2c2c2c;
  --link-color: #2563eb;
  /* ... more variables ... */
}
```

---

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms

---

## 📝 Documentation

For detailed information about:
- Version history and updates
- Performance optimizations
- Technical architecture
- Future roadmap

**See**: [CHANGELOG.md](./CHANGELOG.md)

---

## 🛠️ Technologies

- **HTML5** - Semantic markup with ARIA support
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** - Minimal JS for theme toggle
- **Google Fonts** - Geist and Inter typefaces
- **Font Awesome** - Icon library
- **Plausible Analytics** - Privacy-friendly analytics

---

## 🌐 Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, Edge, and mobile browsers (iOS 12+, Android 5+).

---

## 📄 License

### Code
The source code of this website is licensed under the **MIT License**.  
See [LICENSE.md](./LICENSE.md) for details.

### Content
**All personal content is protected and reserved.**

This includes:
- Personal information, biography, and descriptions
- Profile photographs and images
- Personal branding and design elements
- Project descriptions and portfolio items

**You are welcome to:**
- Use the code structure as reference
- Learn from the implementation
- Fork and adapt the technical approach

**Please do not:**
- Copy personal content or images
- Present this work as your own
- Reuse branding without permission

© 2026 Paolo Diomede


---

## 📧 Contact

- **Email**: pdiomede@yahoo.com
- **LinkedIn**: [linkedin.com/in/pdiomede](https://linkedin.com/in/pdiomede/)
- **Twitter/X**: [@pdiomede](https://x.com/pdiomede)
- **Farcaster**: [warpcast.com/pdiomede](https://warpcast.com/pdiomede)
- **GitHub**: [github.com/pdiomede](https://github.com/pdiomede)

---

## 🙏 Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Analytics by [Plausible](https://plausible.io/)

---

**Built with ❤️ by Paolo Diomede**

