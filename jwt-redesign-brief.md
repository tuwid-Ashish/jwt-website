# Journalist Welfare Trust — Website Redesign Brief for Copilot

> **Purpose of this document:** Complete design + content specification for rebuilding `journalistwelfaretrust.com`. Give this file to Copilot (or any developer) and they can build the full website from it without needing any extra context.

---

## 1. Project Overview

| Field | Detail |
|---|---|
| **Client** | Journalist Welfare Trust |
| **Owner / Key Person** | Arshdeep Singh Samar |
| **Founded** | 2021 |
| **Location** | Sector 82, JLPL, Mohali, Punjab, India |
| **Current Website** | journalistwelfaretrust.com (very minimal, needs full rebuild) |
| **Contact Email** | arshdeep.samar@gmail.com |
| **Social Presence** | Facebook (~75K likes), Instagram |
| **Government Link** | Accredited under Government of India; Ministry of Information trustee chair |
| **Associated Org** | United Press Club Regd., Ludhiana (same leadership) |
| **Active Event** | Journalist Premier League (JPL) 2026 — ongoing cricket tournament |

**Goal of the redesign:** Build a clean, modern, institutionally trustworthy website that properly represents the trust's mission, makes the contact path safe and clear, communicates programs and governance to the public, and serves as a hub for news, events, and welfare information.

---

## 2. Brand Identity

### 2.1 Tone of Voice

- **Authoritative** — backed by government accreditation and minister-level governance
- **Empathetic** — exists to serve journalists in hardship, families of martyred journalists
- **Accessible** — must be readable by journalists, their families, officials, and the general public
- **Trustworthy** — every page must feel institutional, safe, and verifiable
- **Proud** — celebrating the journalism community, not just helping in crisis

### 2.2 Tagline (from existing site)

> **"Where Journalists Connect, Grow, and Thrive"**

Use this across hero, meta tags, and Open Graph tags.

### 2.3 Color Palette

```css
:root {
  /* Primary — Deep Press Navy */
  --color-primary:           #0d3d5c;
  --color-primary-hover:     #092e47;
  --color-primary-active:    #061e2e;
  --color-primary-highlight: #dce9f0;

  /* Accent — Saffron Gold (press, India, warmth) */
  --color-accent:            #d4860e;
  --color-accent-hover:      #b8720b;
  --color-accent-highlight:  #f5e6cc;

  /* Surfaces — warm off-white */
  --color-bg:                #f7f6f2;
  --color-surface:           #fcfbf8;
  --color-surface-2:         #f1eee8;
  --color-surface-offset:    #ebe7e0;
  --color-divider:           #ddd9d0;
  --color-border:            #d3cfc6;

  /* Text */
  --color-text:              #1e1c17;
  --color-text-muted:        #6a665e;
  --color-text-faint:        #a09b92;
  --color-text-inverse:      #f7f6f2;

  /* Status */
  --color-success:           #3b6b28;
  --color-warning:           #8c4c1a;
  --color-error:             #9e2a5a;

  /* Shadows (warm-tinted) */
  --shadow-sm:  0 2px 8px rgba(15, 22, 30, 0.05);
  --shadow-md:  0 8px 28px rgba(15, 22, 30, 0.09);
  --shadow-lg:  0 20px 56px rgba(15, 22, 30, 0.14);

  /* Radius */
  --radius-sm:   0.375rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.875rem;
  --radius-xl:   1.25rem;
  --radius-full: 9999px;
}
```

### 2.4 Typography

| Role | Font | Weight | CDN |
|---|---|---|---|
| **Display / Headings** | Instrument Serif | 400, italic | Google Fonts |
| **Body / UI** | Work Sans | 300, 400, 500, 600, 700 | Google Fonts |

```html
<!-- Load in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-body:    'Work Sans', system-ui, sans-serif;
```

