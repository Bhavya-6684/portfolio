# 🚀 Bhavya — Personal Portfolio Website

A premium, Awwwards-quality personal portfolio website for a Software Engineer, AI Developer, and Startup Founder.

## ✨ Features

- 🌑 **Dark futuristic design** — Electric blue + purple neon palette
- ⚡ **Interactive particle system** — Mouse-reactive canvas animations
- 🖱️ **Custom cursor** — Smooth lagging ring with hover effects
- 🧭 **Glassmorphism navigation** — Sticky, blur-backdrop navbar
- 🎯 **Typewriter hero** — Cycling role titles with animated cursor
- 📊 **Radar chart** — Canvas-based animated skill overview
- 🃏 **3D tilt project cards** — Cinematic hover transform effects
- 📖 **Case study modals** — Detailed project deep-dives
- 🏆 **Experience timeline** — Animated achievement showcase
- 💬 **Glassmorphism testimonials** — Premium quote cards
- 🌌 **Tech ecosystem** — Orbiting technology icons
- ✍️ **Blog section** — Insights & article cards
- 📬 **Contact form** — Premium glassmorphism form
- 🎞️ **Scroll-triggered reveals** — IntersectionObserver animations
- 📱 **Fully responsive** — Mobile-first, desktop-perfect

## 📁 Project Structure

```
portfolio/
├── index.html              # Main SPA
├── css/
│   ├── reset.css           # Modern CSS reset
│   ├── variables.css       # Design tokens & color system
│   ├── animations.css      # Keyframes & scroll utilities
│   └── main.css            # All section styles
├── js/
│   ├── particles.js        # Canvas particle system
│   ├── cursor.js           # Custom cursor + mouse parallax
│   ├── typewriter.js       # Typewriter effect
│   ├── counter.js          # Animated number counters
│   ├── radar.js            # Skills radar chart
│   ├── animations.js       # All animation controllers
│   └── main.js             # App bootstrap
├── assets/
│   └── images/             # Project and profile images
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🚀 Deploy to Vercel

### Option 1 — Vercel CLI (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects static site — click **Deploy**
5. 🎉 Live in seconds!

### Option 3 — Drag & Drop
1. Zip the entire project folder
2. Drag to [vercel.com/new](https://vercel.com/new)
3. Done!

## 🏠 Run Locally

```bash
# Using npx serve (no install needed)
npx serve .

# Using Python (if installed)
python -m http.server 3000

# Using Node.js http-server
npx http-server . -p 3000
```

Open `http://localhost:3000`

## 🎨 Customization

### Update Personal Info
Edit `index.html` to change:
- **Name**: Search for "Bhavya" and replace
- **Email**: Update `bhavya@example.com`
- **LinkedIn/GitHub/Twitter**: Update URLs
- **Resume**: Add `assets/resume.pdf`
- **Projects**: Modify project cards and `window.projectData` in `js/main.js`
- **Stats**: Update `data-target` attributes on stat counters
- **Skills**: Adjust `data-width` on skill bar fills

### Update Colors
Edit `css/variables.css`:
```css
--color-accent: #3B82F6;     /* Electric Blue */
--color-highlight: #8B5CF6;  /* Purple Neon */
```

### Add Your Photo
Replace `assets/images/hero_portrait.png` with your photo.

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| Core | HTML5, CSS3, Vanilla JavaScript |
| Fonts | Google Fonts (Space Grotesk, Inter) |
| Animations | CSS Animations, Web Animations API, Canvas API |
| Deploy | Vercel (static) |

## 📈 Performance

- ⚡ No build step required
- 🚀 Zero dependencies
- 🎯 Optimized for 95+ Lighthouse score
- 📱 Mobile-first responsive
- ♿ WCAG accessibility compliant

---

Built with ❤️ by Bhavya · [Portfolio](https://your-domain.vercel.app)
