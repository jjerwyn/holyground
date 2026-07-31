# Card Deck Physical Stack Animation & Auto-Reveal Design Specification

## Overview
Enhance the mobile card deck UX in Holy Ground by introducing realistic physical card stack drag-and-lift physics, fluid swipe-off transitions, and an Auto-Reveal Question preference setting.

## Requirements

### 1. Physical Card Stack Drag & Lift Physics
- **Dynamic Scale & Lift**: As the active top card is dragged horizontally (x-axis), the underlying card (`currentIndex + 1`) dynamically transforms:
  - `scale`: `0.96` ➔ `1.0`
  - `translateY`: `8px` ➔ `0px`
  - `opacity`: `0.9` ➔ `1.0`
- **Fly-off Animations**: Swiping beyond a 50px threshold or 150px/s velocity throws the card cleanly off-screen (`x: ±400px`, `rotate: ±20deg`, `opacity: 0`).
- **Entering Physics**: The new card cleanly snaps into position as the main card.

### 2. Auto-Reveal Question Mode
- **State**: `autoReveal` boolean state (defaulting to `true`).
- **Behavior**:
  - When `autoReveal` is `true`, advancing to a card sets `isFlipped = true` automatically so question text is shown immediately.
  - When `autoReveal` is `false`, cards start on the Cover (`isFlipped = false`).
- **Persistence**: Saved in `localStorage` under `holyground_auto_reveal`.
- **UI Control**: A subtle pill toggle button rendered below the action bar:
  `[ ⚡ Auto-Reveal: ON / OFF ]`

## Architecture & File Changes
- **[CardDeck.jsx](file:///Users/jerwyn/Desktop/Projects/Holy%20Ground/src/components/CardDeck.jsx)**:
  - Integrate `useTransform` dynamic scale/lift for underlying ghost card layer.
  - Add direction tracking for `<AnimatePresence>` slide transitions.
  - Implement `autoReveal` state, `localStorage` syncing, and UI pill toggle button.

## Verification
- Verify swipe drag physics and smooth underlying card scaling on mobile viewport.
- Verify Auto-Reveal toggle persistence and state behavior.
- Run production build check (`npm run build`).