**Type scale (fluid, using clamp):**
```css
--text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem); /* 12–14px */
--text-sm:   clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);     /* 14–16px */
--text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem); /* 16–18px */
--text-lg:   clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);   /* 18–24px */
--text-xl:   clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);  /* 24–36px */
--text-2xl:  clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);   /* 32–56px */
--text-3xl:  clamp(2.5rem,   1rem    + 4vw,    5rem);      /* 40–80px */
```

### 2.5 Spacing System (4px base)

```css
--space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
--space-5: 1.25rem; --space-6: 1.5rem; --space-8: 2rem;    --space-10: 2.5rem;
--space-12: 3rem;   --space-16: 4rem;  --space-20: 5rem;   --space-24: 6rem;
```

---

## 3. Site Architecture

```
journalistwelfaretrust.com/
├── /                    → Home
├── /about               → About the Trust
├── /programs            → Welfare Programs & Services
├── /jpl                 → Journalist Premier League 2026
├── /news                → News & Announcements
├── /events              → Upcoming Events
├── /gallery             → Photo Gallery
└── /contact             → Contact Us (SAFE — no external link issues)
```

**Navigation order:** Home · About · Programs · JPL 2026 · News · Events · Contact

---

## 4. Page-by-Page Content Specification

---

### Page 1: Home (`/`)

#### 4.1.1 Site Header (Sticky)

- **Logo:** SVG inline logo — a stylized open book / quill-pen mark inside a navy rounded square, with text "Journalist Welfare Trust" beside it
- **Nav links:** About · Programs · JPL 2026 · News · Events · Contact
- **CTA button:** "Apply for Support" → `/programs#apply` (navy bg, white text)
- **Light/Dark mode toggle** (sun/moon icon)
- Mobile: hamburger drawer with all nav links

#### 4.1.2 Hero Section

```
Layout: Two-column grid (1.4fr text | 1fr card), 80vh min-height
Background: --color-bg, subtle noise texture overlay at 3% opacity
```

**Eyebrow pill:**
> 🇮🇳 Government Accredited · Ministry of Information

**Heading (--font-display, --text-3xl):**
> "Where Journalists Connect, Grow, and Thrive"

**Subtext (--text-lg, muted):**
> Founded in 2021, Journalist Welfare Trust is a registered trust accredited under the Government of India, dedicated to the welfare, protection, and empowerment of journalists across India. We stand for press freedom, financial aid in hardship, and a strong professional community.

**CTA Row:**
- Primary button: "Apply for Welfare Support" → `/programs`
- Secondary button: "Learn About Us" → `/about`

**Hero info card (right side — navy bg, white text):**
```
┌────────────────────────────────┐
│  ✦  Journalist Premier League  │
│     2026 is LIVE               │
│  Apr 10 – May 3 · Punjab       │
│  [Watch Fixtures →]            │
├────────────────────────────────┤
│  402  Journalists aided by     │
│       Govt JWS scheme (2014–25)│
├────────────────────────────────┤
│  38K+ Community members        │
│       United Press Club Regd.  │
└────────────────────────────────┘
```

#### 4.1.3 Mission Pillars (3-column)

Heading: **"Our Four Commitments"**

| Pillar | Icon | Description |
|---|---|---|
| Journalistic Integrity | 📰 (Lucide: `newspaper`) | Advocating for fairness, accuracy, and transparency in media reporting across India |
| Press Freedom | ✊ (Lucide: `shield`) | Protecting the rights of journalists and ensuring access to information is never compromised |
| Empowering the Profession | 📈 (Lucide: `trending-up`) | Skills training, mentorship, career development resources, and community guidance |
| Fostering Solidarity | 🤝 (Lucide: `users`) | Building a strong, supportive community for journalists at every stage of their career |

*Note: Use Lucide icons via CDN — no colored icon circles. Just the icon at 24px with --color-primary color, above a bold heading and short description text.*

#### 4.1.4 What We Do — Services Strip

Heading: **"Supporting Journalists in Every Way We Can"**
Layout: Horizontal card strip, scrollable on mobile

