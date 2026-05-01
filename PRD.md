# Portfolio Website — Product Requirements Document
**Designer:** Aabha  
**Purpose:** Personal portfolio for product design roles at tech companies  
**Last updated:** April 2026

---

## 1. Project Overview

A personal portfolio website for Aabha, a product designer at Adobe Illustrator with a background in visual/brand design. The site should feel like a conversation — warm, clear, and intentional — while demonstrating strong craft and attention to detail through its design. The tone is human and direct, not corporate.

**Design personality:** Clean, human, colorful (restrained), creative, intentional.  
**Primary audience:** Hiring managers and recruiters at tech companies.

---

## 2. Tech Stack & Hosting

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (connected to GitHub)
- **Fonts:** Google Fonts — Fraunces (headings), Plus Jakarta Sans (body/UI)
- **Language:** TypeScript

> All pages should be statically generated for fast load times. No backend or database required.

---

## 3. Design System

### 3.1 Color Palette (Monochrome)
```
--color-bg:        #F9F7F4   /* warm off-white, page background */
--color-surface:   #F0EDE8   /* slightly darker, card backgrounds */
--color-border:    #E2DDD7   /* subtle borders and dividers */
--color-muted:     #9E9890   /* secondary text, labels */
--color-body:      #2C2A27   /* primary body text */
--color-heading:   #1A1916   /* near-black, headings */
```

### 3.2 Typography
```
Fraunces       — Display headings, hero text, case study titles
                 Weights: 300 (light), 400 (regular), 600 (semibold)
                 Style: Use italic variant for emphasis/personality

Plus Jakarta Sans — Body text, navigation, labels, captions
                    Weights: 400 (regular), 500 (medium), 600 (semibold)
```

**Type scale (approximate):**
- Hero heading: 56–72px / Fraunces 300
- Section heading: 36–44px / Fraunces 400
- Card title: 22–26px / Fraunces 400
- Body: 17–18px / Plus Jakarta Sans 400
- Caption/label: 13–14px / Plus Jakarta Sans 500, letter-spacing: 0.06em, UPPERCASE

### 3.3 Layout
- Max content width: 1200px, centered
- Page padding (horizontal): 24px mobile, 48px tablet, 80px desktop
- Grid: 12-column CSS grid for flexible layouts
- Generous whitespace — let elements breathe

### 3.4 Interactions (Phase 1 — Static)
Keep all interactions simple for now. Placeholder comments in code where future micro-animations will go, marked with `// TODO: micro-animation`. Examples:
- Nav links: simple underline on hover
- Cards: subtle lift (box-shadow + translateY(-2px)) on hover, transition 200ms ease
- Buttons/CTAs: background fill transition on hover
- All transitions: 150–250ms, ease or ease-out curves only

---

## 4. Site Structure

```
/                   → Homepage
/work               → Work overview (case studies + sneak peeks + Behance link)
/about              → About page
/work/swatch-info   → Case study: Swatch Info
/work/instruct-edit → Case study: Instruct Edit (placeholder)
```

### Navigation
- Logo/name: "Aabha" in Fraunces — links to homepage
- Nav links: Work, About, Say Hi (mailto link)
- Navigation should be minimal, no hamburger menu on desktop
- Mobile: collapsible menu, clean and simple
- Nav is sticky on scroll, with a very subtle backdrop-blur when scrolled

---

## 5. Page Specifications

---

### 5.1 Homepage (`/`)

#### Hero Section
Full-width section, vertically centered, generous top padding.

**Content:**
```
Hi! I'm Aabha :)
I'm a product designer and creative nerd who finds joy in details, systems and stories.
Currently at Adobe, shipping features used and loved by millions of other creatives.
```

- "Hi! I'm Aabha :)" — Fraunces, large display size, the smiley should feel natural not emoji
- Second and third lines — Plus Jakarta Sans, 18–20px, color-body, comfortable line-height (1.6)
- Below the text: a small row of scroll-down indicator or a gentle downward arrow (no text needed)
- No hero image for now — let the typography do the work

