# Zok Internet Café Website

---

## Project Overview

This project involves designing and developing a fully functional, multi-page website for Zok Internet Café, a community-focused digital services business based in Thokoza, South Africa. The website is being built as part of the WEDE5020w module and will be completed across three submission phases.

The café currently has no online presence and relies entirely on physical marketing such as pamphlets, posters, and word-of-mouth. This website aims to change that by giving the business a professional digital identity that the local community can access at any time.

---

## Student Information

**Full Name:** Axole Yokwana  
**Student Number:** ST10515746  
**Module:** WEDE5020w

---

## Website Goals and Objectives

**Goals:**
- Establish a professional online presence for Zok Internet Café.
- Centralise all service and pricing information in one place.
- Increase public awareness of government-related services offered, including SARS e-Filing, SASSA applications, and PSIRA registrations.
- Build trust with potential customers before they visit the café in person.

**Objectives:**
- Reach 200 or more unique local visitors within the first two months of launch.
- Reduce in-store enquiries about pricing and availability by at least 30% within three months.
- Automate the enquiry process for specialised services via an online contact form.
- Ensure all key information is reachable within two clicks from the homepage.
- Grow the café's social media following by linking to the WhatsApp contact page.

---

## Key Features and Functionality

The website consists of six fully styled pages:

- **index.html** - Homepage with a responsive hero image, tagline, introductory copy, a "View Our Services" call-to-action button, and a three-column "What We Offer" card grid.
- **about.html** - Business history, orange mission and vision blocks, community involvement cards, and a three-member team grid with portrait photos.
- **services.html** - Six service cards in a responsive grid, each with an image, description and starting price, plus a full-width "Enquire Now" call-to-action bar.
- **products.html** - Products grouped under four categories (Stationery, Tech Accessories, Airtime and Data, Refreshments) in a two-column product grid, plus a "Visit Us In-Store" banner.
- **enquiry.html** - Centred enquiry form with a two-column name row, service type dropdown, message field and styled submit button.
- **contact.html** - Two-column layout with a contact form on the left and contact details, WhatsApp link and embedded Google Map on the right.

**General features include:**
- Fully responsive design for mobile (600px), tablet (768px) and desktop, with a CSS-only hamburger navigation menu on small screens.
- Sticky Digital Blue navigation bar and consistent three-column footer on every page.
- External stylesheet (`css/style.css`) with CSS custom properties, Grid, Flexbox and media queries — no inline or internal styles.
- Google Fonts (Poppins for headings, Open Sans for body text) loaded with preconnect for faster rendering.
- Hover, focus and active states on links, buttons, cards and form fields for accessibility.
- Responsive hero image with `picture`, `srcset` and `sizes` for optimised loading on mobile data connections.
- High-contrast brand colours and readable typography throughout.
- Alt text on all images for screen reader compatibility.

---

## Technical Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, Flexbox/Grid layouts, media queries |
| JavaScript | Client-side form validation *(planned for Part 3)* |
| Google Fonts | Poppins and Open Sans typefaces |
| Font Awesome | Icons for services and navigation *(planned for Part 3)* |
| GitHub Pages | Free static site hosting |
| Visual Studio Code | Primary development IDE |

**Colour Palette:**
- Primary: Digital Blue `#0A74DA`.
- Background: Cloud White `#F5F7FA`.
- Accent: Sunrise Orange `#F28C28`.
- Text: Charcoal Black `#2B2B2B`.

---

## Timeline and Milestones

### Part 1 - HTML Foundation

| Week | Dates | Deliverable |
|---|---|---|
| 1 | 23 Feb 2026 | Project proposal, initial file structure, GitHub setup |
| 2 | 02 Mar 2026 | Sitemap, wireframes, content gathering, image sourcing |
| 3 | 09 Mar 2026 | HTML structure for all 6 pages, semantic tags, navigation |
| 4 | 16 Mar 2026 | HTML content completed, cross-browser testing, validation |
| 5 | 20 Apr 2026 | Final testing, README update, **Part 1 submission (20 April)** |

