# 🔄 Replace These Later Checklist

Use this checklist to customize the site with your own branding, content, and assets.

## 🎨 Branding & Design

### Colors
- [ ] **Primary green color** (`green-600`, `green-700`)
  - **Location**: `tailwind.config.js` - extend theme colors
  - **Files to update**: All components using `bg-green-600`, `text-green-600`, etc.
  - **Current**: Green (#16a34a, #15803d)
  - **Replace with**: Your brand color

- [ ] **Secondary colors** (grays, accents)
  - **Location**: Tailwind utility classes throughout
  - **Current**: Default Tailwind grays
  - **Replace with**: Your brand palette

### Fonts
- [ ] **Font family**
  - **Location**: `tailwind.config.js` - extend theme.fontFamily
  - **Current**: Default system fonts (sans-serif)
  - **Replace with**: Your brand font (e.g., Google Fonts)
  - **How to add**: Import in `index.html`, configure in `tailwind.config.js`

### Logo
- [ ] **Header logo**
  - **Location**: `src/components/Header.jsx` - line 29
  - **Current**: `🌸 Flower Shop` text
  - **Replace with**: Your logo image or SVG
  - **Code to change**:
    ```jsx
    <img src="/logo.png" alt="Your Brand" className="h-10" />
    ```

- [ ] **Footer logo**
  - **Location**: `src/components/Footer.jsx` - line 9
  - **Current**: `🌸 Flower Shop` text
  - **Replace with**: Your logo image

### Brand Name
- [ ] **Site title**
  - **Location**: `index.html` - `<title>` tag (line 7)
  - **Current**: "Flower Shop - Fresh Flowers & Arrangements"
  - **Replace with**: Your brand name and tagline

- [ ] **Header brand name**
  - **Location**: `src/components/Header.jsx` - line 29
  - **Current**: "🌸 Flower Shop"
  - **Replace with**: Your brand name

- [ ] **Footer brand name**
  - **Location**: `src/components/Footer.jsx` - line 9
  - **Current**: "🌸 Flower Shop"
  - **Replace with**: Your brand name

## 📝 Content & Text

### Homepage
- [ ] **Hero heading** (`src/pages/Home.jsx` - line 12)
  - **Current**: "Fresh Flowers for Every Occasion"
  - **Replace with**: Your hero message

- [ ] **Hero description** (`src/pages/Home.jsx` - line 15)
  - **Current**: "Beautiful arrangements delivered to your door..."
  - **Replace with**: Your brand story/message

- [ ] **CTA button text** (`src/pages/Home.jsx` - line 18)
  - **Current**: "Shop Now"
  - **Replace with**: Your call-to-action

- [ ] **Section headings**
  - "Shop Best Sellers" → Your heading
  - "Shop By Occasion" → Your heading
  - "Latest from Our Blog" → Your heading
  - "Frequently Asked Questions" → Your heading

### Announcement Bar
- [ ] **Announcement text** (`src/components/AnnouncementBar.jsx` - line 10)
  - **Current**: "🌸 Free shipping on orders over $75! Use code: BLOOM2024"
  - **Replace with**: Your promotion/announcement

### Footer
- [ ] **Footer description** (`src/components/Footer.jsx` - line 13)
  - **Current**: "Fresh flowers and arrangements delivered to your door..."
  - **Replace with**: Your brand description

- [ ] **Contact information** (`src/components/Footer.jsx` - lines 50-60)
  - Address, phone, email
  - Social media links (currently placeholder links)

### FAQ
- [ ] **FAQ questions and answers** (`src/components/FAQ.jsx` - lines 3-34)
  - **Current**: Generic FAQ items
  - **Replace with**: Your actual FAQs
  - Add/remove items as needed

## 🖼️ Images

### Product Images
- [ ] **Product photos** (`/public/images/`)
  - Files: `placeholder-rose.jpg`, `placeholder-sunflower.jpg`, etc.
  - **Current**: SVG placeholders
  - **Replace with**: High-quality product photos
  - **Recommendations**: 
    - Size: 800x800px minimum
    - Format: JPG or WebP
    - Optimize for web (compress images)

### Collection/Occasion Images
- [ ] **Collection banner images** (`/public/images/`)
  - Files: `placeholder-anniversary.jpg`, `placeholder-birthday.jpg`, etc.
  - **Current**: SVG placeholders
  - **Replace with**: Collection/occasion banner images
  - **Recommendations**: 
    - Size: 600x600px minimum
    - Match your brand aesthetic

### Blog Images
- [ ] **Blog post images** (`/public/images/`)
  - Files: `placeholder-blog-1.jpg` through `placeholder-blog-4.jpg`
  - **Current**: SVG placeholders
  - **Replace with**: Blog post featured images
  - **Recommendations**: 
    - Size: 1200x675px (16:9 aspect ratio)
    - Engaging, relevant to post content

### Favicon
- [ ] **Site favicon** (`/public/vite.svg`)
  - **Current**: Default Vite logo
  - **Replace with**: Your brand favicon
  - **How**: Replace file, update `index.html` if filename changes

## 📦 Product Data

### Products
- [ ] **Product information** (`src/data/products.js`)
  - Update product titles, descriptions, prices
  - Replace with your actual products
  - Add real product variants
  - Update categories and occasions

### Collections
- [ ] **Collections/occasions** (`src/data/collections.js`)
  - Update collection names and descriptions
  - Match your product offerings
  - Add/remove collections as needed

### Blog Posts
- [ ] **Blog content** (`src/data/posts.js`)
  - Replace with actual blog posts
  - Update titles, excerpts, dates
  - Add real blog content pages if needed

## 🔧 Configuration

### Meta Tags
- [ ] **SEO meta tags** (`index.html`)
  - Add description, keywords, Open Graph tags
  - Add social media preview images

### Analytics
- [ ] **Add analytics** (optional)
  - Google Analytics, Facebook Pixel, etc.
  - Add tracking scripts to `index.html`

### Contact Form
- [ ] **Contact form** (if needed)
  - Currently no contact form
  - Add contact form component if required
  - Integrate with email service or form handler

## 🎯 Quick Replace Guide

### Find & Replace (Case Sensitive)
- `Flower Shop` → Your brand name
- `green-600` → Your primary color class
- `green-700` → Your primary color dark variant
- `🌸` → Your logo emoji or remove
- `flowershop.com` → Your domain
- `(123) 456-7890` → Your phone number

### Color Scheme Examples
- **Pink/Red theme**: Replace `green-` with `pink-` or `red-`
- **Blue theme**: Replace `green-` with `blue-`
- **Purple theme**: Replace `green-` with `purple-`

### Recommended Tools
- **Image optimization**: TinyPNG, ImageOptim, or Squoosh
- **Color palette**: Coolors.co, Adobe Color
- **Fonts**: Google Fonts, Font Squirrel
- **Icons**: Heroicons (already using SVG icons - can customize)

## ✅ Priority Order

1. **High Priority** (Must replace before launch):
   - Brand name/logo
   - Contact information
   - Product data and images
   - Colors

2. **Medium Priority** (Should replace):
   - Text content
   - Collection images
   - FAQ content

3. **Low Priority** (Can update later):
   - Blog posts
   - Social media links
   - Analytics
   - Advanced SEO

