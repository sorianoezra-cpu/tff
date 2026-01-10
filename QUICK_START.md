# 🚀 Quick Start Guide

Get your flower shop site running in 5 minutes!

## Step 1: Install Node.js (if not already installed)

1. Go to https://nodejs.org/
2. Download the **LTS version** (big green button)
3. Run the installer (keep all defaults)
4. **RESTART Cursor/terminal** after installation

Verify installation:
```bash
node --version
npm --version
```

You should see version numbers (e.g., `v20.11.0` and `10.2.4`)

## Step 2: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

Wait for installation to complete (may take 1-2 minutes).

## Step 3: Start Development Server

```bash
npm run dev
```

The server will start at `http://localhost:5173` and your browser should open automatically!

## ✨ That's It!

Your site should now be running. You should see:
- ✅ Hero banner
- ✅ Product grid
- ✅ Navigation menu
- ✅ All pages working

## 🐛 Troubleshooting

**"node is not recognized"**
→ Install Node.js (Step 1) and restart your terminal/Cursor

**"Port 5173 already in use"**
→ Close other applications using that port, or edit `vite.config.js` to use a different port

**Styles look broken**
→ Make sure Tailwind is configured. The `tailwind.config.js` file should exist.

**Images don't show**
→ This is expected! The app uses placeholder images. See `REPLACE_CHECKLIST.md` to add real images.

## 📚 Next Steps

- See `RUN_CHECKLIST.md` for detailed testing
- See `REPLACE_CHECKLIST.md` for customization guide
- See `NEXT_UP.md` for enhancement ideas
- See `README.md` for full documentation

## 🎯 Test These Features

1. Click "Shop" in navigation → Should show all products
2. Type in search bar → Should filter products
3. Click a product card → Should open product detail page
4. Click "Quick Add" → Cart drawer should open
5. Adjust quantity in cart → Should update price
6. Click collections → Should filter by occasion

Happy coding! 🌸

