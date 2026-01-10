# 🚀 Deploy to GitHub Pages - One-Shot Guide

Deploy your flower shop site to GitHub Pages **WITHOUT installing anything locally**. GitHub Actions will build and deploy automatically!

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `TFF` (or any name you want)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Push Code to GitHub

**Option A: Using GitHub Desktop (Easiest for Windows)**
1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in
3. File → Add Local Repository
4. Browse to your project folder: `C:\Users\EzraSoriano\OneDrive - Saban Capital Group LLC\Desktop\_Cursor\TFF`
5. Click "Publish repository"
6. Choose your GitHub account and repository name `TFF`
7. Click "Publish Repository"

**Option B: Using Git Commands (if you have Git installed)**
```bash
cd "C:\Users\EzraSoriano\OneDrive - Saban Capital Group LLC\Desktop\_Cursor\TFF"
git init
git add .
git commit -m "Initial commit - Flower Shop site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/TFF.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/TFF`
2. Click **Settings** tab (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. **That's it!** GitHub will automatically deploy when you push code

## Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see a workflow running: "Deploy to GitHub Pages"
3. Wait 2-3 minutes for it to complete (green checkmark ✅)
4. Once done, go back to **Settings → Pages**
5. You'll see your live URL: `https://YOUR_USERNAME.github.io/TFF/`

## ✅ Your Site is Live!

Visit: `https://YOUR_USERNAME.github.io/TFF/`

**Note:** If your repository name is different, update the `base: '/TFF/'` in `vite.config.js` to match your repo name.

## 🔄 Updating Your Site

Every time you push code to GitHub, it automatically rebuilds and deploys:
- Just commit and push your changes
- GitHub Actions will rebuild automatically
- Site updates in 2-3 minutes

## 🐛 Troubleshooting

**"Page not found" or 404 errors:**
- Make sure repository is **Public** (Settings → Change visibility)
- Check that GitHub Actions workflow completed successfully
- Wait a few minutes after first deployment
- Clear browser cache

**Build fails in Actions:**
- Check the Actions tab for error messages
- Common issue: Make sure all files were pushed (especially `.github/workflows/deploy.yml`)

**Styles not loading:**
- Make sure `tailwind.config.js` is in the repository
- Check that `dist` folder was created in the build

**Routes not working:**
- The site uses HashRouter (`#`) - URLs will look like `https://yoursite.com/#/collection`
- This is normal and works perfectly for GitHub Pages

## 📝 Important Notes

- Repository must be **Public** for free GitHub Pages
- First deployment takes 3-5 minutes
- Updates take 2-3 minutes after push
- Your site URL will be: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- No Node.js needed on your computer - GitHub builds it in the cloud!

## 🎉 Done!

Your site is now live on GitHub Pages. Share the URL with anyone!

