# Journalist Welfare Trust — Complete Website Redesign

## 📋 Project Overview

This is a complete, modern redesign of the **Journalist Welfare Trust** website (`journalistwelfaretrust.com`). Built with clean HTML, CSS, and vanilla JavaScript, this website represents the trust's mission to support journalists across India.

**Key Features:**
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Accessible navigation with mobile hamburger menu
- ✅ Modern, institutional design reflecting government accreditation
- ✅ Rich content with welfare program details
- ✅ News filtering functionality
- ✅ Event management system
- ✅ Secure contact form
- ✅ Google Fonts integration (Instrument Serif & Work Sans)
- ✅ Professional color palette (Navy & Saffron)

---

## 📁 Project Structure

```
jwt website/
├── index.html              # Homepage
├── about.html              # About Us page
├── programs.html           # Welfare Programs & Services
├── jpl.html                # Journalist Premier League 2026
├── news.html               # News & Announcements
├── events.html             # Upcoming Events
├── contact.html            # Contact & Support
├── styles.css              # Main stylesheet (design system)
├── script.js               # JavaScript interactivity
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette

| Color | Value | Purpose |
|-------|-------|---------|
| Primary Navy | `#0d3d5c` | Main brand color, headers, buttons |
| Accent Saffron | `#d4860e` | Highlights, CTA buttons |
| Background | `#f7f6f2` | Page background (warm off-white) |
| Text | `#1e1c17` | Body text |
| Text Muted | `#6a665e` | Secondary text |

### Typography

- **Display/Headings:** Instrument Serif (Google Fonts)
- **Body/UI:** Work Sans (Google Fonts)
- **Responsive type scale:** Using CSS clamp() for fluid sizing

### Spacing

- Base unit: 4px
- Scale: --space-1 through --space-24
- Example: `--space-4: 1rem`, `--space-8: 2rem`

### Shadows & Borders

- **Shadows:** sm, md, lg with warm-tinted drops
- **Border Radius:** sm (0.375rem), md (0.5rem), lg (0.875rem), full (9999px)

---

## 📄 Page Descriptions

### 1. **Home (index.html)**
- Hero section with government accreditation badge
- Mission pillar cards (Integrity, Press Freedom, Empowerment, Solidarity)
- Service cards (Financial Aid, Welfare Guidance, Health, Training, Events)
- JPL 2026 feature banner
- Latest news grid (3 articles)
- Footer with contact info

### 2. **About (about.html)**
- Who we are narrative
- Mission & Vision statements
- Leadership cards (President, Trustee Chair, Chairman)
- Core values (Truth, Community, Dignity, Transparency, Inclusion)
- Call-to-action for joining community

### 3. **Programs (programs.html)**
- Financial Assistance section with JWS benefits table
- Health Support programs overview
- Training & Professional Development (6 program types)
- Community & Tribute Events
- "Need Support?" CTA section

### 4. **JPL 2026 (jpl.html)**
- Full tournament details
- Match results (Pakistan vs J&K)
- Tournament mission statement
- Participating states & teams
- Live update CTA with Facebook link

### 5. **News (news.html)**
- Filter tabs (All, JPL 2026, Events, Welfare, Press Freedom)
- 9 news articles with filtering functionality
- Newsletter subscription form
- Responsive news grid

### 6. **Events (events.html)**
- 6 upcoming events (JPL, Training, Community events)
- Event type categories
- Event registration CTAs
- Newsletter subscription

### 7. **Contact (contact.html)**
- Contact information cards (Address, Email, Connected Organizations)
- Secure contact form with subject selection
- Social media links with verified URLs
- FAQ section (5 questions)
- Response time guarantee

---

## 🚀 Features & Functionality

### Mobile Navigation
- Hamburger menu on devices ≤768px
- Smooth slide-down animation
- Auto-closes when links are clicked

### Dark Mode Toggle
- Persistent theme selection (localStorage)
- Smooth transitions
- Respects system preferences

