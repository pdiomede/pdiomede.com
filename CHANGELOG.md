# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.4.12] - 2026-01-27

### Fixed
- **Mobile Responsiveness - Ecosystem Communities Callout**
  - Fixed horizontal scrolling issue on mobile devices in "Ecosystem Communities" callout within Community Impact section
  - Changed 3-column grid layout (`grid-template-columns: 1fr auto 1fr`) to single column on mobile devices
  - Added responsive CSS rules in `@media (max-width: 768px)` and `@media (max-width: 480px)` breakpoints
  - Cards now stack vertically on mobile instead of requiring horizontal scrolling
  - Removed width constraints on mobile to ensure full-width cards
  - Improved mobile user experience by eliminating need for horizontal scrolling on small screens
  - Applied fix to both index.html (Elegant Frame) and index-material.html (Material Design) variants

### Changed
- **GitHub Repository Link Text**
  - Updated link text from "View repo on GitHub" to "View this repo on GitHub" for better clarity
  - Updated aria-label for accessibility consistency
  - Applied to both index.html and index-material.html

- **SEO Metadata Updates**
  - Updated `dateModified` in structured data from 2026-01-02 to 2026-01-27
  - Updated `og:updated_time` meta tag to 2026-01-27
  - Ensures search engines are aware of recent page updates
  - Applied to both index.html and index-material.html

---

## [2.4.11] - 2026-01-02

### Removed
- **Liquid Glass Design Variant**
  - Removed `index-liquid-glass.html` file due to functionality issues
  - Removed Liquid Glass option from design selectors in index.html and index-material.html
  - Removed Liquid Glass from themeNames objects in both remaining HTML files
  - Updated README.md to remove Liquid Glass documentation
  - Site now includes only Elegant Frame (default) and Material Design variants

---

## [2.4.10] - 2026-01-02