**Scroll hint:** A small animated bouncing arrow or "↓" pointing down, subtle, below the text block.
`// TODO: micro-animation — scroll indicator subtle bounce`

---

#### Featured Work Section

**Section label (uppercase caption):** SELECTED WORK  
**Section heading:** Things I've made

Three case study cards displayed in a grid.

**Card layout (each card):**
- Large thumbnail image (16:9 or 3:2 ratio) — use placeholder with subtle gradient if no image available
- Project title (Fraunces)
- One-line description (Plus Jakarta Sans, muted)
- Subtle "View case study →" link
- Entire card is clickable

**Card content:**

Card 1 — Swatch Info
```
Title: Swatch Info
Description: Simplifying color documentation in Adobe Illustrator
Link: /work/swatch-info
Status: LIVE (images available)
```

Card 2 — Instruct Edit
```
Title: Instruct Edit
Description: Designing the generative edit experience in Illustrator
Link: /work/instruct-edit
Status: PLACEHOLDER — show card with a "Case study coming soon" label, 
        slightly muted/dimmed treatment. Card is NOT clickable.
        Use a subtle badge/pill that says "In progress"
```

Card 3 — TBD
```
Status: PLACEHOLDER — same treatment as Card 2, badge says "Coming soon"
        Do not make this card clickable. Leave title and description blank/redacted.
```

**Layout note:** On desktop, 3 cards in a row. On tablet, 2 columns (third card centered or full-width). On mobile, single column stack.

---

#### CTA / Connect Section

A simple, warm closing section at the bottom of the homepage.

**Content:**
```
Heading: Let's talk.
Body: Whether you're hiring, collaborating, or just want to say hi — my inbox is open.
```

**Links displayed as a horizontal row of pills or clean text links:**
- Email (icon + "Email me")
- LinkedIn (icon + "LinkedIn")
- Resume (icon + "Resume" — PDF download, file: /public/resume.pdf)
- Behance (icon + "Behance")

Use simple monochrome icons (Lucide or similar). On hover, each link gets a subtle underline or background highlight.

`// TODO: micro-animation — staggered fade-in on section enter`

---

### 5.2 Work Page (`/work`)

Three sections on this page, clearly delineated by section labels.

---

#### Section 1: Case Studies

**Section label:** CASE STUDIES  
**Section heading:** Deep dives

Same 3 cards from the homepage, but **smaller and less visually prominent**. These are secondary here — the goal is to provide navigation, not to sell. Use a compact card layout:
- Thumbnail (smaller, maybe 2:1 ratio)
- Title
- One-line description
- "View →" link

Same placeholder treatment for Instruct Edit and TBD cards.

---

#### Section 2: Sneak Peeks

**Section label:** SNEAK PEEKS  
**Section heading:** Other things I've worked on

A description line below the heading:
```
A growing collection of projects, features and contributions — 
not big enough for a full case study, but worth showing.
```

Six project cards in a tighter grid (2 columns desktop, 1 column mobile).

**Each card contains:**
- Thumbnail image (use placeholder rectangles with a subtle gradient for now — replaced with real images later)
- Project name (Fraunces, medium weight)
- One-line description (Plus Jakarta Sans, small, muted)
- Category tag (pill-style label, e.g. "Enhancement", "GenAI", "User Voice")
- Status badge: "Shipped ✓" in a subtle pill, or "In progress"
- NO link — these cards do not open any page

**Project data:**

