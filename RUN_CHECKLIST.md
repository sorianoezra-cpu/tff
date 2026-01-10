# ✅ Run Checklist

Follow these steps to get the project running locally:

## Phase 1: Prerequisites ✅

- [ ] **Node.js LTS installed** (v18+)
  - Check: Run `node --version` in terminal
  - Should see: `v20.x.x` or similar
  - If not installed: Download from https://nodejs.org/ (LTS version)
  - **IMPORTANT**: Restart terminal/Cursor after installing

- [ ] **npm installed** (comes with Node.js)
  - Check: Run `npm --version` in terminal
  - Should see: `10.x.x` or similar

## Phase 2: Project Setup ✅

- [ ] **Navigate to project directory**
  ```bash
  cd "C:\Users\EzraSoriano\OneDrive - Saban Capital Group LLC\Desktop\_Cursor\TFF"
  ```

- [ ] **Install dependencies**
  ```bash
  npm install
  ```
  - **Success**: See "added X packages" message
  - **Common error**: If fails, delete `node_modules` folder and `package-lock.json`, then try again

- [ ] **Verify Tailwind CSS config**
  - Files should exist: `tailwind.config.js`, `postcss.config.js`
  - If missing, run: `npx tailwindcss init -p`

## Phase 3: Start Development Server ✅

- [ ] **Start dev server**
  ```bash
  npm run dev
  ```

- [ ] **Verify server started**
  - Should see: `Local: http://localhost:5173`
  - Browser should auto-open
  - If port in use: Change port in `vite.config.js` or kill process on port 5173

- [ ] **Check homepage loads**
  - Should see: Hero section, product grid, collections
  - Images may show as placeholders (this is expected)

## Phase 4: Test Key Features ✅

- [ ] **Navigation works**
  - Click "Shop" or "Collections" - should navigate
  - Header dropdown menu works
  - Mobile menu toggles correctly

- [ ] **Search functionality**
  - Type in search bar - should show results dropdown
  - Submit search - should filter products

- [ ] **Product pages**
  - Click any product card - should open product detail page
  - Variant selector works
  - Quantity selector works

- [ ] **Shopping cart**
  - Click "Quick Add" on product card - cart drawer should open
  - Cart icon shows item count
  - Quantity +/- buttons work
  - Remove button works
  - Cart persists after page refresh (localStorage)

- [ ] **Filters**
  - Collection/occasion filter works
  - Price range filter works
  - Search filter works

- [ ] **FAQ section**
  - Accordion opens/closes correctly
  - Multiple FAQs can be open at once

- [ ] **Blog carousel**
  - Auto-rotates every 5 seconds
  - Arrow navigation works
  - Dots indicator works

## Phase 5: Common Issues Checklist ✅

If something doesn't work:

- [ ] **Page not loading**: Check console for errors (F12)
- [ ] **Styles not applying**: Verify Tailwind is configured, restart dev server
- [ ] **Images broken**: Expected - add real images to `/public/images/`
- [ ] **Cart not persisting**: Check browser localStorage is enabled
- [ ] **Router 404 on refresh**: This is a dev server limitation - works in production build

## ✅ All Done!

If all checks pass, your flower shop e-commerce site is running successfully! 🎉

**Next Steps:**
- Customize colors, fonts, and content (see REPLACE_CHECKLIST.md)
- Add real product images
- Deploy to hosting service