### Part 2 - CSS and Responsive Design

| Week | Dates | Deliverable |
|---|---|---|
| 6 | 26 Apr 2026 | External stylesheet, CSS reset, typography and colour setup |
| 7 | 05 May 2026 | Grid/Flexbox layouts, hover states, pseudo-classes |
| 8 | 12 May 2026 | Media queries, mobile and tablet layouts, image optimisation |
| 9 | 19 May 2026 | Final responsive testing, cross-device checks, **Part 2 submission (19 May)** *(completed 28 May 2026)* |

### Part 3 - JavaScript and Final Polish

| Week | Dates | Deliverable |
|---|---|---|
| 10 | TBC | Form validation, interactive elements, image gallery, SEO basics |
| 11 | TBC | Accessibility audit, screen reader testing, animations, AJAX form |
| 12 | TBC | Final testing across all devices, **Part 3 submission (TBC)** |

---

## Part 1 Details

Part 1 focuses on the planning and HTML foundation of the website. The following has been completed:

- Project proposal document submitted, covering the organisation overview, website goals, current website analysis, proposed features, design decisions, technical requirements, timeline, budget, content sourcing strategy, and sitemap.
- GitHub repository created and configured.
- Initial file and folder structure set up.
- Wireframes designed for all six pages.
- Sitemap finalised.

**File Structure:**

```
Zok-internet-cafe/
├── index.html
├── about.html
├── services.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── images/
│   ├── hero-cafe-collaboration.png
│   ├── hero-cafe-collaboration-800.png
│   ├── hero-cafe-collaboration-480.png
│   ├── responsiveness-desktop-1.png
│   ├── responsiveness-desktop-2.png
│   ├── responsiveness-ipad-1.png
│   ├── responsiveness-ipad-2.png
│   ├── responsiveness-s25-1.png
│   ├── responsiveness-s25-2.png
│   └── (service, product and team images)
└── js/          *(planned for Part 3)*
```

---

## Part 2 Details

Part 2 adds the full visual layer and responsive behaviour on top of the Part 1 HTML foundation. All styling is handled by a single external stylesheet linked from every page. The following has been completed:

### CSS Foundation

- **External stylesheet:** `css/style.css` is linked to all six pages via `<link rel="stylesheet">`. There are no inline styles or internal `<style>` blocks anywhere in the project.
- **CSS custom properties:** Brand colours, max-width and page gutter spacing are defined once in a `:root` block and reused across the stylesheet.
- **CSS reset:** A universal reset clears default margins and padding and sets `box-sizing: border-box` so layouts are consistent across browsers.
- **Typography:** Poppins is used for headings and Open Sans for body text, both loaded from Google Fonts with `preconnect` hints. A typography scale sets font sizes, weights, line height and letter spacing from H1 down to button text.
- **Reusable container:** A `.container` class centres content at a max-width of 1100px with consistent horizontal padding.
- **Smooth scrolling:** `scroll-behavior: smooth` is applied to the `html` element.

### Shared Components (All Pages)

- **Sticky navigation bar:** Digital Blue background with white links, box shadow, and an orange underline on the active page link. On screens 600px and below, the nav collapses into a CSS-only hamburger menu using a checkbox toggle — no JavaScript required.
- **Page header band:** A full-width Digital Blue heading strip below the nav displays the page title in white centred text.
- **Buttons:** Sunrise Orange `.btn-primary` buttons with rounded corners, hover darkening, focus styles and a subtle active press effect.
- **Site footer:** A three-column Charcoal Black footer on every page with a business description, Quick Links list (including Enquiry), and Visit Us details (address and operating hours). A copyright line sits below a divider.
- **Form styling:** Labels, inputs, selects and textareas share consistent padding, borders and border-radius. Focus states use a Digital Blue border and soft glow for keyboard accessibility.

### Page-by-Page Styling

