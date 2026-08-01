# Graph Report - .  (2026-08-01)

## Corpus Check
- Corpus is ~12,430 words - fits in a single context window. You may not need a graph.

## Summary
- 55 nodes · 68 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Dependencies & UI Icons
- Dev Tools & Build Plugins
- Package Manifest & Scripts
- Core CardDeck & Navigation UI
- Level Selector & Master Questions Data
- App Shell & Footer
- App Router & Deck Utilities
- Vercel Routing Config

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `App()` - 4 edges
3. `HolyGroundLogo()` - 4 edges
4. `shuffleArray()` - 3 edges
5. `getDeckAndLevelFromPath()` - 3 edges
6. `LEVELS` - 3 edges
7. `canvas-confetti` - 2 edges
8. `framer-motion` - 2 edges
9. `lucide-react` - 2 edges
10. `react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 2 thin omitted)

### Community 0 - "App Dependencies & UI Icons"
Cohesion: 0.18
Nodes (11): canvas-confetti, framer-motion, lucide-react, dependencies, canvas-confetti, framer-motion, lucide-react, react (+3 more)

### Community 1 - "Dev Tools & Build Plugins"
Cohesion: 0.18
Nodes (11): oxlint, devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react, @types/react (+3 more)

### Community 2 - "Package Manifest & Scripts"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 3 - "Core CardDeck & Navigation UI"
Cohesion: 0.47
Nodes (3): CardDeck(), Header(), HolyGroundLogo()

### Community 4 - "Level Selector & Master Questions Data"
Cohesion: 0.40
Nodes (3): LevelSelector(), LEVELS, QUESTIONS

### Community 6 - "App Router & Deck Utilities"
Cohesion: 0.67
Nodes (3): App(), getDeckAndLevelFromPath(), shuffleArray()

## Knowledge Gaps
- **20 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `App Dependencies & UI Icons` to `Package Manifest & Scripts`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Tools & Build Plugins` to `Package Manifest & Scripts`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._