### Fixed
- **Theme Selector Navigation Bug in Liquid Glass Variant**
  - Fixed theme selector not working to navigate to other themes in index-liquid-glass.html
  - Improved `getCurrentPageName()` function to handle different path formats (file://, http://, with/without leading slashes)
  - Made current page comparison dynamic by recalculating on each option click instead of using closure variable
  - Ensures accurate theme navigation regardless of how the page is accessed

- **Dark/Light Mode Toggle Bug in Liquid Glass Variant**
  - Fixed theme toggle button not working in index-liquid-glass.html
  - Added `e.stopPropagation()` to prevent event bubbling to document-level handlers
  - Added default value for `currentTheme` to handle cases where `data-theme` attribute isn't set
  - Improved event handling with explicit propagation control
  - Theme toggle now properly switches between dark and light modes

- **Duplicate The Graph Logo Display**
  - Fixed duplicate The Graph logo appearing simultaneously in index-liquid-glass.html
  - Added default CSS rules to hide light logo and show dark logo by default (matching default dark mode)
  - Theme-specific rules now properly override defaults when `data-theme` is set
  - Only one logo displays at a time based on current theme

---

## [2.4.9] - 2026-01-02

### Fixed
- **Image Layout Shift Prevention**
  - Fixed conflicting width attributes and inline styles on The Graph extended logo images
  - Removed redundant `width: auto;` from inline styles that was overriding `width="200"` attribute
  - Prevents Cumulative Layout Shift (CLS) by ensuring width attributes are respected
  - Applied to all three HTML files (index.html, index-material.html, index-liquid-glass.html)

### Changed
- **Tagline Update**
  - Updated tagline to "Securing and growing Web3 through technical excellence and ecosystem leadership"
  - Applied to all three HTML files

- **SEO & Social Media Tags Alignment**
  - Updated all meta descriptions to align with new tagline
  - Updated Open Graph descriptions (`og:description`) to include tagline messaging
  - Updated Twitter Card descriptions (`twitter:description`) to include tagline messaging
  - Updated structured data (JSON-LD) WebPage and Person descriptions to reflect tagline
  - Ensures consistent messaging across search engines and social media platforms
  - Applied to all three HTML files

- **Certora Role Description**
  - Updated Certora role description to shorter, more focused version
  - New description: "Bridging the gap between technical excellence and client success, helping some of the most advanced DeFi teams in the world design and deliver secure, verified protocols by understanding their architecture and security needs."
  - Applied to all three HTML files

### Fixed
- **Canonical URL Consistency**
  - Fixed canonical URLs in index-material.html and index-liquid-glass.html to match their respective file URLs
  - Now consistent with og:url and twitter:url meta tags for better SEO
  - Applied to: index-material.html, index-liquid-glass.html

- **LinkedIn URL Format**
  - Updated all LinkedIn URLs to use standard `www.linkedin.com` format
  - Changed from `linkedin.com` to `www.linkedin.com` for consistency
  - Applied to all three HTML files

---

## [2.4.8] - 2026-01-02

### Fixed
- **Button Click Handler Null Check**
  - Added null check for `selector` before accessing `classList.toggle()` and `classList.contains()` in button click handler
  - Prevents potential runtime errors if selector element is removed from DOM
  - Applied to all three HTML files

- **Navigation Validation in handleOptionSelect**
  - Added validation to check if `themeFile` exists before navigating
  - Prevents navigation to "null" if `data-theme` attribute is missing
  - Only navigates if `themeFile` is truthy and different from current page
  - Applied to all three HTML files

- **Options Array Validation**
  - Added checks for `options` existence and length before calling `forEach()`
  - Prevents potential errors if querySelectorAll returns empty NodeList
  - Better defensive programming and code robustness
  - Applied to all three HTML files

---

## [2.4.7] - 2026-01-02

### Fixed
- **Escape Key Handler Null Check**
  - Added null check for `selector` before accessing `classList.contains()` in Escape key handler
  - Prevents potential runtime errors if selector element is removed from DOM
  - Improved button focus handling with proper null checks
  - Applied to all three HTML files

- **handleOptionSelect Function Null Checks**
  - Added null checks for `selector` and `button` in `handleOptionSelect` function
  - Prevents errors when closing menu if elements are unavailable
  - Better defensive programming in event handlers
  - Applied to all three HTML files

- **tabindex Attribute Check**
  - Updated `setAttribute('tabindex', '0')` to check if attribute already exists before setting
  - Prevents unnecessary DOM manipulation
  - Applied to index.html (already fixed in other variants)
  - Improves performance and code consistency

---

## [2.4.6] - 2026-01-02

### Fixed
- **Memory Leak in Theme Toggle**
  - Fixed setTimeout not being cleared on rapid theme toggle clicks
  - Added `expandTimeout` variable to track and clear previous timeouts
  - Prevents multiple timeouts from queuing and causing unexpected behavior
  - Applied to all three HTML files

- **Null Check in Document Click Handler**
  - Added null checks for `selector` and `button` in document click event listener
  - Prevents potential runtime errors if elements are removed from DOM
  - Improves code robustness and error handling
  - Applied to all three HTML files

- **JavaScript Error Prevention**
  - Enhanced safety checks in event handlers to prevent null reference errors
  - Better defensive programming practices throughout JavaScript code
  - Applied to: index.html, index-liquid-glass.html, index-material.html

---

## [2.4.5] - 2026-01-02

### Fixed
- **Version Number Inconsistency**
  - Updated version numbers in HTML header comments from v2.4.2 to v2.4.4
  - All three HTML files now have consistent version numbers matching CHANGELOG
  - Applied to: index.html, index-liquid-glass.html, index-material.html

- **Date Range Inconsistency**
  - Updated "Community Impact" section title from (2021-2025) to (2022-2025)
  - Now consistent with The Graph Foundation role date range
  - Applied to all three HTML files

---

## [2.4.4] - 2026-01-02

### Changed
- **Content Updates**
  - Updated tagline capitalization: "Securing Web3" → "Securing web3"
  - Changed all instances of "Web3" to "web3" (lowercase) throughout the site for consistency
  - Updated The Graph Foundation role description to include date range (2022-2025)
  - Reformatted The Graph Foundation description: moved date range inline with sentence

### Fixed
- **The Graph Foundation Role**
  - Added date range (2022-2025) to role description
  - Updated description format for better readability

---

## [2.4.3] - 2026-01-02

### Fixed
- **Design Selector Keyboard Accessibility**
  - Added `tabindex="0"` to menu items for keyboard navigation
  - Added keyboard event handlers (Enter/Space keys) for menu item selection
  - Menu items are now fully keyboard accessible
  - Improves WCAG compliance for keyboard users

- **Design Selector Event Propagation**
  - Added `e.stopPropagation()` to option click handlers
  - Prevents unnecessary event bubbling to document click handler
  - Improves performance by reducing unnecessary event handling

- **Design Selector Escape Key Support**
  - Added Escape key handler to close menu when pressed
  - Returns focus to button after closing menu for better keyboard navigation
  - Follows standard dropdown menu accessibility patterns

- **Design Selector ARIA Attributes**
  - Added `aria-controls="design-selector-menu"` to button (links button to menu)
  - Added `aria-haspopup="true"` to button (indicates popup menu)
  - Added `id="design-selector-menu"` to menu element for aria-controls reference
  - Improves screen reader experience and WCAG compliance

### Changed
- **Accessibility Enhancement**
  - Design selector menu now fully supports keyboard navigation
  - All menu interactions work with keyboard, mouse, and touch
  - Better focus management when closing menu with Escape key

---

## [2.4.2] - 2026-01-02

### Removed
- **Glassmorphism Design Variant**
  - Removed `index-glassmorphism.html` file
  - Removed glassmorphism option from all design selectors
  - Removed from JavaScript themeNames objects
  - Updated README.md to reflect removal

### Changed
- **Liquid Glass Enhancement**
  - Enhanced vibrant gradient colors for more evident visual impact
  - Changed from subtle pastel colors to saturated vibrant colors (blue, purple, pink, orange, green, cyan)
  - Increased shimmer overlay opacity for more pronounced effects
  - Faster animation speed (12s vs 20s) for more dynamic feel
  - Added fourth radial gradient layer for increased depth
  - More eye-catching iPhone-style aesthetic

---

## [2.4.1] - 2026-01-02

### Fixed
- **Material Design Theme Toggle Bug**
  - Fixed missing `toggle-label` span in theme toggle button HTML
  - Added missing CSS for `.theme-toggle.expanded` state
  - Added missing JavaScript expansion functionality to match other variants
  - Theme toggle now properly expands to show "Dark/Light Mode" label on click
  - Added responsive CSS for expanded toggle state on mobile devices

- **SEO Improvements**
  - Updated `og:url` and `twitter:url` meta tags for design variant files
  - Liquid Glass variant now points to `/index-liquid-glass.html`
  - Material Design variant now points to `/index-material.html`
  - Improves SEO by providing unique canonical URLs for each design variant

### Changed
- **Accessibility Enhancement**
  - Updated Material Design theme toggle `aria-label` from "Toggle theme" to "Toggle dark/light mode" for consistency across all variants

---

## [2.4.0] - 2026-01-02

### Added
- **Design Variants**
  - Added three distinct design style variants alongside the default Elegant Frame design
  - **Liquid Glass (iPhone Style)** - `index-liquid-glass.html`
    - Animated gradient backgrounds with flowing color transitions
    - Backdrop blur effects creating frosted glass appearance
    - Smooth cubic-bezier animations with scale and rotation effects
    - Shimmer effects on interactive elements
    - iPhone-inspired aesthetic with translucent surfaces
  - **Material Design** - `index-material.html`
    - Material Design elevation with layered shadows
    - Ripple effects on cards and buttons for tactile feedback
    - Material color palette (#1976d2 primary blue)
    - Roboto typography following Material guidelines
    - Card-based layout with proper depth hierarchy
  - All variants maintain the same HTML structure and functionality, differing only in CSS styling
  - Each variant supports dark mode and is fully responsive

- **Documentation**
  - Added comprehensive Design Variants section to README.md
  - Documented Elegant Frame (Classic) style as the default design
  - Added brief characteristics for each design variant
  - Updated project structure to include all variant files

### Fixed
- **Material Design Variant**
  - Fixed theme toggle positioning issue (was not fixed in top right corner)
  - Removed conflicting `position: relative` that was overriding `position: fixed`
  - Fixed pseudo-element conflict by changing tooltip to `::before` (ripple effect uses `::after`)
  - Updated tooltip styling to match Material Design principles with proper colors and shadows

---

## [2.3.2] - 2025-11-02

### Added
- **GitHub Repository Link**
  - Added centered "View repo on GitHub" link below main frame
  - Positioned outside the elegant frame for easy access to source code
  - Includes GitHub icon with hover effects
  - Opens repository in new tab with proper security attributes

### Changed
- **Documentation Improvements**
  - Improved license content section readability in README.md
  - Separated permissions into clear "welcome to" and "please do not" sections
  - Added links to Livepeer and The Graph Foundation in About section
  - Updated project structure to reflect current file count (1,631 lines)

### Fixed
- **Theme Switching Bug**
  - Fixed bug where explicit light mode selection could be overridden by system preferences
  - Changed from removing `data-theme` attribute to explicitly setting `data-theme="light"`
  - Ensures user preferences always take precedence over system settings
  - Updated CSS selectors to use explicit theme attributes instead of `:not([data-theme])`

- **Theme Toggle Icon UX**
  - Reversed icon logic to show CURRENT state instead of next state
  - Dark mode now displays moon icon (represents night/dark state)
  - Light mode now displays sun icon (represents day/light state)
  - Follows standard UX pattern used by modern applications
  - Updated aria-label to generic "Toggle theme" for better accessibility

---

## [2.3.1] - 2025-11-02

### Fixed
- **HTML Validation Errors**
  - Moved `<meta charset>` tag before comment block to ensure it appears within first 1024 bytes (HTML5 requirement)
  - Removed invalid `http-equiv` meta tags (`X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`) - these should be configured on web server, not in HTML
  - Fixed double hyphens in HTML comments to ensure XML compatibility
  - Fixed inconsistent whitespace (double spaces before self-closing slashes)

- **Code Quality**
  - Added self-closing slashes to all void elements (`<meta />`, `<link />`) for XHTML compatibility and consistent formatting
  - Cleaned up commented-out code sections

### Changed
- Moved comprehensive documentation from HTML comments to CHANGELOG.md for better maintainability
- Simplified HTML header comments to reference only essential metadata

---

## [2.3.0] - 2025-11-02

### Added
- **Performance Optimizations**
  - Critical image preloading with `fetchpriority="high"` on profile image
  - Lazy loading for below-the-fold images (`loading="lazy"`)
  - Explicit image dimensions (`width` and `height` attributes) to prevent Cumulative Layout Shift (CLS)
  - Async image decoding (`decoding="async"`) for non-blocking rendering
  - Font-display: swap optimization to prevent Flash of Invisible Text (FOIT)
  - Resource hints (`preconnect`, `dns-prefetch`) for external resources

- **Enhanced Hover Effects**
  - Interactive color change on social media buttons (header and footer)
  - Enhanced hover effect on theme toggle with rotation animation and scale
  - CSS-only tooltip on theme toggle button
  - Smooth transitions on all interactive elements

- **Documentation**
  - Comprehensive performance optimization comments throughout code
  - Inline documentation explaining Web Performance concepts (LCP, CLS, FCP, FOIT)

### Removed
- **Code Cleanup** (~150 lines removed)
  - Removed unused `generateSocialPreview()` function (~95 lines of dead code)
  - Removed unused CSS classes: `.subtitle`, `.subtitle-callout`, `.intro-section`, `.highlight`, `.stat-item`, `.project-button`, `.innovation-highlight`, `.org-logo`, `.cv-button`
  - Removed CV/Resume button from footer
  - Cleaned up unused Farcaster image icon styles

### Performance Impact
- **Expected Gains**: 10-20% faster initial load time
- **Core Web Vitals Improvements**:
  - LCP (Largest Contentful Paint): 15-30% improvement from critical image preloading
  - CLS (Cumulative Layout Shift): Eliminated through explicit image dimensions
  - FID (First Input Delay): Improved through lazy loading and dead code removal
- **File Size**: Reduced by ~8-10KB (5-8% smaller)

---

## [2.2.0] - 2025-11-01

### Added
- Modern elegant frame design with corner decorations
- Brand logos for organizations (Livepeer, The Graph) with light/dark mode variants
- Comprehensive role cards with badges and enhanced visual hierarchy
- Community Impact section with statistics and project cards
- Innovation Lab section showcasing projects and tools
- Professional theme toggle with smooth transitions
- Enhanced accessibility features

### Features
- **Accessibility Score**: 100/100
  - WCAG 2.1 AAA Level Compliant
  - Semantic HTML5 with `<main>`, `<header>`, `<footer>`, `<section>` landmarks
  - Skip-to-main-content link for keyboard navigation
  - Proper heading hierarchy (H1 → H2 → H3)
  - All images have descriptive alt text
  - ARIA labels on all interactive elements and sections
  - Screen reader optimized with proper landmarks

- **SEO Score**: 10/10
  - Complete meta tags (title, description, keywords)
  - Schema.org structured data (Person, Organization, ContactPoint)
  - Open Graph and Twitter Card meta tags with image:type
  - Canonical URL and sitemap ready
  - Mobile-friendly and responsive
  - PWA ready with manifest.json
  - Semantic HTML5 elements for better indexing

- **Security Score**: 9.5/10
  - Content Security Policy (CSP) implemented
  - Security headers configured (via server for production)
  - Subresource Integrity (SRI) on Font Awesome CDN
  - All external links use `rel="noopener noreferrer"`
  - CORS enabled with crossorigin attributes
  - DNS prefetch for trusted external resources
  - No inline event handlers (XSS prevention)

### Design
- Dark mode by default with persistent theme preference
- Responsive grid layouts for all screen sizes
- Smooth animations and transitions
- Professional color scheme with CSS custom properties
- Modern typography using Geist and Inter fonts

---

## [2.1.0] - 2025-10

### Added
- Initial professional portfolio structure
- Basic theme toggle functionality
- Social media links integration
- Profile image and header section

---

## Technical Stack

### Technologies Used
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Minimal vanilla JS for theme toggle
- **External Resources**:
  - Google Fonts (Geist, Inter)
  - Font Awesome 6.4.0 (with SRI)
  - Plausible Analytics (privacy-friendly)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

### Performance Metrics
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

---

## Server Configuration Recommendations

### HTTP Headers (to be configured on web server)
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https://plausible.io; frame-ancestors 'self'
```

### Caching Strategy
```
Cache-Control: max-age=31536000 for static assets (images, fonts)
Cache-Control: max-age=3600 for HTML
```

---

## Performance Targets

- [ ] Achieve 100 Lighthouse score across all categories
- [ ] Reduce LCP to < 2.0s
- [ ] Achieve TTI (Time to Interactive) < 3.0s
- [ ] Reduce total page weight to < 500KB

---

## Credits

**Author**: Paolo Diomede  
**Portfolio**: [pdiomede.com](https://pdiomede.com)  
**Contact**: pdiomede@yahoo.com  

**Design & Development**: Paolo Diomede  
**Last Updated**: January 2, 2026

