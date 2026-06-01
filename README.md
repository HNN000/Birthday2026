# 🎉 Happy Birthday 2026 Website

A cute, Stardew Valley-inspired birthday website with pixel art animations and memory gallery.

## ✨ Features

- 🎨 **Stardew Valley Aesthetic**: Pastel colors and cozy design
- 🐥 **Pixel Art Animations**: Cute animated characters and floating decorations
- 📸 **Memory Gallery**: Display your favorite moments with day counters
- 💕 **Days Counter**: Shows how many days you've been friends
- ✨ **Interactive Effects**: Particle animations on click
- 📱 **Responsive Design**: Works on all devices

## 🚀 Quick Start

1. **Edit `config.js`** to customize:
   - `meetingDate`: When you met your friend (YYYY-MM-DD)
   - `memories`: Add your photos and memories
   - `birthdayDate`: Your friend's birthday

2. **Open `index.html`** in your browser

## 📝 Configuration Guide

### Edit Your Meeting Date
```javascript
meetingDate: '2023-06-01', // Change to your actual meeting date
```

### Add Photo Memories
```javascript
memories: [
    {
        image: '🎮', // Use emoji or image URL
        title: 'Gaming Adventures',
        date: '2023-06-15'
    },
    {
        image: 'https://example.com/photo.jpg', // Image URL
        title: 'Beach Day',
        date: '2023-07-20'
    }
]
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-green: #A4D65E;      /* Main color */
    --secondary-green: #86C336;    /* Secondary */
    --pink-accent: #FF6B9D;        /* Accent color */
    /* ... more colors ... */
}
```

### Modify Characters
Change the emoji characters in `styles.css` or use your own pixel art.

## 🌐 Deploy

### GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select `main` branch as source
4. Your site will be live at: `https://HNN000.github.io/Birthday-2026`

### Other Hosting
- Upload files to any web hosting service
- Or use services like Vercel, Netlify, or Firebase Hosting

## 📱 Tips

- Use high-quality photos (they look best!)
- Keep memories to 6-12 items for best visual layout
- Test on mobile to ensure everything looks good
- Adjust colors in `config.js` to match your theme

## 🎁 Have Fun!

This website is designed to make your friend feel special. Add lots of memories and personalize the colors to match your friendship!

---

**Created with 💚**