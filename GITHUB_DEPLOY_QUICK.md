# ⚡ GitHub Deployment - Quick Steps

**NO NODE.JS NEEDED!** Just push to GitHub and it auto-deploys.

## 🎯 3 Simple Steps

### 1. Create GitHub Repo
- Go to https://github.com/new
- Name: `TFF` (or change `vite.config.js` base path if different)
- Make it **PUBLIC** ⚠️ (required for free Pages)
- Don't initialize with anything
- Click Create

### 2. Push Code
**Easiest: Use GitHub Desktop**
1. Download: https://desktop.github.com/
2. Install and sign in
3. File → Add Local Repository → Browse to this folder
4. Click "Publish repository" → Select your GitHub account
5. Done!

**Or use Git commands** (if you have Git):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/TFF.git
git push -u origin main
```

### 3. Enable Pages
1. GitHub repo → **Settings** tab
2. **Pages** (left sidebar)
3. Source: **GitHub Actions**
4. Done! Wait 2-3 minutes

## ✅ Your Site is Live!

Visit: `https://YOUR_USERNAME.github.io/TFF/`

## 🔧 If Repo Name is Different

Edit `vite.config.js` line 6:
- Change `base: '/TFF/'` to `base: '/YOUR_REPO_NAME/'`
- Then push again

## 📝 That's It!

Every time you push code, GitHub automatically rebuilds and deploys.

No npm install, no build commands - just push and it works! 🎉

