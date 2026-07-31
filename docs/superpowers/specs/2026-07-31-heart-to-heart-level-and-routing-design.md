# Design Spec: 5-Level Architecture with "Heart to Heart" & URL Routing

## Summary
Expand the Holy Ground card game from 4 to 5 levels by adding a new, deeply intimate **Level 04: Heart to Heart**, moving Wildcards to **Level 05**, and introducing client-side URL routing (`/level1`, `/level2`, `/level3`, `/level4`, `/level5`, `/mixed`).

---

## 1. 5-Level Architecture & Content

### Level Breakdown & Slugs
| Level ID | Slug / URL Path | Title | Category Focus |
|---|---|---|---|
| `level-1` | `/level1` | **First Impressions & Good Vibes** | Icebreakers & initial observations |
| `level-2` | `/level2` | **Real Talk & Life Stories** | Life seasons & personal growth |
| `level-3` | `/level3` | **Faith & Life with Jesus** | Walking with God & daily faith |
| `level-4` | `/level4` | **Heart to Heart** | Raw vulnerability, confessions, hard surrender, wilderness seasons & miracle turning points |
| `wildcards`| `/level5` | **Wildcards & Group Actions** | Group prayers, appreciation, worship & mini challenges |
| `mixed`    | `/mixed`  | **Group Night Mix** | Shuffled deck of all 5 levels |

### Level 04: "Heart to Heart" Voice & Tone Guidelines
Following Favor Church Manila voice:
- Warm, encouraging, safe, and non-judgmental.
- Zero religious jargon or heavy "churchy" clichés.
- Simple, clear phrasing so even someone brand new to faith can understand and share deeply.
- No em dashes (`—`), no sentences starting with `And`, Oxford comma applied, lowercase pronouns for God (`he`, `him`, `his`, `you`).

---

## 2. Client-Side URL Routing

### Features
- **Direct Link Support**: Accessing `http://localhost:5173/level1` through `http://localhost:5173/level5` or `/mixed` directly loads the requested deck.
- **Browser History Integration**: Browser Back/Forward buttons smoothly transition between levels and the main menu.
- **Clean URLs**: Menu selection updates URL via HTML5 `pushState` / history API or React Router, keeping the URL synchronized with active deck state.

---

## 3. Verification Plan
- Verify all 5 levels display correctly on the home screen.
- Verify clicking each level updates the URL path accordingly.
- Verify navigating directly to `http://localhost:5173/level4` loads the new "Heart to Heart" deck.
- Run `npm run build` to confirm zero compilation errors.
