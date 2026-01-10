# Flower Shop E-commerce Site

A modern, responsive e-commerce website for a flower shop built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (No Local Setup Required!) 🎉

**Easiest way - no Node.js installation needed!**

1. Create a GitHub repository
2. Push this code to GitHub
3. Enable GitHub Pages in Settings
4. GitHub Actions will automatically build and deploy your site!

👉 **See `DEPLOY_TO_GITHUB.md` for step-by-step instructions**

Your site will be live at: `https://YOUR_USERNAME.github.io/TFF/`

### Option 2: Run Locally (Requires Node.js)

#### Prerequisites

1. **Node.js LTS** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`
   - See `SETUP_GUIDE.md` for detailed installation instructions

#### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

**Success looks like:** Server starts on `http://localhost:5173` and browser opens automatically.

**Common error + fix:**
- **Port already in use**: Change port in `vite.config.js` or kill the process using port 5173
- **Module not found**: Delete `node_modules` and `package-lock.json`, then run `npm install` again
- **Tailwind not working**: Make sure `tailwind.config.js` and `index.css` are properly configured

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnnouncementBar.jsx
│   ├── BlogCarousel.jsx
│   ├── CartDrawer.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── ProductCard.jsx
├── pages/              # Page components
│   ├── Collection.jsx
│   ├── Home.jsx
│   └── Product.jsx
├── data/               # Mock data files
│   ├── collections.js
│   ├── posts.js
│   └── products.js
├── state/              # Context providers
│   └── CartContext.jsx
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Announcement bar with dismissible option
- ✅ Sticky header with dropdown navigation
- ✅ Client-side search functionality
- ✅ Product grid with quick add to cart
- ✅ Shopping cart drawer (slide-over)
- ✅ Product detail pages with variant selection
- ✅ Collection/occasion filtering
- ✅ Price range filtering
- ✅ FAQ accordion section
- ✅ Blog highlights carousel
- ✅ Cart persistence (localStorage)
- ✅ Accessible (semantic HTML, ARIA labels)

## 🛠️ Tech Stack

- **Vite** - Fast build tool
- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management for cart

## 📝 Notes

- All images are placeholders - replace with actual product images
- Product data is mock data stored in JSON files
- No backend required - fully client-side
- Cart persists in browser localStorage

## 🔧 Troubleshooting

### Router 404 on refresh (production)

For production builds, configure your server to redirect all routes to `index.html`. Add a `_redirects` file (Netlify) or configure server rewrite rules.

### Tailwind styles not applying

1. Check `tailwind.config.js` has correct content paths
2. Verify `index.css` imports Tailwind directives
3. Restart dev server after config changes

### Images not loading

Images default to SVG placeholders if missing. Add actual images to `/public/images/` folder matching the filenames in data files.

## 📄 License

This is a template project for learning purposes.