**Homepage (`index.html`)**
- Hero section with the café image displayed above the text in a stacked layout (image banner with rounded corners and shadow, followed by a white content card).
- Orange uppercase tagline, centred heading, intro paragraph and "View Our Services" button inside the hero card.
- "What We Offer" section with a three-column card grid. Cards have white backgrounds, borders, shadows and a hover lift effect. Logo cards (SARS) use `object-fit: contain` so logos are not cropped.

**About Us (`about.html`)**
- Centred intro section for the business history.
- Mission and Vision displayed in two equal columns as Sunrise Orange blocks with white text.
- Community involvement shown as two side-by-side cards with 16:9 images and descriptive text below.
- Team section with a three-column grid. Portrait photos are uniform rounded rectangles with a Digital Blue border, displayed above each member's name, role and bio.

**Services (`services.html`)**
- Centred service introduction paragraph.
- Six service cards in a three-column grid, each with an image, title, description and blue starting price. Logo cards (SARS, PSIRA) keep logos fully visible with `object-fit: contain`. Cards have hover lift effects.
- Full-width Charcoal Black "Enquire Now" call-to-action bar at the bottom with an orange button linking to the enquiry page.

**Products (`products.html`)**
- Centred "Shop With Us" introduction.
- Products grouped under four category headings: Stationery, Tech Accessories, Airtime and Data, and Refreshments.
- Each category uses a two-column product grid with horizontal cards (thumbnail image beside name and price).
- Full-width Sunrise Orange "Visit Us In-Store" banner at the bottom with stock availability notice.

**Enquiry (`enquiry.html`)**
- Centred "Make an Enquiry" introduction.
- Enquiry form inside a white `.form-card` with shadow and rounded corners, constrained to 640px width.
- First name and last name fields sit side by side in a two-column `.form-row` that stacks on mobile.
- Service type dropdown with eight options and a styled submit button.

**Contact Us (`contact.html`)**
- Centred "Get In Touch" introduction.
- Two-column `.contact-grid`: contact form on the left, contact information on the right.
- Contact details include phone, WhatsApp link, email, location and operating hours.
- Embedded Google Map iframe with rounded corners below the contact details.

### Image Handling

- All content images use `object-fit: cover` and `aspect-ratio` so cards and photos stay uniform without stretching.
- Logo images use `object-fit: contain` with padding so SARS and PSIRA logos display in full.
- Hero image uses a `<picture>` element with `srcset` and `sizes`, serving three optimised variants:
  - `hero-cafe-collaboration-480.png` for mobile (600px and below)
  - `hero-cafe-collaboration-800.png` for tablet (900px and below)
  - `hero-cafe-collaboration.png` (1024px) for desktop

---

## Sitemap

