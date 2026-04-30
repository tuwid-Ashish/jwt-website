# Deployment Guide — Journalist Welfare Trust Website

## 🚀 Deployment Options

This website is **completely static** — no server-side code needed. Deploy it to any static hosting platform.

---

## 📋 Pre-Deployment Checklist

- [ ] All 8 HTML pages created and tested
- [ ] CSS and JavaScript files linked correctly
- [ ] All images/assets in place (if using custom images)
- [ ] Contact email verified (arshdeep.samar@gmail.com)
- [ ] All external links tested and working
- [ ] Tested on mobile, tablet, and desktop
- [ ] Dark mode toggle working
- [ ] Navigation links functional
- [ ] Form validation working

---

## 🌐 Deployment Options (Ranked by Ease)

### 1. **Netlify** ⭐ Recommended for Beginners

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free with GitHub or email)
3. Drag & drop your project folder
4. Website goes live instantly!
5. Get free custom domain option

**Advantages:**
- ✅ Free SSL/HTTPS
- ✅ Custom domain option
- ✅ Easy rollbacks
- ✅ Zero configuration
- ✅ Auto-deploys on file changes (if using GitHub)

---

### 2. **GitHub Pages** ⭐ Free & Permanent

**Steps:**
1. Create GitHub account (free)
2. Create new repository: `[username].github.io`
3. Clone locally: `git clone https://github.com/[username]/[username].github.io`
4. Copy all website files to folder
5. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add Journalist Welfare Trust website"
   git push origin main
   ```
6. Website live at: `https://[username].github.io`

**Advantages:**
- ✅ Completely free forever
- ✅ Professional GitHub URL
- ✅ Version control with Git
- ✅ HTTPS by default

---

### 3. **Vercel** ⭐ Modern & Fast

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up (free with GitHub)
3. Click "Import Project"
4. Select GitHub repository
5. Click Deploy
6. Live in seconds!

**Advantages:**
- ✅ Blazing fast CDN
- ✅ Free tier generous
- ✅ Preview deployments
- ✅ Automatic SSL

---

### 4. **Traditional Web Hosting** (GoDaddy, Bluehost, etc.)

**Steps:**
1. Purchase domain & hosting plan
2. Access File Manager (cPanel/Plesk)
3. Navigate to `public_html` folder
4. Upload all 8 HTML files + CSS + JS
5. Visit domain in browser

**Advantages:**
- ✅ Full control
- ✅ Custom email option
- ✅ Potential reseller options
- ✅ Established providers

---

### 5. **AWS S3 + CloudFront**

**Steps:**
1. Create S3 bucket with website name
2. Enable static website hosting
3. Upload all files to bucket
4. Create CloudFront distribution
5. Update DNS to CloudFront URL

**Advantages:**
- ✅ Global CDN
- ✅ Highly scalable
- ✅ Professional setup
- ⚠️ Requires AWS knowledge

---

## 💰 Cost Comparison

| Platform | Monthly Cost | Domain | SSL | CDN |
|----------|-------------|--------|-----|-----|
| Netlify | Free | Optional paid | ✅ | ✅ |
| GitHub Pages | Free | Free subdomain | ✅ | ✅ |
| Vercel | Free | Free subdomain | ✅ | ✅ |
| Traditional Host | $2-10 | $0.99-15 | ✅ | ✗ |
| AWS S3 | ~$1-3 | Separate | ✅ | ✅ |

---

## 🎯 Step-by-Step: Using Netlify (Recommended)

### Quickest Method (5 minutes)

1. **Prepare Files:**
   - Ensure all 8 HTML files are in one folder
   - CSS and JS are in the same folder
   - Folder structure:
     ```
     jwt-website/
     ├── index.html
     ├── about.html
     ├── contact.html
     ├── etc...
     ├── styles.css
     └── script.js
     ```

2. **Create Netlify Account:**
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign up"
   - Choose "Sign up with GitHub" (or email)
   - Authorize Netlify

3. **Deploy:**
   - Click "New site from Git" OR
   - Drag and drop folder into Netlify
   - Wait 5-10 seconds
   - Site is LIVE! 🎉

4. **Get Custom URL:**
   - Click "Site settings"
   - Change site name to "journalist-welfare-trust"
   - New URL: `journalist-welfare-trust.netlify.app`

5. **Optional: Connect Custom Domain**
   - Buy domain (GoDaddy, Namecheap, etc.)
   - In Netlify: "Domain settings" → "Add custom domain"
   - Follow DNS setup instructions
   - Website now at `yourdomain.com`

---

## 🔒 SSL/HTTPS (Always Enabled)

All recommended platforms include **free SSL certificates**:
- ✅ Netlify: Automatic
- ✅ GitHub Pages: Automatic
- ✅ Vercel: Automatic
- ✅ Traditional hosting: Usually included

**Result:** `https://journalistwelfaretrust.com` (secure! 🔒)

---

## 📊 Performance Tips

### Optimize Before Deploying

1. **Image Optimization** (if using custom images)
   - Use WebP format when possible
   - Compress JPG/PNG files
   - Use tool: TinyPNG.com

