# 5-Level Architecture & URL Routing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand Holy Ground to a 5-level deck structure with the new Level 04 "Heart to Heart" and add URL routing (`/level1` - `/level5`, `/mixed`).

**Architecture:** Update `src/data/questions.js` with 5 levels and 25 new Level 04 cards. Integrate HTML5 History API route synchronization in `src/App.jsx` so URLs dynamically map to selected levels and support direct linking & browser back/forward buttons.

**Tech Stack:** React 19, JavaScript (ES modules), Vite, HTML5 History API.

## Global Constraints
- Favor Church Manila communication voice: warm, encouraging, simple, zero religious jargon.
- No em dashes (`—`), Oxford comma used, lowercase pronouns for God (`he`, `him`, `his`, `you`).
- Clean client-side routing mapping `/level1`, `/level2`, `/level3`, `/level4`, `/level5`, `/mixed`.

---

### Task 1: Update `src/data/questions.js` with 5-Level Structure & Level 04 "Heart to Heart" Cards

**Files:**
- Modify: `src/data/questions.js`

**Interfaces:**
- Consumes: `LEVELS` array, `QUESTIONS` array
- Produces: 5-level metadata (`level-1`, `level-2`, `level-3`, `level-4`, `wildcards`) and 115 total cards (25 each for levels 1-4, 15 for level 5)

- [ ] **Step 1: Update `LEVELS` definition in `src/data/questions.js`**
- [ ] **Step 2: Add 25 Level 04 ("Heart to Heart") question objects with Favor Manila voice**
- [ ] **Step 3: Update Level 05 Wildcard objects (`levelId: 'wildcards'`)**
- [ ] **Step 4: Verify questions data by building with `npm run build`**

---

### Task 2: Implement Client-Side URL Routing in `src/App.jsx`

**Files:**
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `window.location.pathname`, `window.history.pushState`, `window.addEventListener('popstate')`
- Produces: Dynamic sync between active level state and URL routes (`/`, `/level1`, `/level2`, `/level3`, `/level4`, `/level5`, `/mixed`)

- [ ] **Step 1: Add route-to-level mapping helper function in `src/App.jsx`**
- [ ] **Step 2: Initialize `currentLevel` and `deck` state from current `window.location.pathname`**
- [ ] **Step 3: Update level selection handlers to call `window.history.pushState`**
- [ ] **Step 4: Add `popstate` event listener so browser back/forward navigation works**
- [ ] **Step 5: Test build with `npm run build`**