Cards (5 total):
1. **Financial Aid** — One-time ex-gratia relief for families facing extreme hardship due to death, disability, or serious illness of a journalist
2. **Welfare Scheme Guidance** — Helping journalists navigate the Government of India's Journalist Welfare Scheme (JWS), including accredited and non-accredited journalists
3. **Health Support** — Information and assistance for medical welfare linked to government hospital empanelment schemes
4. **Training & Mentorship** — Professional development programs for journalists including digital skills, ethics, and career advancement
5. **Community Events** — From tribute functions to the Journalist Premier League — building bonds across the journalism fraternity

#### 4.1.5 JPL 2026 Feature Banner

Full-width section, dark navy background, saffron accents.

```
Journalist Premier League 2026
"More than a game — a tribute to courage"
April 10 – May 3, 2026 · Tau Devi Lal Stadium, Panchkula

[ View Schedule & Fixtures → ]
```

Sub-line: *"A salute to martyred journalists — the real heroes behind the headlines."*

#### 4.1.6 Latest News (3-card grid)

Heading: **"News & Updates"**
Show 3 news cards. For placeholder/demo content use:

1. **JPL 2026 Schedule Announced** — Match fixtures for the Journalist Premier League 2026 are now live. Punjab vs J&K Match 1 result: Punjab wins by 7 runs. *(April 7, 2026)*
2. **United Press Club Distributes Financial Assistance** — The United Press Club (Regd.) organised a function at Guru Nanak Dev Bhawan, Ludhiana to distribute Rs.51,000 cheques to families of departed journalists. *(November 2021)*
3. **Government Strengthens Journalist Welfare Scheme** — The Government of India reaffirms its commitment to journalist welfare, with 402 journalists or families assisted under JWS between 2014–25. *(November 2025)*

Each card: date tag · heading · 2-line summary · "Read more →" link

#### 4.1.7 Footer

**4-column footer grid:**

Column 1: Logo + 1-line mission + social links (Facebook, Instagram)
Column 2: Quick links — Home, About, Programs, JPL 2026, News, Contact
Column 3: Our Programs — Welfare Aid, Health Support, Training, Events
Column 4: Contact — Sector 82, JLPL, Mohali, Punjab · arshdeep.samar@gmail.com

Bottom bar: © 2024 Journalist Welfare Trust · Registered Trust · Government of India Accredited

---

### Page 2: About (`/about`)

#### 4.2.1 Hero

Heading: **"About Journalist Welfare Trust"**
Subtext: *"A registered trust accredited under the Government of India, dedicated since 2021 to the welfare and empowerment of journalists across India."*

#### 4.2.2 Who We Are

**Full paragraph content:**

> Journalist Welfare Trust was founded in 2021 with a clear purpose: to serve the journalist community of India by providing financial relief, professional support, and a strong sense of collective solidarity. The trust is owned and led by **Arshdeep Singh Samar**, a renowned journalist, Director of The Summer News, and President of the United Press Club (Regd.), Ludhiana. The trust's work is guided by a trustee board chaired by the **Minister of Information, Government of India**, giving it the institutional authority to operate across state boundaries and represent journalists at the highest levels of public governance.

> Since its founding, the trust has built a community of media professionals from diverse backgrounds — print, digital, broadcast, and freelance journalists who share a commitment to ethical reporting, press freedom, and mutual support.

#### 4.2.3 Mission & Vision

**Our Mission:**
> To champion the welfare of journalists while upholding the values of ethical journalism and press freedom. We commit to promoting journalistic integrity, protecting press freedom, empowering the profession through skills and mentorship, and fostering a strong and supportive community.

**Our Vision:**
> A journalist community in India where no member is left without support in times of hardship — and where the profession as a whole is recognised, celebrated, and protected.

#### 4.2.4 Leadership

**Card: Arshdeep Singh Samar**
- Title: President & Founder, Journalist Welfare Trust
- Also: President, United Press Club (Regd.), Ludhiana · Director, The Summer News
- Email: arshdeep.samar@gmail.com