2. **CSS Minification** (optional)
   - Use: CSSNano.com
   - Reduces CSS file size by ~30%

3. **JavaScript Minification** (optional)
   - Use: terser.org
   - Reduces JS file size by ~40%

### Check Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://chromedevtools.io/lighthouse/)

---

## 🔧 Post-Deployment Configuration

### 1. Setup Email Forwarding
If deploying to custom domain:
- Emails to `info@yourdomain.com` → Forward to arshdeep.samar@gmail.com
- Many hosts include free email forwarding

### 2. Update Contact Form
Current form validates but doesn't submit. To make functional:

**Option A: Use Netlify Forms** (Free!)
```html
<!-- In contact.html form, add: -->
<form name="contact" method="POST" netlify>
  <!-- your fields -->
</form>
```

**Option B: Use Formspree** (Free!)
1. Go to [formspree.io](https://formspree.io)
2. Create account
3. Replace form `action` with Formspree URL
4. Form emails go to your inbox

**Option C: Your Own Backend**
- Use PHP, Node.js, Python, etc.
- Store in database or send via email service

### 3. Setup Analytics (Optional)
Add to `<head>` of index.html for tracking:

**Google Analytics 4:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🌍 Domain Registration

### Recommended Domain Registrars

1. **Namecheap** - Cheapest, reliable
   - .com: $8.88/year (first year)
   - Free WhoisGuard privacy

2. **GoDaddy** - Largest registrar
   - .com: $9.99/year
   - Good support

3. **Domains.com** - Simple, fast
   - .com: $9.99/year
   - Clean interface

**Typical Cost:**
- `.com` domain: $8-15/year
- `.in` domain: $5-10/year (India-specific)
- `.trust` domain: $20-40/year (premium)

---

## ✅ Verify Deployment Success

After deploying, verify:

1. **Homepage loads**
   ```
   ✓ Visit https://yourdomain.com
   ✓ Hero section appears
   ✓ Navigation visible
   ```

2. **All pages accessible**
   ```
   ✓ Click each nav link
   ✓ All 7 pages load
   ✓ No 404 errors
   ```

3. **Styling applied**
   ```
   ✓ Colors appear (Navy & Saffron)
   ✓ Fonts load (serif headings)
   ✓ Layout responsive
   ```

4. **Functionality works**
   ```
   ✓ Mobile hamburger menu
   ✓ Dark mode toggle
   ✓ News filtering
   ✓ Contact form validation
   ```

5. **External links work**
   ```
   ✓ Facebook links open
   ✓ JWS form link works
   ✓ All links open in new tab
   ```

6. **Mobile responsive**
   ```
   ✓ Test on phone (375px)
   ✓ Test on tablet (768px)
   ✓ Test on desktop (1920px)
   ```

---

## 🚨 Troubleshooting

### Pages Don't Load

**Problem:** 404 errors
**Solution:**
- Ensure all HTML files uploaded
- Check file names match exactly
- Verify index.html is in root folder

### Styles/JavaScript Not Loading

**Problem:** Website looks plain, no styling
**Solution:**
- Verify styles.css uploaded
- Verify script.js uploaded
- Check relative paths in HTML files
- Clear browser cache (Ctrl+Shift+Delete)

### Mobile Menu Not Working

**Problem:** Hamburger menu doesn't appear/work
**Solution:**
- Ensure script.js is loaded
- Check browser console for errors (F12)
- Verify viewport meta tag in HTML head

### Dark Mode Not Working

**Problem:** Theme toggle doesn't work
**Solution:**
- Check localStorage is enabled
- Verify script.js loaded
- Try different browser

---

## 📈 Post-Deployment Maintenance

### Regular Tasks

**Weekly:**
- Check website loads correctly
- Verify contact form working
- Monitor for errors (use browser console)

**Monthly:**
- Update news & events
- Check broken links
- Verify all contact info current

**Quarterly:**
- Review analytics
- Update content as needed
- Test all functionality

---

## 🔐 Security Best Practices

After deploying, verify:

✅ **HTTPS/SSL Active**
- URL shows 🔒 lock icon
- URL starts with `https://`

✅ **No Sensitive Data**
- No API keys in code
- No passwords in files
- No private information exposed

✅ **Contact Form Secure**
- Uses POST method (not GET)
- Validates input
- No client-side storage

✅ **External Links Safe**
- All use `target="_blank"`
- All use `rel="noopener noreferrer"`
- No malicious links

---

## 📞 Support

For deployment help:
- **Netlify Support:** help.netlify.com
- **GitHub Help:** docs.github.com
- **Vercel Docs:** vercel.com/docs
- **Hosting Provider Support:** Their support portal

---

## 🎉 You're Live!

Congratulations on deploying your website! The Journalist Welfare Trust is now online and accessible to journalists across India.

**Next Steps:**
1. Share with journalists
2. Promote on social media
3. Update content regularly
4. Monitor performance

---

**Questions?** Contact: arshdeep.samar@gmail.com

*Last Updated: April 30, 2026*