### Interactive Elements
- Hover effects on buttons and cards
- Form validation (name, email, message)
- Contact form submission handling
- News filtering with smooth transitions

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy

---

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript (Vanilla)** - No frameworks, pure ES6+
- **Google Fonts** - Instrument Serif & Work Sans
- **No Build Tools** - Works directly in browser

---

## 📱 Responsive Design

**Breakpoints:**
- **Desktop:** 1200px+ (full grid layouts)
- **Tablet:** 769px-1199px (2-column grids)
- **Mobile:** ≤768px (1-column layouts, hamburger menu)

**Responsive Features:**
- Fluid typography using `clamp()`
- CSS Grid with `auto-fit` and `minmax()`
- Mobile-first approach
- Touch-friendly buttons (44px minimum height)

---

## 🎯 Key Pages Content

### Welfare Information
All welfare-related details are on `/programs.html`:
- Government JWS scheme benefits table
- Eligibility criteria
- Application form link
- Health support details
- Training program information

### News & Updates
- Latest news on `/news.html` with filtering
- Events on `/events.html`
- JPL 2026 updates on `/jpl.html`

### Contact & Support
All verified contact details are on `/contact.html`:
- Email: arshdeep.samar@gmail.com
- Address: Sector 82, JLPL, Mohali, Punjab
- Social media links (all target="_blank" with rel="noopener noreferrer")
- Secure contact form

---

## 🔧 How to Use

### Opening the Website
1. Open `index.html` in any modern web browser
2. Navigate between pages using the header navigation
3. All links are relative paths (no absolute URLs needed)

### Customizing Content
Edit the relevant `.html` file:
- **Home content:** index.html
- **About section:** about.html
- **Programs details:** programs.html
- **News articles:** news.html
- **Events:** events.html

### Modifying Styles
Edit `styles.css`:
- CSS Custom Properties (--color-*, --space-*, --font-*)
- Component styles (.card, .btn, .hero, etc.)
- Media queries for responsive design

### Adding Functionality
Extend `script.js`:
- Mobile menu toggle (already implemented)
- Dark mode toggle (already implemented)
- News filtering (already implemented)
- Form validation (already implemented)

---

## 🌐 Deployment

### For Online Hosting
1. Upload all files to web server (maintain folder structure)
2. Ensure `.html` files are served correctly
3. CSS and JS will load automatically via relative paths
4. Fonts load from Google Fonts CDN

### For Local Testing
- Open any `.html` file directly in browser
- All local resources (CSS, JS) will load correctly
- Browser's local storage will handle dark mode persistence

---

## ✨ Special Features

### Design Elements
- Sticky header with backdrop blur
- Hero sections with gradient backgrounds
- Card-based layouts with hover animations
- Color-coded badges and tags
- Smooth scrolling for anchor links

### Brand Integration
- Consistent government accreditation branding
- Saffron accent color (India flag reference)
- Press/journalism theme throughout
- Institutional, trustworthy aesthetic

### Content Enrichment
- Detailed welfare program descriptions
- Government JWS scheme integration
- Leadership information
- Mission/Vision alignment
- Event details and registration paths

---

## 📞 Contact Information

**Journalist Welfare Trust**
- 📧 Email: arshdeep.samar@gmail.com
- 📍 Address: Sector 82, JLPL, Mohali, Punjab 160019, India
- 🤝 Connected: United Press Club (Regd.), The Summer News, JPL

**Social Media:**
- Facebook: Arshdeep Singh Samar
- Facebook: Arshdeep Samar News
- Facebook: The Journalist Premier League

---

## 📝 Notes

- All external links open in new tabs (`target="_blank" rel="noopener noreferrer"`)
- No sensitive data is stored; form submissions are front-end validated
- Website is fully self-contained (no external dependencies except Google Fonts)
- SEO-friendly with proper meta tags and semantic HTML
- Performance optimized with minimal JavaScript

---

## 📄 License

Built for **Journalist Welfare Trust** | Government of India Accredited Trust

---

**Last Updated:** April 30, 2026
**Version:** 1.0
**Status:** Production Ready ✅