**Card: Trustee Board Chair**
- Title: Minister of Information, Government of India
- Role: Chairs the governing trustee board of the trust

**Card: Munish Attri**
- Title: Chairman, United Press Club
- Role: Key leadership in related community organization

#### 4.2.5 Values (2-column list)

- **Truth First** — Every program and decision is driven by a commitment to factual, ethical journalism
- **Community Over Competition** — Journalists may compete for stories, but they stand together as a profession
- **Dignity in Hardship** — No journalist or their family should face financial crisis without support
- **Transparency in Governance** — As a government-accredited trust, open and accountable operations are non-negotiable
- **Inclusive Representation** — Accredited and non-accredited journalists are both welcome and served

---

### Page 3: Programs (`/programs`)

#### 4.3.1 Hero

Heading: **"Welfare Programs & Support Services"**
Subtext: *"From financial assistance in times of crisis to professional development and community events — everything the trust does is for the journalist community."*

#### 4.3.2 Program 1 — Financial Welfare Aid

**Section heading:** Financial Assistance

**Content:**
The trust helps journalists and their families access financial support during extreme hardship. This includes direct assistance distributed by the United Press Club as well as guidance to access the Government of India's Journalist Welfare Scheme (JWS).

**Government JWS Key Benefits (table):**

| Situation | Aid Available |
|---|---|
| Death of journalist causing extreme hardship to family | Up to ₹5,00,000 |
| Permanent disability preventing livelihood | Up to ₹5,00,000 |
| Diagnosis with major listed ailment | Up to ₹5,00,000 |
| Serious injury requiring hospitalization | Up to ₹5,00,000 |
| Non-accredited journalist (5+ years service) | Up to ₹1,00,000 base |

*Source: Government of India, Ministry of Information and Broadcasting, JWS Guidelines 2019*

**Eligibility summary:**
- Indian citizen and resident
- Accredited to PIB at Central or State/UT Government level, OR
- Working continuously as a journalist for a minimum of 5 years (non-accredited)

**CTA:** "Download JWS Application Form" → `https://accreditation.pib.gov.in/jws/application_form.pdf` (opens in new tab)
**CTA 2:** "Contact Us for Assistance" → `/contact`

#### 4.3.3 Program 2 — Health Support

**Content:**
Journalists accredited with the Government of India are entitled to treatment at Government and CGHS empanelled private hospitals at CGHS rates. The trust helps journalists and their families understand their entitlements and access the healthcare facilities available to them under government welfare programs.

#### 4.3.4 Program 3 — Training & Professional Development

**Content:**
The trust facilitates training programs for journalists at all career stages. Areas covered include digital journalism tools, fact-checking practices, legal awareness for journalists, safety training, and career mentorship. Programs are organized in partnership with press clubs, media institutions, and professional associations.

#### 4.3.5 Program 4 — Community & Tribute Events

**Content:**
The trust organizes community events including tribute functions to honor journalists who have passed away. At these events, financial assistance cheques are distributed to the families of departed journalists. The United Press Club (Regd.) organized one such function at Guru Nanak Dev Bhawan, Ludhiana, where Rs.51,000 cheques were presented to each beneficiary family.

**Apply / Contact CTA Section:**
```
Heading: Need Support?
Text: If you or someone in your family is a journalist facing hardship, 
      contact us directly. We will guide you through the support 
      process and connect you with relevant welfare programs.
Button: Contact the Trust → /contact
```

---

### Page 4: JPL 2026 (`/jpl`)

#### 4.4.1 Hero

Full-width navy hero with saffron gradient bar at top.

**Badge:** `LIVE · Apr 10 – May 3, 2026`

**Heading (--font-display, --text-3xl):**
> Journalist Premier League 2026

**Subtext:**
> *"More than a game — a salute to their courage."*
> Presented by Journalist Welfare Trust in association with United Press Club (Regd.)