```
1. Fully Align Center
   Description: A single click to align objects both horizontally and vertically.
   Category: User Voice
   Status: Shipped

2. Real Time Pencil
   Description: Enhanced the Pencil tool with live preview and curve-fitting.
   Category: Enhancement
   Status: Shipped

3. Gradients Panel
   Description: Gradient Presets and contextual Gradient Suggestions for faster workflows.
   Category: Modernization
   Status: Shipped

4. Search Bar in Preferences
   Description: Easier discovery of settings with a search bar in the Preferences modal.
   Category: Enhancement
   Status: Shipped

5. Beta App Improvements
   Description: Redesigned the What's New modal and streamlined user feedback for Illustrator Beta.
   Category: Enhancement
   Status: Shipped

6. Ungroup All
   Description: Quickly ungroup all nested layers in a single action.
   Category: Enhancement
   Status: Shipped
```

---

#### Section 3: Older Work

**Section label:** OLDER WORK  
**Content:** A single clean line of text + a link

```
Text: My older visual and brand design work lives on Behance.
Link: View on Behance →  (opens in new tab, URL: [Aabha to supply])
```

Style this as a simple, minimal callout — not a card, not a grid. Just text and a clean text-link with an arrow. Keep it uncluttered.

---

### 5.3 About Page (`/about`)

Warm, personal, reads like a conversation. Layout alternates between text blocks and image grids.

---

#### Intro Block

**Heading (Fraunces):** A little about me.

**Body text (draft — Aabha to personalize):**
```
I'm a product designer with roots in visual and brand design — which means I tend to 
see things other product designers miss, and care about things that might otherwise 
get deprioritized.

I've spent the last two years at Adobe Illustrator, working on everything from 
GenAI features to small quality-of-life improvements that users actually noticed. 
I care about the full picture: the strategy, the flow, and the 2px detail that 
makes something feel right.
```

---

#### What Excites Me

**Heading:** What gets me excited

**Body:** 2–3 short paragraphs or a clean spaced list about:
- Designing for creative professionals / complex tools
- The intersection of craft and systems
- GenAI and what it means for creative tools
*(Aabha to write this in her own voice)*

---

#### What I Want to Learn

**Heading:** What I'm chasing

**Body:** Short, honest, personal.
*(Aabha to write this — motion design, leadership, etc.)*

---

#### Side Quests

**Heading (Fraunces italic):** *Outside the screen*

**Body line:** I'm a big believer that a full life makes better work.

**Photo grid:** A responsive masonry-style or asymmetric CSS grid of personal photos. 

Categories to represent:
- Powerlifting (competed and placed 🏆)
- High altitude trekking
- Cooking
- Home barista coffee
- Animals
- Painting

**Implementation note:** Use a responsive CSS grid with varied aspect ratios for visual interest. Add subtle rounded corners (8px) to photos. Use colored placeholder blocks until Aabha provides real photos.

`// TODO: micro-animation — photos scale slightly on hover`

---

#### Resume CTA

A simple, clean block at the bottom of the about page:

```
Heading: Want the full picture?
Body: Download my resume for a structured look at my experience.
Button: Download Resume  (links to /public/resume.pdf, downloads on click)
```

Button style: outlined, not filled. Monochrome. Slight fill on hover.

---

### 5.4 Case Study: Swatch Info (`/work/swatch-info`)

#### Page Structure

**1. Header / Hero**
- Project title: "Swatch Info" (Fraunces, large)
- One-line summary: "Simplifying color documentation in Adobe Illustrator"
- Metadata row (clean horizontal list):
  - Role: Product Designer
  - Company: Adobe Illustrator
  - Timeline: Sept – Nov 2024
  - Status: Shipped ✓

**2. Full-width hero image**
- Use the best available project image as a full-bleed header visual

**3. Case Study Body**
Reading-optimized single column layout (max-width: 680px, centered). Sections separated by generous spacing.

Suggested sections (Aabha to write actual content):
- **Overview** — What was the problem? Who was it for?
- **The Problem** — Context, user pain points
- **Process** — Research, exploration, decisions made
- **The Solution** — What was designed and why
- **Details** — A closer look at interactions and edge cases
- **Impact** — How it was received, metrics if available

