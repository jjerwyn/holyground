# 🕊️ Holy Ground — Christian Conversation Card App

**Holy Ground** is an interactive, web-based conversation card application built to foster deep fellowship, intentional spiritual reflection, and authentic relationships within Christian communities, small groups, youth ministries, and cell groups.

Inspired by modern deep-connection card games, Holy Ground elevates everyday conversations into sacred spaces of vulnerability, faith, and joy.

🌐 **Live Web App**: [holyground.vercel.app](https://holyground.vercel.app)

---

## ✨ Key Features

- 🃏 **Interactive Card Deck Experience**: Smooth 3D card flips, direct touch dragging/swiping, and physical stack physics matching native mobile app feel.
- 🎯 **5 Categorized Fellowship Levels**:
  - **Level 01 — First Impressions & Good Vibes**: Icebreakers, perception checks, and lighthearted connection.
  - **Level 02 — Real Talk & Life Stories**: Vulnerability, personal growth, habits, and life experiences.
  - **Level 03 — Faith & Life with Jesus**: Deep personal identity, quiet tensions, self-awareness, and relational closeness (35 cards).
  - **Level 04 — Heart to Heart**: Conviction, surrender, spiritual depth, and radical vulnerability (35 cards).
  - **Level 05 — Wildcards & Group Actions**: Interactive group challenges, instant prayers, and honor rounds (15 cards).
- 🔀 **Mix All Decks**: Shuffled hybrid deck dynamically aggregating all levels and wildcards into one spontaneous session.
- ⚡ **Auto-Reveal Question Preference**: Toggle preference to automatically reveal cards or flip on demand.
- ⌨️ **Keyboard & Touch Controls**: Arrow key shortcuts (`←` / `→`), spacebar flip toggle, touch gestures, and floating control buttons.
- 🎉 **Completion Celebrations**: Festive confetti visual effects (`canvas-confetti`) upon finishing any deck.
- 🎨 **Editorial Design & Aesthetics**: Warm cream palettes, Bodoni Moda serif typography, debossed card frames, and glassmorphic header navigation.

---

## 📁 Project Architecture

```text
Holy Ground/
├── public/                # Static assets, SVG icons & favicons
├── src/
│   ├── assets/            # Branding assets & SVG resources
│   ├── components/        # UI Components
│   │   ├── CardDeck.jsx          # Direct DOM ref animated 3D stack physics renderer
│   │   ├── LevelSelector.jsx     # Dynamic card counter & level selection menu
│   │   ├── Header.jsx            # Progress bar, live counter & navigation suite
│   │   ├── Footer.jsx            # Editorial footer branding
│   │   └── HolyGroundLogo.jsx    # Custom SVG cross & flame logo component
│   ├── data/
│   │   └── questions.js          # Levels schema, dataset & category metadata
│   ├── App.jsx            # Root routing, URL path sync & Fisher-Yates shuffling
│   ├── App.css            # Component-level layout rules
│   ├── index.css          # Design system tokens, variables & typography
│   └── main.jsx           # React root mount point
├── vercel.json            # Vercel SPA rewrite & deployment rules
├── package.json           # Dependencies & build scripts
└── vite.config.js         # Vite configuration
```

---

## 🛠️ Technology Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Visual Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed on your system.

### Installation

1. Clone or navigate to the project root directory:
   ```bash
   cd "Holy Ground"
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the local Vite development server |
| `npm run build` | Compiles and bundles production-ready assets |
| `npm run preview` | Previews the local production build |

---

## 🤝 Community & Usage

Holy Ground is designed for:
- Small groups & Cell group gatherings
- Youth & Young Adult retreats
- Church fellowship nights
- One-on-one discipleship coffee chats
- Family devotionals & dinner table discussions
