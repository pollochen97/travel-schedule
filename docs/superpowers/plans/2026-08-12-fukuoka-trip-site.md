# Fukuoka Trip Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first static 3-day Fukuoka itinerary website whose primary content and theme can be updated by editing only `tripData.js` and optional files in `assets/`.

**Architecture:** Keep the site dependency-free: `index.html` owns semantic structure, `tripData.js` owns editable trip content, `app.js` renders content and tab interactions, and `styles.css` owns responsive presentation. `app.js` exposes small pure helpers for Node tests while guarding browser-only initialization behind `document` availability.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner (`node:test`).

## Global Constraints

- Single-page static site; no backend, login, database, map API, or site editor.
- Mobile-first layout with centered readable desktop width.
- Three day tabs switch content without page reload.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Missing image, note, location, URL, flight, or hotel fields must not break layout.
- Main travel content must be editable through `tripData.js` without modifying HTML.
- Hero imagery and theme values must be replaceable through `tripData.js` / `assets/`.
- Interactive targets should be approximately 44px high and tabs keyboard accessible.

---

### Task 1: Data Model and Rendering Helpers

**Files:**
- Create: `tripData.js`
- Create: `app.js`
- Create: `tests/app.test.js`

**Interfaces:**
- Consumes: global `tripData` from `tripData.js` in browser.
- Produces: `formatDateRange(trip)`, `validLinks(links)`, `getDay(days, index)`, `safeText(value)`, and browser render functions used by `index.html`.

- [ ] **Step 1: Write failing tests** for date-range formatting, URL filtering, day fallback, and empty-safe text.
- [ ] **Step 2: Run `node --test tests/app.test.js`** and verify failure because helpers do not exist.
- [ ] **Step 3: Implement minimal helpers in `app.js`** and export them under `module.exports` when available.
- [ ] **Step 4: Run `node --test tests/app.test.js`** and verify all helper tests pass.
- [ ] **Step 5: Add a complete three-day editable sample in `tripData.js`** with theme, flights, hotel, days, schedule items, optional images, and links.

### Task 2: Semantic Page Shell and Browser Rendering

**Files:**
- Create: `index.html`
- Modify: `app.js`
- Modify: `tests/app.test.js`

**Interfaces:**
- Consumes: DOM mount points from `index.html` and `tripData`.
- Produces: rendered hero, trip overview, day tabs, timeline, empty state, and footer update text.

- [ ] **Step 1: Add failing source-level tests** asserting required secure-link and tab accessibility strings exist in `app.js`/`index.html`.
- [ ] **Step 2: Run `node --test tests/app.test.js`** and verify the new assertions fail.
- [ ] **Step 3: Implement semantic page shell and DOM render functions** including keyboard-friendly buttons, active tab semantics, secure external links, optional fields, and empty-days fallback.
- [ ] **Step 4: Run `node --test tests/app.test.js`** and verify all tests pass.

### Task 3: Responsive Fukuoka Theme and Replaceable Artwork

**Files:**
- Create: `styles.css`
- Create: `assets/hero-placeholder.svg`
- Create: `assets/README.md`
- Modify: `tests/app.test.js`

**Interfaces:**
- Consumes: class names emitted by `index.html` and `app.js`, CSS variables set from `tripData.theme`.
- Produces: mobile-first Fukuoka travel visual system with responsive cards, tabs, timeline, and image fallbacks.

- [ ] **Step 1: Add failing source-level tests** for 360px-safe responsive rules, focus-visible styling, and timeline/card selectors.
- [ ] **Step 2: Run `node --test tests/app.test.js`** and verify failure before stylesheet exists.
- [ ] **Step 3: Implement `styles.css` and placeholder SVG** with theme variables, rounded cards, timeline, responsive desktop layout, and reduced-motion consideration.
- [ ] **Step 4: Run `node --test tests/app.test.js`** and verify all tests pass.

### Task 4: Usage Documentation and Final Verification

**Files:**
- Create: `README.md`
- Modify: `tests/app.test.js`

**Interfaces:**
- Consumes: final file structure and edit points.
- Produces: clear instructions for editing `tripData.js`, replacing imagery, previewing locally, and deploying to static hosts.

- [ ] **Step 1: Add failing documentation checks** for `tripData.js`, `heroImage`, and local preview instructions.
- [ ] **Step 2: Run `node --test tests/app.test.js`** and verify docs checks fail.
- [ ] **Step 3: Write `README.md`** with edit examples and deployment notes.
- [ ] **Step 4: Run `node --test`** and verify the full test suite passes.
- [ ] **Step 5: Run a local static server and fetch `index.html`** to verify files are served successfully.
- [ ] **Step 6: Inspect `git diff --check` and repository status** for whitespace/errors and expected files only.