**Secondary text:**
> JPL 2026 is not just a cricket league. It is a tribute to the real heroes behind the headlines — the journalists who risk their lives to bring truth to the people. This tournament honours the journalist community, including the martyred journalists who gave everything for their profession.

#### 4.4.2 Tournament Details

| Detail | Info |
|---|---|
| **Tournament** | Journalist Premier League (JPL) 2026 |
| **Format** | Multi-state cricket (T20-style) |
| **Dates** | April 10 – May 3, 2026 |
| **Venue** | Tau Devi Lal Stadium, Panchkula |
| **Organiser** | Journalist Welfare Trust |
| **In association with** | United Press Club (Regd.) |
| **Status** | RESCHEDULED (updated April 15, 2026) |

#### 4.4.3 Results So Far

**Match 1 Result:**
> Punjab vs Jammu & Kashmir — **Punjab won by 7 runs**

#### 4.4.4 Mission Statement for JPL

> "JPL 2026 is a salute to the courage of journalists. It is our tribute to every journalist who has faced risk, danger, or loss in the line of duty. Through sport, we celebrate the strength of the journalism community — united across states, bound by truth."
> — *Journalist Welfare Trust*

**CTA:** "Follow JPL 2026 Updates" → Facebook page `@Thejournalistpremierleague` (opens in new tab)

---

### Page 5: News (`/news`)

#### Structure

- **Page heading:** News & Announcements
- **Filter tabs:** All · Events · Welfare · Press Freedom · JPL 2026
- **Layout:** 3-column grid on desktop, 1-column on mobile
- **Each card:** Date badge · Category tag · Heading · 2-line excerpt · Read more →

#### Placeholder News Items (5 articles)

1. **JPL 2026 — Match Schedule is LIVE!**
   - Category: JPL 2026 · Date: April 7, 2026
   - The complete match schedule for the Journalist Premier League 2026 is now available. Catch all the action at Tau Devi Lal Stadium, Panchkula.

2. **JPL 2026 Rescheduled — Important Update**
   - Category: JPL 2026 · Date: April 15, 2026
   - An important update regarding the rescheduled fixtures for JPL 2026 has been issued. All team captains have been notified.

3. **Government Affirms Commitment to Journalist Welfare**
   - Category: Welfare · Date: November 2025
   - The Government of India has reaffirmed its commitment to journalist welfare, with 402 journalists or families having received assistance under the JWS between 2014 and 2025.

4. **United Press Club Distributes ₹51,000 to Journalist Families**
   - Category: Events · Date: November 24, 2021
   - The United Press Club (Regd.) organised a function at Guru Nanak Dev Bhawan, Ludhiana, distributing financial assistance cheques to families of departed journalists.

5. **JPL 2026: Punjab Defeats J&K by 7 Runs in Match 1**
   - Category: JPL 2026 · Date: April 12, 2026
   - Punjab secured victory over Jammu & Kashmir in the opening match of the Journalist Premier League 2026 at Panchkula.

---

### Page 6: Events (`/events`)

#### Structure

- **Page heading:** Upcoming Events
- Cards layout (same style as news)
- Each card: Date · Location · Event name · Short description · CTA button

#### Placeholder Events

1. **JPL 2026 — Ongoing Tournament**
   - Date: April 10 – May 3, 2026
   - Location: Tau Devi Lal Stadium, Panchkula
   - CTA: View Schedule

2. **Annual Tribute Function — Departed Journalists**
   - Date: To be announced
   - Location: Ludhiana, Punjab
   - Description: Annual tribute ceremony with financial assistance distribution to families of departed journalists.

3. **Journalist Training Workshop — Digital Reporting**
   - Date: To be announced
   - Location: Mohali/Ludhiana, Punjab

---

### Page 7: Contact (`/contact`)

**⚠️ IMPORTANT:** This page must have NO outgoing random/unverified links. All contact details must be clean, verified, and labeled clearly.

#### 4.7.1 Hero

