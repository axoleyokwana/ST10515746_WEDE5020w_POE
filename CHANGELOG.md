# Changelog

All notable changes to the Zok Internet Café website project will be documented in this file.

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
| v3.0 | 18 Jun 2026 | Part 3 JavaScript started. Created js/main.js and js/form-validation.js. Added jQuery 3.7.1 and Leaflet 1.9.4 via CDN to all pages. |
| v3.1 | 18 Jun 2026 | Added SEO meta description and keywords tags to every page. Created robots.txt and sitemap.xml for search engine crawlers. |
| v3.2 | 18 Jun 2026 | Built an interactive FAQ accordion on the services page using jQuery slideToggle. Five common questions toggle open and closed, with only one answer visible at a time. |
| v3.3 | 18 Jun 2026 | Added product category tabs to the products page using jQuery show and hide. Clicking a tab filters the product categories with a fade transition. |
| v3.4 | 18 Jun 2026 | Implemented a lightbox image gallery on the about page. Clicking community or team photos opens them in a full-screen overlay with a close button and Escape key support. |
| v3.5 | 18 Jun 2026 | Replaced the Google Maps iframe on the contact page with an interactive Leaflet map using OpenStreetMap tiles. A marker with a popup shows the café location in Thokoza. |
| v3.6 | 18 Jun 2026 | Added a live search filter on the services page. Typing in the search bar filters service cards in real time by matching against the card text content. |
| v3.7 | 18 Jun 2026 | Implemented client-side JavaScript form validation on both the enquiry and contact pages. Validates on blur and on submit with inline error messages. The enquiry form shows a response modal with service pricing after successful validation. The contact form compiles the message into a mailto link so the user's email client opens with the message ready to send. |
| v3.8 | 18 Jun 2026 | Added scroll-in animations using IntersectionObserver so sections fade in as they enter the viewport. Added a back-to-top button that appears on scroll. Added CSS transitions and hover effects for the new interactive elements. Updated the README with Part 3 documentation, changelog entries and new references. |
