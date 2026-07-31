# Card Deck Physical Stack Animation & Auto-Reveal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add real-time physical stack drag-and-lift motion, directional swipe fly-off transitions, and persistent Auto-Reveal Question preference mode to `CardDeck.jsx`.

**Architecture:** Utilize Framer Motion's `useMotionValue` and `useTransform` to bind active card horizontal displacement (`x`) directly to the underlying ghost card scale (`0.96` ➔ `1.0`) and vertical position (`8px` ➔ `0px`). Store `autoReveal` preference in `localStorage`.

**Tech Stack:** React 19, Framer Motion 12, Lucide React, CSS3 3D Perspective.

## Global Constraints
- Do not break existing keyboard shortcuts (`Space` to flip, `ArrowLeft` / `ArrowRight` to navigate).
- Preserve light luxury editorial styling tokens (`#fbf9f4`, `#c59b27`, `#121826`).
- Hardware accelerate 3D card flips with `-webkit-backface-visibility: hidden` and `will-change: transform`.

---

### Task 1: Dynamic Card Stack Motion Physics & Underneath Scaling

**Files:**
- Modify: `src/components/CardDeck.jsx`

**Interfaces:**
- Consumes: Framer Motion `useMotionValue`, `useTransform`
- Produces: Dynamic `underScale` and `underY` motion transforms for underlying card

- [ ] **Step 1: Define underneath motion transforms in CardDeck.jsx**

```javascript
const underScale = useTransform(x, [-180, 0, 180], [1.0, 0.96, 1.0]);
const underY = useTransform(x, [-180, 0, 180], [0, 8, 0]);
```

- [ ] **Step 2: Bind motion styles to underlying ghost card layer**

Apply `style={{ scale: underScale, y: underY }}` to the `<motion.div>` underlying ghost card element.

- [ ] **Step 3: Test build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/CardDeck.jsx
git commit -m "feat: add dynamic card stack scaling physics on drag"
```

---

### Task 2: Auto-Reveal Preference State & Control UI Pill

**Files:**
- Modify: `src/components/CardDeck.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `localStorage` key `holyground_auto_reveal`
- Produces: Toggleable Auto-Reveal setting pill in `CardDeck.jsx`

- [ ] **Step 1: Add autoReveal state and localStorage synchronization**

```javascript
const [autoReveal, setAutoReveal] = useState(() => {
  const saved = localStorage.getItem('holyground_auto_reveal');
  return saved !== null ? JSON.parse(saved) : true;
});

useEffect(() => {
  localStorage.setItem('holyground_auto_reveal', JSON.stringify(autoReveal));
}, [autoReveal]);

// Apply autoReveal on index change
useEffect(() => {
  setIsFlipped(autoReveal);
}, [currentIndex, autoReveal]);
```

- [ ] **Step 2: Add Auto-Reveal Pill Toggle UI below control buttons**

```jsx
<button
  onClick={() => setAutoReveal(!autoReveal)}
  className={`toggle-pill ${autoReveal ? 'active' : ''}`}
>
  <span>{autoReveal ? '⚡' : '📖'}</span>
  <span>Auto-Reveal Question: <strong>{autoReveal ? 'ON' : 'OFF'}</strong></span>
</button>
```

- [ ] **Step 3: Test build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/CardDeck.jsx src/index.css
git commit -m "feat: add persistent auto-reveal question preference toggle"
```