Heading: **"Get in Touch"**
Subtext: *"Whether you need welfare support, want to join the community, or have a press inquiry — reach out to us directly."*

#### 4.7.2 Contact Details Card (left side)

```
📍 Address
Sector 82, JLPL, Mohali, Punjab, India

📧 Email
arshdeep.samar@gmail.com

🌐 Connected Organizations
• United Press Club (Regd.) — Ludhiana, Punjab
• The Summer News — Ludhiana, Punjab
• Journalist Premier League — @Thejournalistpremierleague

🔗 Social Media
• Facebook: facebook.com/ArshdeepSinghSamar [opens in new tab]
• Facebook: facebook.com/ArshdeepSamarnews [opens in new tab]
```

**All external links must use:** `target="_blank" rel="noopener noreferrer"`

#### 4.7.3 Contact Form (right side)

Fields:
- Full Name * (text input)
- Email Address * (email input)
- Phone Number (tel input, optional)
- I am a... (select: Journalist · Family Member · Official · Media Organisation · Other)
- Message / Reason for Contact * (textarea, min 4 rows)
- Submit button: "Send Message" (navy bg, full-width on mobile)

Form behavior: On submit, show inline success message: *"Thank you. We will be in touch within 2-3 working days."* No page reload needed — use `event.preventDefault()` and JS-powered inline state change.

---

## 5. Shared Components

### 5.1 Navigation Header

```
[Logo]                     About  Programs  JPL 2026  News  Events  [Apply for Support]  [🌙]
                                                                      ↑ navy pill btn
```

- Sticky with `position: sticky; top: 0; z-index: 40`
- Background: `backdrop-filter: blur(14px)` + 88% opacity `--color-bg`
- Bottom border: `1px solid var(--color-divider)`
- Mobile: Logo + hamburger. Drawer slides from right with all nav links + CTA

### 5.2 Footer

4-column grid (2-column on tablet, 1-column on mobile). Columns:
1. Logo + mission one-liner + social icons
2. Quick links
3. Programs
4. Contact info

Bottom strip: copyright + "Registered Trust · Government of India Accredited" tagline

### 5.3 Card Component

```css
.card {
  background: var(--color-surface);
  border: 1px solid oklch(from var(--color-text) l c h / 0.1);
  border-radius: var(--radius-xl);
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 180ms ease, transform 180ms ease;
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### 5.4 Button Component

```css
/* Primary */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  padding: .85rem 1.4rem;
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 600;
  min-height: 48px;
}
.btn-primary:hover { background: var(--color-primary-hover); transform: translateY(-1px); }

/* Accent */
.btn-accent {
  background: var(--color-accent);
  color: #fff;
  /* same padding/radius as primary */
}

/* Ghost */
.btn-ghost {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
}
```

### 5.5 Section Layout Pattern

```css
section { padding: clamp(3rem, 7vw, 6rem) 0; }
.container { width: min(calc(100% - 2rem), 1120px); margin: 0 auto; }
.section-kicker {
  font-size: var(--text-xs); text-transform: uppercase; letter-spacing: .08em;
  color: var(--color-primary); font-weight: 700; display: block; margin-bottom: .5rem;
}
h2 { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 400; }
```

### 5.6 Dark Mode

All pages must support light/dark mode:
- Default: system preference via `window.matchMedia('(prefers-color-scheme: dark)')`
- Toggle: sun/moon icon in header, sets `data-theme="light"` or `data-theme="dark"` on `<html>`
- Dark palette: deep charcoal backgrounds (`#171614`), muted text (`#ccc7be`), same navy/saffron accents at adjusted lightness

---

## 6. Technical Requirements

### 6.1 Stack

