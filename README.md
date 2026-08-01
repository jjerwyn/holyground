# 🕊️ Holy Ground — Christian Conversation Card App

**Holy Ground** is an interactive, web-based conversation card application built to foster deep fellowship, intentional spiritual reflection, and authentic relationships within Christian communities, small groups, youth ministries, and cell groups.

Inspired by modern deep-connection card games, Holy Ground elevates everyday conversations into sacred spaces of vulnerability, faith, and joy.

https://holyground.vercel.app

---

## ✨ Key Features

- 🃏 **Interactive Card Deck Experience**: Smooth animated 3D card flips, intuitive swiping, and tactile card interactions powered by Framer Motion.
- 🎯 **Categorized Fellowship Levels**:
  - **Level 1 — Icebreakers & Light Connections**: Fun, engaging questions to warm up conversations.
  - **Level 2 — Faith & Life**: Meaningful prompts bridging everyday experiences with spiritual walk.
  - **Level 3 — Deep Waters**: Vulnerable, introspective questions built for trusted small groups.
  - **Group Night Mix**: A shuffled hybrid deck combining all levels and wildcards for unpredictable group sessions.
- ⌨️ **Keyboard & Gesture Navigation**: Support for arrow key shortcuts (`←` Previous / `→` Next) and direct touch interaction.
- 🎉 **Completion Celebrations**: Festive confetti visual effects (`canvas-confetti`) when completing card decks.
- 📱 **Responsive & Glassmorphic Design**: Sleek dark-mode aesthetic with modern typography, smooth gradients, and mobile-first responsive layouts.

---

## 📁 Project Architecture

```text
Holy Ground/
├── public/                # Static assets & favicon
├── src/
│   ├── assets/            # Project image resources & branding
│   ├── components/        # UI Components
│   │   ├── CardDeck.jsx          # 3D interactive card renderer & control suite
│   │   ├── LevelSelector.jsx     # Level selection menu & Group Night mix trigger
│   │   ├── Header.jsx            # App header, progress tracking & deck controls
│   │   ├── Footer.jsx            # Branding footer
│   │   └── HolyGroundLogo.jsx    # Custom SVG logo component
│   ├── data/
│   │   └── questions.js          # Structured prompt dataset & level metadata
│   ├── App.jsx            # Root application state & deck shuffle logic
│   ├── App.css            # Component-level styling & custom layout rules
│   ├── index.css          # Design system tokens, variables & typography
│   └── main.jsx           # React app root mount point
├── package.json           # Project dependencies & scripts
└── vite.config.js         # Vite bundler configuration
```

---

## 🛠️ Technology Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Visual Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)

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
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` folder |
| `npm run preview` | Previews the local production build |
| `npm run lint` | Runs Oxlint code verification across the codebase |

---

## 🤝 Community & Usage

Holy Ground is designed to be used in:
- Small groups & Cell group gatherings
- Youth & Young Adult retreats
- Church fellowship nights
- One-on-one discipleship coffee chats
- Family devotionals & dinner table discussions