**4. Image treatment throughout**
- Full-width images for hero moments
- Side-by-side comparisons where relevant
- Captions below images in small, muted text (Plus Jakarta Sans, 13px)

**5. Navigation at bottom of page**
```
← Back to Work          Next Case Study →
```

---

### 5.5 Case Study: Instruct Edit (`/work/instruct-edit`)

**Same page structure as Swatch Info.**

**Current status:** Content not yet ready. Show a clean placeholder state:
```
Project title: Instruct Edit
Subheading: Designing the generative edit experience in Illustrator
Body: This case study is currently being written. Come back soon.
```

No lorem ipsum. Clean, minimal, honest.

---

## 6. Components Checklist

Build these as reusable components:

| Component | Used In |
|---|---|
| `<Nav />` | All pages — sticky, blur on scroll |
| `<Footer />` | All pages — minimal |
| `<CaseStudyCard />` | Homepage, Work page — accepts `status` prop (live/placeholder) |
| `<SneakPeekCard />` | Work page — non-clickable |
| `<SectionLabel />` | All pages — uppercase label before headings |
| `<CTARow />` | Homepage — row of contact links with icons |
| `<PhotoGrid />` | About page — masonry photo grid |
| `<Button />` | About page, case studies — outlined and filled variants |
| `<Badge />` | Cards — category tags, status indicators |

---

## 7. Footer

Minimal. Appears on all pages.

```
Left:  Aabha © 2026
Right: Work  ·  About  ·  Say Hi
```

Optional small line in muted text: "Designed by Aabha. Built with Claude."

---

## 8. Responsive Breakpoints

```
Mobile:  < 768px
Tablet:  768px – 1024px
Desktop: > 1024px
```

The site should be fully usable on mobile. Build priority: desktop → mobile → tablet.

---

## 9. SEO & Meta

- Page title: "Aabha — Product Designer"
- Meta description: "Portfolio of Aabha, a product designer at Adobe creating tools for other creatives."
- Favicon: simple monogram "A" — generate a minimal SVG favicon
- Open Graph image: clean text-based card with name and title

---

## 10. Recommended File & Folder Structure

```
/app
  /page.tsx                        → Homepage
  /work
    /page.tsx                      → Work overview
    /swatch-info/page.tsx          → Case study: Swatch Info
    /instruct-edit/page.tsx        → Case study: Instruct Edit (placeholder)
  /about/page.tsx                  → About page
  /layout.tsx                      → Root layout (Nav + Footer)

/components
  Nav.tsx
  Footer.tsx
  CaseStudyCard.tsx
  SneakPeekCard.tsx
  SectionLabel.tsx
  CTARow.tsx
  PhotoGrid.tsx
  Button.tsx
  Badge.tsx

/public
  /images
    /case-studies/swatch-info/     → Add case study images here
    /case-studies/instruct-edit/   → Empty for now
    /sneak-peeks/                  → Add project thumbnails here
    /about/                        → Add personal photos here
  resume.pdf                       → Add resume here when ready

/styles
  globals.css                      → CSS variables, base reset, font imports
```

---

## 11. Out of Scope for V1 (Add Later)

- Micro-animations and hover interactions (marked with `// TODO` throughout the code)
- Page transition animations
- Custom cursor
- Dark mode
- Password-protected case studies (for NDA work)
- Third featured case study (TBD project)
- Real photography for About page
- Vercel Analytics (one line of code when ready)

---

## 12. Content Aabha Still Needs to Supply

| Item | Priority | Notes |
|---|---|---|
| Real email address | High | For "Say Hi" mailto link |
| Resume PDF | High | Drop in /public/resume.pdf |
| About page personal bio | Medium | Draft provided above, needs personalizing |
| About page side quest photos | Medium | Personal photos for the photo grid |
| Instruct Edit case study | Low (V2) | Write when ready |

---

*This document is the source of truth for V1. Build to this spec, keep code clean and well-commented, and flag ambiguities rather than making assumptions.*