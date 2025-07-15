
# 🧵 Madras Checks — Full Website Build (Cursor + Pages CMS)

This project is a complete rebuild of [madraschecks.com](https://madraschecks.com), blending Tamil textile heritage with generative art, variable fonts, on-chain culture, and narrative design.

---

## 🔧 Tech Stack

| Layer       | Tech                                   |
|-------------|----------------------------------------|
| Frontend    | Vanilla JS, HTML5, CSS3, p5.js         |
| Font Logic | Variable fonts (CSS VFont + JS hover)   |
| Backend     | Express.js (art generator API)         |
| CMS         | [Pages CMS](https://pagescms.com) for articles |
| Hosting     | GitHub Pages (static site), Render (backend) |

---

## 📁 File Structure

```
/public
  index.html
  history.html
  generator.html
  gallery.html
  press.html
  about.html
  articles.html
  article-template.html
  contact.html
  merch.html

/style
  layout.css
  font-hover.css
  article.css

/js
  konami.js
  generator.js
  gallery.js
  cms.js

/assets
  logo.svg
  bg_texture.jpg
  favicon.png
  sample-art/
  press-kit.zip

/docs
  README.md
```

---

## 🗂️ Page Content Overview

### 1. `index.html` — Home
**Purpose:** Introduce the project. Use full-screen hero and hover-reactive variable font.

**Sections:**
- Hero Title: _“Woven Memory. Bleeding History. Yours to Mint.”_
- Subtitle: _Reviving Madras Checks through generative code and cultural memory._
- Buttons: `Explore Generator`, `Read History`, `View Articles`
- Hidden Generator Trigger: Konami Code (`valipokkann`)

---

### 2. `history.html` — Cultural Timeline
**Purpose:** Educational timeline blending historical data + visuals.

**Timeline Entries:**
- 5000 BCE: Cotton domesticated (Mehrgarh, Indus Valley)
- 300 BCE: Tamil Sangam ports trade with Rome
- 1600 CE: “Madras cloth” exported by British EIC
- 1750 CE: British imitate Madras patterns, ban Indian cloth
- 1950s: “Bleeding Madras” becomes Ivy League fashion
- 2020s: Revival via code, NFTs, and cultural memory

**Includes:**
- Tamil glossary: நூல் (thread), கட்டம் (check), பட்டு (silk)
- Dye table: Indigo, madder, turmeric, lac
- Loom structure notes: pit loom, backstrap, treadle

---

### 3. `generator.html` — Art Generator (Hidden)
**Accessed via:** Konami Code (“valipokkann”)

**Features:**
- Canvas (p5.js)
- Thread spacing & thickness sliders
- Palette picker
- Seed input / randomize
- Save, Download, Local Gallery
- “Bleed” toggle (for aesthetics)

**Backend:** Calls Express.js server hosted on Render

---

### 4. `gallery.html`
**Purpose:** Visual archive of generated pieces

**UI Features:**
- Grid of thumbnails
- Filter by palette / bleed / style
- Zoom view with seed info
- Save to `localStorage`

---

### 5. `press.html`
**Content:**
- Grid: VICE, Scroll.in, Lens Protocol, NFT Paris
- Downloadable press-kit: `/assets/press-kit.zip`
- Embedded Mirror article, X post highlights

---

### 6. `articles.html` — Powered by Pages CMS
**Purpose:** Long-form writing, public updates, stories

**CMS Source:** Pages CMS blog (or Markdown)

**Features:**
- Auto-loaded from JSON feed or Pages CMS API
- Card layout: title, summary, tags
- Click → opens `article-template.html`

---

### 7. `article-template.html`
**Purpose:** Render full articles

**Features:**
- Dynamic load from CMS feed
- Styles preserved (headings, blockquotes, Tamil terms)
- Highlight Tamil glossary on hover (optional)

---

### 8. `about.html`
- Story: Artist’s journey, roots, ADHD, decolonial lens
- Purpose: Code meets cloth, personal meets political
- Vision: Helping weavers, re-telling textile memory

---

### 9. `contact.html`
- Inputs: Name, Email, Message
- Purpose: For weavers, collabs, journalists

---

### 10. `merch.html` (Future)
- Sneak peek: Generative cloth → physical loom
- NFT → physical cloth bridge preview
- Join waitlist

---

## 🔠 Variable Font Hover (VFont)
Use the font hover logic from:  
[https://innovinitylabs.github.io/emotionaltype-creativeusage/index.html](https://innovinitylabs.github.io/emotionaltype-creativeusage/index.html)  
Copy logic from `article-mode.html`

---

## 🔓 Konami Code Integration

- Use `konami.js` to detect input: `valipokkann`
- On trigger, show generator section (`generator.html` or modal inside homepage)
- Optional animation or “thread unlock” reveal

---

## ✅ Setup Checklist

- [ ] Copy layout + design system
- [ ] Apply cultural background (bg_texture.jpg or generator output)
- [ ] Embed p5.js canvas and API calls
- [ ] Connect Pages CMS or Markdown loader
- [ ] Test hover font + fade animations
- [ ] Push to GitHub Pages + Render

---

## ✨ Future Enhancements

- ETH/BTC hybrid NFT minting logic (QQL-style)
- Fade on wallet transfer (Ethereum metadata triggers)
- Press/Events section with live map
- Tamil/English toggle UI
