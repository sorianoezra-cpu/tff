# Setup Guide - Flower Shop E-commerce Site

## PHASE 1: Node.js Installation (REQUIRED FIRST STEP)

### Step 1: Install Node.js LTS (Windows)

**Simplest Windows Approach:**

1. **Download Node.js LTS:**
   - Go to: https://nodejs.org/
   - Click the big green button that says "LTS" (Long Term Support)
   - This will download the `.msi` installer for Windows

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through all the prompts (keep default settings)
   - ✅ **Important**: Make sure "Add to PATH" is checked (should be by default)
   - Click "Install" (you may need admin privileges)
   - Click "Finish" when done

3. **Restart Your Terminal/Command Prompt:**
   - Close Cursor completely and reopen it
   - OR close and reopen PowerShell/Command Prompt
   - This ensures the PATH environment variable is updated

### Step 2: Verify Installation

After restarting your terminal, run these commands ONE AT A TIME:

```bash
node --version
```

**Success looks like:** `v20.11.0` or similar (version number may vary, but should be v18+ or v20+)

**Common error + fix:**
- Error: `'node' is not recognized...`
- Fix: Restart your terminal/Cursor. If still not working, restart your computer. If still failing, you may need to manually add Node.js to PATH (advanced - contact if needed).

```bash
npm --version
```

**Success looks like:** `10.2.4` or similar (npm comes bundled with Node.js)

**Common error + fix:**
- Error: `'npm' is not recognized...`
- Fix: Same as above - restart terminal first.

---

## PHASE 2: Create Vite React Project

Once Node.js is verified, run these commands in order:

### Command 1: Create Vite React Project

```bash
npm create vite@latest flower-shop -- --template react
```

**Success looks like:** Output showing "Scaffolding project..." and "Done."

**Common error + fix:**
- Error: `npm create` command not found
- Fix: Make sure you're using Node.js 18+ and npm is working. Try `npm --version` first.
- Error: Network/fetch errors
- Fix: Check your internet connection. You can also try: `npm create vite@latest flower-shop -- --template react --yes`

### Command 2: Navigate to Project Directory

```bash
cd flower-shop
```

**Success looks like:** Your terminal prompt should change to show `flower-shop` in the path.

### Command 3: Install Dependencies

```bash
npm install
```

**Success looks like:** Progress bars showing packages installing, ending with "added X packages"

**Common error + fix:**
- Error: `npm ERR!` with dependency conflicts
- Fix: Delete `node_modules` folder (if exists) and `package-lock.json`, then run `npm install` again.
- Error: Permission denied
- Fix: Run terminal as Administrator, or use `npm install --legacy-peer-deps`

### Command 4: Install Additional Dependencies

```bash
npm install react-router-dom tailwindcss postcss autoprefixer
```

**Success looks like:** "added X packages"

### Command 5: Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

**Success looks like:** "Created Tailwind CSS config file: tailwind.config.js"

**Common error + fix:**
- Error: `npx` not found
- Fix: Make sure npm installed correctly. Try `npm install -g npx` (though npx should come with npm)

---

## Next Steps

After completing the above, the project structure will be set up. Then we'll:
1. Configure Tailwind CSS
2. Set up project folder structure
3. Create all components and pages
4. Add data files
5. Implement routing and state management

---

## Quick Troubleshooting

- **"command not found"**: Restart terminal after installing Node.js
- **Port already in use**: Change port in `vite.config.js` or kill process using port 5173
- **Tailwind not working**: Check `tailwind.config.js` and `index.css` setup
- **Router 404 on refresh**: Configure server rewrite rules (we'll add this)

