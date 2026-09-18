# 🕊️ Holy Ground — Christian Conversation Card App

> *"By the end of the game, I should understand who you are, what shaped you, what matters to you, how you relate to people, what you fear, what you hope for, and how your faith fits into all of that."*

**Holy Ground** is an interactive, editorial conversation card application designed to foster authentic fellowship, intentional reflection, and deep vulnerability within Christian communities, small groups, youth ministries, and discipleship relationships.

Rather than simple icebreakers or escalating awkward confessions, Holy Ground is engineered around **layers of knowing a person**—moving from everyday personality to childhood origins, relational instincts, internal world, and walking with Jesus.

🌐 **Live Web App**: [holyground.vercel.app](https://holyground.vercel.app)

---

## 🎯 The 5-Stage Journey & Final Reflection

Holy Ground organizes conversation across a thoughtful psychological arc:

| Level | Title | Purpose & Focus |
|---|---|---|
| **Level 01** | **WHO ARE YOU?** | **Personality & Everyday Life**: Quirks, humor, passions, routines, and social style. Diagnostic of personality without being shallow. |
| **Level 02** | **WHAT MADE YOU YOU?** | **Origins & Childhood**: Family lessons on failure/success/love, turning points, mentors, and memories that shaped who sits before you. |
| **Level 03** | **HOW DO YOU SHOW UP?** | **Relational DNA**: Attachment, conflict instincts, boundaries, asking for help, and how to love each other better. |
| **Level 04** | **WHAT ARE YOU CARRYING?** | **The Inner World**: The person beneath the persona—fears, coping reflexes, internal dialogues, contrasts, and deep gratitude. |
| **Level 05** | **WHO ARE YOU WITH JESUS?** | **Faith Met in Story**: Character of God, surrender, spiritual silence, Gospel lived out, calling, and who Jesus is forming you into. |
| **FINAL** | **THE REFLECTION ROUND** | **Synthesis & Blessing**: Mutual understanding, celebrating what you learned about each other, prayer needs, and spoken blessings. |

---

## ✨ Interactive Features & Archetypes

- 🃏 **Physical 3D Card Stack**: Direct DOM ref animation engine with natural card rotation, spring release, drag gestures, and fluid swipe physics.
- 🔍 **"Want to go deeper? Tap →"**: Many cards feature an interactive follow-up drawer that unlocks a concrete story behind the initial answer.
- 🏷️ **Rich Card Archetypes**:
  - 📖 **Tell Me the Story**: Narrative-prompt cards that uncover defining life memories.
  - 🧭 **How Do You Operate?**: Diagnostic cards with interactive selectable behavioral chips.
  - ⚖️ **Internal Contrast**: Exposes human tension without guilt or trauma-forcing.
  - ⚓ **Values & Identity**: Explores non-negotiables, respect, and character.
  - ✨ **Reflection Round**: Group synthesis cards to end the night connected.
- 🔀 **Group Night Mix**: Shuffled hybrid deck dynamically pulling from all levels for unpredictable group hangouts.
- ⚡ **Auto-Reveal Preference**: Toggle between manual card tapping and instant question reveals.
- ⌨️ **Keyboard & Gesture Navigation**: Arrow keys (`←` / `→`), spacebar flip toggle, touch dragging, and floating touch controls.
- 🎉 **Celebration Effects**: Confetti bursts upon completing decks and entering the Reflection Round.
- 🎨 **Editorial Aesthetics**: Cream and linen palettes, Bodoni Moda serif typography, debossed card frames, and responsive mobile-first layouts.

---

## 📁 Project Architecture

```text
Holy Ground/
├── docs/                  # Architecture & question design specifications
│   └── holy-ground-questions.md  # Complete question framework & prompt bank
├── public/                # Static assets, SVG icons & favicons
├── src/
│   ├── assets/            # Branding assets & SVG resources
│   ├── components/        # UI Components
│   │   ├── CardDeck.jsx          # Interactive 3D card physics, deeper drawer & chips
│   │   ├── LevelSelector.jsx     # 5-stage menu with dynamic card counts & icons
│   │   ├── Header.jsx            # Progress bar, live counter & navigation suite
│   │   ├── Footer.jsx            # Editorial footer branding
│   │   └── HolyGroundLogo.jsx    # Custom SVG cross & flame logo component
│   ├── data/
│   │   └── questions.js          # 5 levels + Reflection dataset
│   ├── App.jsx            # Root routing, deep links & Fisher-Yates shuffling
│   ├── App.css            # Layout & view wrappers
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

Holy Ground is crafted for:
- Small groups & Cell group gatherings
- Youth & Young Adult retreats
- Church fellowship nights
- One-on-one discipleship coffee chats
- Family devotionals & dinner table discussions