```
HOME
├── ABOUT
│   ├── History of the Business
│   ├── Mission and Vision
│   ├── Community Involvement
│   └── Our Team
├── SERVICES
│   ├── Printing
│   ├── Scanning
│   ├── SARS e-Filing
│   ├── CV Typing
│   ├── PSIRA Registration
│   └── Other Services
├── PRODUCTS
│   ├── Stationery
│   ├── Tech Accessories
│   ├── Airtime and Data
│   └── Refreshments
├── ENQUIRY
│   ├── Enquiry Form
│   └── Service Selection Options
└── CONTACT
    ├── Contact Details
    ├── Contact Form
    ├── Location Map
    └── Operating Hours
```

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| v0.1 | 23 Feb 2026 | Repository created, initial README added, project proposal completed. |
| v0.2 | 15 Apr 2026 | Initial HTML code pushed to GitHub repository. |
| v0.3 | 18 Apr 2026 | Images added to project and linked to the HTML structure. |
| v0.4 | 18 Apr 2026 | README.md created and added to repository. |
| v0.5 | 18 Apr 2026 | Made changes to the README.md file. |
| v1.0 | 28 May 2026 | Part 2 styling started. Created the single external stylesheet at css/style.css and linked it to all six pages. Added a CSS reset and base styles so every browser renders the site consistently. |
| v1.1 | 28 May 2026 | Added Google Fonts (Poppins for headings, Open Sans for body) and applied a typography scale with font sizes, weights, line height and letter spacing to set a clear heading hierarchy. |
| v1.2 | 28 May 2026 | Applied the brand palette throughout: Digital Blue navigation and headings band, Sunrise Orange call to action buttons, Cloud White page background and Charcoal Black text. |
| v1.3 | 28 May 2026 | Replaced the old table based layouts on every page with semantic markup using sections and articles, then rebuilt the column structures with CSS Grid and Flexbox to match the approved wireframes. |
| v1.4 | 28 May 2026 | Made the navigation bar sticky on all pages and added an active state for the current page. Added a CSS only collapsing menu so the nav turns into a hamburger toggle on small screens. |
| v1.5 | 28 May 2026 | Built the homepage hero with a responsive image banner above a content card containing the tagline, intro and View Services button. |
| v1.6 | 28 May 2026 | Standardised all images with object-fit cover and aspect-ratio so service, product and team images keep a uniform height. Team photos are uniform rounded rectangles with a Digital Blue border, centred in their grid cells. |
| v1.7 | 28 May 2026 | Created resized hero image variants and added a picture element with srcset and sizes so the correct image is served per screen width. |
| v1.8 | 28 May 2026 | Added hover, focus and active states to navigation links, buttons, tabs and cards, and added focus styles to all form fields for better accessibility. |
| v1.9 | 28 May 2026 | Added responsive breakpoints for tablet (768px) and mobile (600px) using media queries. All multi column layouts now collapse to a single column on mobile, with adjusted font sizes and spacing. Relative units (rem, em and percentages) used throughout. |
| v2.0 | 28 May 2026 | Moved the shared address and operating hours into a styled three column footer so the homepage matches the five row wireframe. Grouped products under their four categories on the products page. |
| v2.1 | 28 May 2026 | Added full-width page header bands to all six pages. Styled the contact page two-column grid with form card, contact details and embedded map. Added the services CTA bar and products visit bar. Applied CSS custom properties, card hover effects, form focus styles and smooth scrolling. |
| v2.2 | 28 May 2026 | README updated with complete Part 2 documentation covering CSS foundation, shared components, page-by-page styling, responsive breakpoints and image optimisation. |
| v2.3 | 28 May 2026 | Added six responsiveness screenshots to the images folder: responsiveness-desktop-1/2, responsiveness-ipad-1/2, and responsiveness-s25-1/2. |
| v2.4 | 28 May 2026 | Added a Responsiveness of the Website section to the README with device-specific descriptions for Samsung S25 Ultra, iPad Air and MSI MP2412W, with screenshots linked under each device heading. |
| v2.5 | 28 May 2026 | Removed the duplicate Responsive Design section from Part 2 and the Part 1 Feedback Corrections section from the README to avoid repetition. |
| v2.6 | 28 May 2026 | Fixed responsiveness screenshot order and captions in the README. Added Enquiry to footer Quick Links on all pages. Added .gitignore for .DS_Store files. Updated README objectives to reflect WhatsApp link on the contact page. |

---

## Responsiveness of the Website

The website has been thoroughly designed and tested to ensure optimal display and functionality across all device sizes, from mobile phones to large desktop monitors. The following demonstrates the responsive behaviour on different screen sizes.

### Mobile

**Device:** Samsung S25 Ultra (360px - 600px)

![Samsung S25 Ultra — homepage with menu closed](images/responsiveness-s25-2.png)

![Samsung S25 Ultra — mobile menu expanded](images/responsiveness-s25-1.png)

The mobile layout demonstrates the fully responsive design on a modern Android flagship device. The navigation collapses into a hamburger menu, all multi-column layouts stack to a single column, and images and text scale appropriately for smaller screens.

**Key Features:**
- Hamburger menu navigation with collapsible links
- Single column layout for all cards and content
- Reduced font sizes and padding for compact display
- Full-width images and components
- Touch-friendly button sizes
- Responsive hero image (480px variant)