- **Framework:** Plain HTML + CSS + Vanilla JS (no framework required), OR Next.js/Astro if developer prefers a component-based approach
- **Styling:** CSS custom properties (tokens listed above). Tailwind CSS v4 is acceptable if developer prefers utility-first
- **Icons:** Lucide Icons via CDN — `<script src="https://unpkg.com/lucide@latest"></script>` + `<i data-lucide="newspaper"></i>` + `lucide.createIcons()`
- **Fonts:** Google Fonts (CDN, as shown in section 2.4)
- **Forms:** Vanilla JS form handling with inline success/error states. No external form service needed for the demo — use `event.preventDefault()` + DOM state change

### 6.2 Performance

- All images must have `loading="lazy"`, `decoding="async"`, `width`, `height`
- Font preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- JS deferred: `<script defer>`
- Body max 800KB initial load

### 6.3 Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- One `<h1>` per page
- All `<img>` must have `alt` attributes
- All form `<input>` must have associated `<label>`
- Touch targets minimum 44×44px
- Keyboard navigation must work throughout
- Skip link: `<a href="#main-content" class="skip-link">Skip to content</a>`

### 6.4 Responsiveness

Test and verify at:
- 375px (iPhone SE)
- 768px (iPad)
- 1280px (Desktop)

Grid layouts collapse to single column on mobile. Navigation becomes hamburger drawer on mobile. Hero becomes single column on mobile.

### 6.5 External Links

Every external link (Facebook, government portals, application forms) must have:
```html
target="_blank" rel="noopener noreferrer"
```

The contact page must have **zero** random or unverified outgoing links — only the verified URLs listed in section 4.7.2 above.

---

## 7. SEO & Meta Tags

Each page must include:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[page-specific, 150–160 chars]">
<meta property="og:title" content="[page title] | Journalist Welfare Trust">
<meta property="og:description" content="[same as meta description]">
<meta property="og:type" content="website">
```

**Per-page descriptions:**

| Page | Meta Description |
|---|---|
| Home | Journalist Welfare Trust — a Government of India accredited trust founded in 2021 to support, empower, and protect journalists across India. |
| About | Learn about Journalist Welfare Trust — its mission, leadership, values, and commitment to press freedom and journalist welfare since 2021. |
| Programs | Explore welfare programs including financial aid, health support, training, and community events for journalists and their families. |
| JPL 2026 | Journalist Premier League 2026 — a cricket tournament tribute to the courage of journalists. Presented by Journalist Welfare Trust. |
| News | Latest news and announcements from Journalist Welfare Trust and the journalist community in India. |
| Contact | Get in touch with Journalist Welfare Trust for welfare support, program inquiries, or media contact. |

---

## 8. Quick Reference — What Not To Build

| ❌ Avoid | ✅ Instead |
|---|---|
| Gradient buttons | Solid navy or saffron buttons |
| Icons in colored circles | Icons at natural size, no background |
| Centered body text in paragraphs | Left-aligned body text always |
| Purple/violet color scheme | Navy blue + saffron as defined above |
| Identical 3-column feature grid | Varied card sizes, asymmetric layouts |
| Random outgoing links on contact page | Only verified links from section 4.7.2 |
| Heavy JavaScript framework for a simple trust site | Lean HTML/CSS/JS is preferred |
| `<div>` for navigation | `<nav>`, `<header>`, `<main>` semantic tags |

---

## 9. File / Folder Structure Suggestion

```
journalist-welfare-trust/
├── index.html               ← Home
├── about.html               ← About
├── programs.html            ← Programs
├── jpl.html                 ← JPL 2026
├── news.html                ← News
├── events.html              ← Events
├── contact.html             ← Contact
├── css/
│   ├── tokens.css           ← Design tokens (colors, spacing, type scale)
│   ├── base.css             ← Reset + body defaults
│   └── components.css       ← Cards, buttons, nav, footer, forms
├── js/
│   └── main.js              ← Theme toggle, mobile nav, form handler
└── assets/
    └── logo.svg             ← Trust SVG logo
```

---

*Document prepared by Zarexa — tech agency, Ludhiana, Punjab. All content sourced from journalistwelfaretrust.com, verified public records, press reports, and official Government of India program documentation.*