**Screenshot 1 - What We Offer on Samsung S25 Ultra:**
Shows the homepage with the hamburger menu closed. The "What We Offer" cards stack vertically in a single column with full-width images.

**Screenshot 2 - Mobile Menu Expanded:**
Shows the navigation menu expanded with all links visible, demonstrating the CSS-only hamburger toggle functionality with an orange accent on the active page link.

### Tablet

**Device:** iPad Air (768px - 1023px)

![iPad Air — homepage hero and welcome card](images/responsiveness-ipad-1.png)

![iPad Air — What We Offer and footer](images/responsiveness-ipad-2.png)

The tablet breakpoint activates at 768px width, reducing font sizes slightly and adjusting multi-column grids for optimal viewing on medium-sized screens. Key responsive changes include:

**Layout Adjustments:**
- Service and product grids shift from 3 columns to 2 columns for better spacing
- Mission and vision blocks, community cards, and contact grids collapse to single column
- Footer maintains 2-column layout for readability
- Hero image height adjusted to 15rem
- Increased padding to balance larger screen real estate

**Homepage on iPad Air:**
Shows the full homepage layout with the sticky navigation bar displaying all menu links inline with an orange underline on "Home". The hero section displays the café image and the welcome card with call-to-action button. Below shows the "What We Offer" section with cards in a responsive layout.

**Screenshot 2 - What We Offer and Footer on iPad Air:**
Demonstrates the three-column card grid and three-column footer on a tablet screen, with Quick Links and Visit Us information displayed side by side.

### Desktop

**Device:** MSI MP2412W (1024px and above)

![MSI MP2412W — homepage hero and welcome card](images/responsiveness-desktop-1.png)

![MSI MP2412W — What We Offer and footer](images/responsiveness-desktop-2.png)

The desktop layout displays the full three-column grid layouts, larger typography, and all components at their optimal sizes:

- Full 3-column grids for services, products, and community cards
- Mission and vision blocks display side-by-side in orange containers with white text
- Team members show in a 3-column grid with equal-height cards
- Sticky navigation bar and three-column footer provide consistent navigation and information
- Hero image displayed at full 1024px variant
- Maximum content width of 1100px with comfortable padding on all sides
- Hover effects on cards and buttons enhance interactivity

---

## References

ColorHunt, n.d. *Color Palettes for Designers and Artists*. [Online]. Available at: https://colorhunt.co. [Accessed 10 April 2026].

CSS-Tricks, n.d. *A Complete Guide to Flexbox*. [Online]. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/. [Accessed 12 May 2026].

CSS-Tricks, n.d. *A Complete Guide to Grid*. [Online]. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/. [Accessed 12 May 2026].

FreePik, n.d. *Images*. [Online]. Available at: https://www.freepik.com. [Accessed 10 April 2026].

GitHub, n.d. *GitHub Pages Documentation*. [Online]. Available at: https://docs.github.com/en/pages. [Accessed 10 April 2026].

Google Fonts, n.d. *Free Fonts Library*. [Online]. Available at: https://fonts.google.com. [Accessed 10 April 2026].

Host Africa, n.d. *Domain Registration in South Africa*. [Online]. Available at: https://hostafrica.co.za/domains/. [Accessed 10 April 2026].

MDN Web Docs, n.d. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS. [Accessed 5 May 2026].

MDN Web Docs, n.d. *Responsive images*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images. [Accessed 12 May 2026].

MDN Web Docs, n.d. *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries. [Accessed 12 May 2026].

PSIRA, n.d. *PSIRA Online Services*. [Online]. Available at: https://www.psira.co.za/. [Accessed 10 April 2026].

SARS, n.d. *SARS e-Filing Portal*. [Online]. Available at: https://www.sars.gov.za/. [Accessed 10 April 2026].

W3Schools, n.d. *CSS Tutorial*. [Online]. Available at: https://www.w3schools.com/css/. [Accessed 5 May 2026].
