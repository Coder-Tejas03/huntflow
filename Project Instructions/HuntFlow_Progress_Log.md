# HuntFlow — 12-Day Progress Log
> **Purpose:** This is the single source of truth for the AI tutor agent. Read this at the start of every session before doing anything else. It contains the master plan, all daily reports, and a live student profile that gets more accurate every day.

---

## HOW TO USE THIS DOCUMENT (Agent Instructions)

1. **Start of each session:** Read the full Student Profile (Section 3) and the most recent Day Report(s).
2. **During the session:** Teach according to the day's goals listed in Section 2, personalized by the student profile.
3. **End of each session:** Fill in that day's report under Section 4 before closing.
4. **Never skip a day's report.** The whole point is continuity without re-reading chats.

---

## 1. Project Reference

| Item | Detail |
|---|---|
| Project Name | HuntFlow |
| Spec Document | `HuntFlow_Project_Spec.md` |
| Tutor Instructions | `HuntFlow_Tutor_Instructions.md` |
| GitHub Repo | `github.com/Coder-Tejas03/huntflow` |
| Local Path | `/home/tejas/Projects/huntflow/` |
| Practice Code | `/home/tejas/Projects/huntflow/Practice/script.js` |
| Start Date | 2026-08-28 (Day 1) |
| Target End Date | 2026-09-08 (Day 12) |
| Daily Commitment | 6 hours |

---

## 2. Master 12-Day Plan

| Day | Focus Area | Key Deliverables | Status |
|---|---|---|---|
| Day 1 | JS Revision | `let`/`const`, arrow functions, objects, destructuring, `map`/`filter`/`reduce`/`find`/`forEach`, `async`/`await`, `fetch()` | ✅ COMPLETE |
| Day 2 | Project Setup | `npm init`, Express server, static HTML/CSS, Git + GitHub first push | ✅ COMPLETE |
| Day 3 | PostgreSQL Basics | Create DB, write `schema.sql`, CRUD SQL practice in `psql` | ⬜ |
| Day 4 | Node ↔ PostgreSQL | `pg` Pool, `dotenv`, `.env`, parameterized queries | ⬜ |
| Day 5 | Applications API | 5 endpoints, input validation, test with curl/Postman | ⬜ |
| Day 6 | Interview Notes + Study Logs API | 4 more endpoints, foreign keys in practice | ⬜ |
| Day 7 | Stats Endpoint | `COUNT`, `GROUP BY`, `LEFT JOIN`, stats formula queries | ⬜ |
| Day 8 | Frontend Architecture | `api.js` fetch wrappers, SPA navigation, `app.js` state | ⬜ |
| Day 9 | Dashboard Page | Stat cards, Chart.js bar chart, follow-up list, activity timeline | ⬜ |
| Day 10 | Applications Page | List, add, edit, delete, filter, search, follow-up badge | ⬜ |
| Day 11 | Study Log + Interview Notes + Polish | Study log page, notes in detail view, empty/loading states, responsive | ⬜ |
| Day 12 | Testing + Deployment | End-to-end test, Render.com deploy, README, final push | ⬜ |

---

## 3. Live Student Profile (Updated After Each Day)

> This section describes Tejas as he actually is, not as he was described at the start. Update after each day.

**Last updated:** End of Day 1 (2026-08-29)

### Identity
- **Name:** Tejas Gosavi
- **OS:** Ubuntu 24.04.4 LTS
- **Learning style:** Builds real things, understands best when he can run code and see output. Very self-driven — iterates on his own without being pushed.

### Skill Assessment (Updated After Day 1)

| Skill | Pre-Day-1 Assessment | Post-Day-1 Reality |
|---|---|---|
| `let`/`const`/`var` | Rusty | **Solid.** Understood immediately, applied correctly. |
| Arrow functions | Rusty | **Solid.** Got implicit return, single-param shorthand. |
| Template literals | Rusty | **Good.** Self-corrected backtick vs quote error without help. |
| Objects + destructuring | Rusty | **Good.** Minor variable naming confusion, self-resolved. |
| Array methods (`map/filter/reduce/find/forEach`) | Needed revision | **Strong.** All 5 correct on first attempt after seeing syntax. Invented `filter().map()` chaining independently. |
| Method chaining | Unknown | **Surprising strength.** Asked the right question and solved it himself. |
| `async`/`await` + `fetch()` | Conceptual, no practice | **Good.** Correct structure, double-await, try/catch included. |
| Self-debugging | Unknown | **Strong instinct.** Fixed all errors independently before asking for help. |
| SQL | Has written JOINs before | Not tested yet. |
| Node.js / Express | Not started | Not started. |

### Behavioral Patterns (Observed)
- ✅ **Self-corrects before asking** — rarely waits for help, tries things first.
- ✅ **Asks curious "what if" questions** — e.g. invented the `filter().map()` question himself — shows genuine curiosity, not just task completion.
- ✅ **Archives his work** — created `backup.js` to save commented history. Organized mindset.
- ✅ **Iterates on output format** — not satisfied with `Leanne Graham Sincere@april.biz`, fixed the comma. Attention to detail.
- ⚠️ **Occasionally names variables wrong** — confused `company` (destructured string) with `job` (the object). Watch for this when destructuring + mutation happen together.
- ⚠️ **Light on semicolons** — inconsistent. Not a bug risk in Node, but worth building the habit.

### Teaching Calibration (Agent: read this before planning your session)
- **Pace:** Faster than the plan assumed. Day 1 content absorbed in ~1 working session. Do not slow down unnecessarily.
- **Analogies first:** Always do analogy → syntax → practice. He responds very well to this order.
- **Proactively give syntax templates:** He asked for them during Day 1 ("how do I write map() without knowing syntax?"). Don't make him guess from zero — give the skeleton, let him fill it in.
- **Predict-before-run:** He engages strongly when asked "what do you expect the output to be before running?" Keep using this.
- **Don't pad sessions:** He moves fast and prefers forward momentum. Keep energy up.

---

## 4. Daily Reports

---

### ✅ DAY 1 — 2026-08-28 | JS Revision

**Duration:** Split across two sub-sessions (morning of Day 1 + morning of Day 2)
**Focus:** JavaScript fundamentals revision

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| `let`/`const`/`var` | ✅ | Perfect understanding, including the const TypeError |
| Arrow functions (syntax + implicit return) | ✅ | Got it on first explanation |
| Objects (dot access, add key, destructuring) | ✅ | Minor variable naming confusion, self-resolved |
| `forEach`, `map`, `filter`, `find`, `reduce` | ✅ | All 5 correct |
| Method chaining `filter().map()` | ✅ (bonus) | Not in plan — student discovered it himself |
| `async`/`await` + `fetch()` (single user) | ✅ | Textbook correct structure |
| `fetch()` a list + apply array methods on real API data | ✅ | Final exercise — nailed it |

#### Code Written Today (archived to `Practice/backup.js`)

```js
// const/let
const name = "Tejas"; let city = "Mumbai"; city = "Pune";

// Arrow functions
const greet = name => `Hello, ${name}`;
const square = n => n ** 2;
const isAdult = age => age >= 18;

// Objects
const job = { company: "Purnaswad", role: "AI Engineer", platform: "Careers Page", status: "Assessment done" }
job.dateApplied = "25 Aug 2026"
const { company, status } = job;

// Array methods (on a mock applications array)
applications.forEach(item => console.log(item.company))
applications.map(item => item.company)
applications.filter(item => item.status === "Applied")
applications.find(item => item.role === "Frontend")
applications.reduce((acc, item) => acc + item.salary, 0)  // → 133
applications.filter(item => item.role === "Frontend").map(item => item.company)  // self-discovered chaining

// async/await + fetch (JSONPlaceholder)
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const userNames = data.map(item => item.name);
        const filteredUsers = data.filter(item => item.website.includes(".com")).map(item => item.name);
    } catch(e) {
        console.log(`Error: ${e}`);
    }
}
```

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `` `Hello, {name}` `` — no `$` | Used `""` instead of backticks | ✅ Yes |
| `company.dateApplied = ...` | Confused destructured `company` (string) with the object `job` | ✅ Yes |
| `company[dateApplied]` | Bracket notation needs string key `"dateApplied"` | ✅ Yes |
| `console.log(company)` inside forEach | Used outer var instead of callback param `item.company` | ✅ Yes |
| `$${e}` in catch block | Typo — double dollar sign | ❌ Caught by tutor |

#### Assessment Summary
- **Verdict:** Not rusty — just needed one warm-up session. Significantly ahead of starting profile.
- **Strongest area:** Self-debugging and array method chaining.
- **Watch area:** Variable naming discipline when destructuring + mutation are combined.

#### Tutor Notes for Day 2
- No remediation needed. Student is fully ready.
- Open Day 2 by connecting today's `fetch()` to the backend: "You called someone else's API today. Tomorrow you'll **build** the API your own frontend will call."
- Confirm GitHub repo `huntflow` exists and is empty/uninitialized before `npm init`.
- Go methodically through: `npm init` → install Express → `server.js` → test → HTML → CSS → static files → Git → GitHub push.
- Reinforce semicolon habit gently during `server.js` writing.
- Expect him to move fast through the setup steps — be ready to move to HTML/CSS quickly.

---

### ✅ DAY 2 — 2026-08-29/30 | Project Setup

**Duration:** Split across two sub-sessions (Day 2 start + Day 3 morning due to lost chat)
**Focus:** Express server setup, static HTML/CSS, Git + GitHub

> **Note for next agent:** Day 2 was split across two IDE sessions. The first session (Day 2 evening) completed npm init through index.html. The second session (Day 3 morning, new chat — previous chat was lost due to IDE timeout) completed style.css and the final GitHub push. All Day 2 goals are fully achieved.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| `npm init` | ✅ | `package.json` created correctly |
| `npm install express` | ✅ | Express `^5.2.1` installed, `node_modules/` present |
| Create `server.js` | ✅ | `app.use(express.static('public'))` + `app.listen(3000)` |
| Run server + test in browser | ✅ | `node server.js` → `localhost:3000` confirmed working |
| Create `public/index.html` | ✅ | 3-section SPA: nav + Dashboard/Applications/Study Log sections |
| Create `public/css/style.css` | ✅ | Full CSS — variables, reset, Flexbox nav, section cards |
| `app.use(express.static('public'))` | ✅ | Student wrote this independently after analogy explanation |
| Verify HTML at `localhost:3000` | ✅ | Confirmed loading with all styles applied |
| `.gitignore` | ✅ | `node_modules/` and `.env` excluded |
| Commit + GitHub push | ✅ | Commit `c6efbba` pushed to `origin/main` |

#### Final File State

**`server.js`:**
```js
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Starting the server on port 3000");
});
```

**`public/index.html`:** 3-section SPA with `<nav>`, `<main>`, and 3 `<section>` elements. Nav links call `showPage('dashboard')` etc (JS not yet wired — that's Day 8). Stylesheet linked at `./css/style.css`.

**`public/css/style.css` — Full CSS written:**
- `:root` block with 5 CSS custom properties (`--bg`, `--surface`, `--accent`, `--text`, `--muted`)
- Universal reset (`* { margin, padding, box-sizing }`)
- `body` with font-family + CSS variable references
- `nav` — Flexbox, `justify-content: space-between`, `align-items: center`, indigo accent background
- `nav h1` — white, 1.4rem (descendant selector, not global `h1`)
- `ul` — `list-style: none`, `display: flex`, `gap: 2rem`
- `nav a` — `text-decoration: none`, `color: white`, `font-weight: 500`
- `nav a:hover` — `opacity: 0.75`
- `main` — `padding: 2rem`
- `section` — white card with `border-radius`, `box-shadow`, `padding`

#### CSS Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| CSS custom properties (`:root`, `--var`, `var()`) | ✅ | Wrote the `:root` block independently after seeing the pattern |
| Universal reset | ✅ | Understood why `margin/padding: 0` removes browser defaults |
| Flexbox (`display: flex`, `justify-content`, `align-items`, `gap`) | ✅ | Immediately saw the nav transform into horizontal layout |
| Descendant selectors (`nav h1`, `nav a`) | ✅ | Understood class-vs-semantic distinction, self-corrected `h1` → `nav h1` |
| Pseudo-classes (`:hover`, `:root`) | ✅ | New concept — understood purpose clearly |
| `box-shadow` shorthand | ✅ | Explained and given directly (polish concept) |
| `express.static()` + `app.use()` | ✅ | Student wrote it independently after the "security guard" analogy |

#### Behavioral Patterns (New Observations)
- ✅ **Proactive semicolons** — added semicolon to `express.static` line on own, no prompt needed. Habit forming.
- ✅ **Quick concept transfer** — corrected `h1` → `nav h1` immediately on first explanation of descendant selectors.
- ✅ **Context-aware questions** — asked about class-based vs element-selector approach, showing genuine understanding of what was different from his prior knowledge.
- ✅ **IDE fluency** — ran all 4 git commands independently in correct order without guidance.

#### Errors Made

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `h1 { color: white }` too broad | Didn't think about future h1 elements outside nav | ✅ Fixed to `nav h1` immediately on explanation |

#### Assessment
- **Verdict:** Smooth session. All 10 Day 2 goals hit. Student absorbed Express middleware, CSS architecture, and Git workflow with minimal friction.
- **Strongest area:** Independent execution — wrote `express.static`, the `:root` block, and all nav CSS rulesets himself.
- **CSS prior knowledge:** Was class-based, now understands semantic/descendant selectors and when to use which.

#### Tutor Notes for Day 3
- No remediation needed. Student is fully ready for PostgreSQL.
- Day 3 agenda: `psql` intro → create `huntflow` database → write `db/schema.sql` (all 3 tables) → practice INSERT/SELECT/UPDATE/DELETE in psql.
- Open Day 3 by bridging: "Yesterday you built the server. Today you're building the database it will eventually talk to."
- Student has written JOINs before — expect faster pace on SELECT queries. Push toward WHERE, LIMIT, ORDER BY.
- The `showPage()` JS function in `index.html` is a forward stub — it's intentionally unwired until Day 8. Do NOT address it on Day 3.
- Git workflow is now fluent — no need to re-explain `add/commit/push`.

---

### ⬜ DAY 3 — 2026-08-30 | PostgreSQL Basics

> **To be filled at end of Day 3.**

**Planned Goals:**
1. Intro to relational DBs — tables, rows, columns, keys, constraints
2. Connect to PostgreSQL with `psql` as user `postgres`
3. `CREATE DATABASE huntflow;` and `\c huntflow` to connect
4. Write and execute `db/schema.sql` (all 3 tables from spec)
5. Practice 5+ INSERT/SELECT/UPDATE/DELETE queries manually in psql

---

### ⬜ DAY 4 — 2026-08-31 | Node.js ↔ PostgreSQL

> **To be filled at end of Day 4.**

---

### ⬜ DAY 5 — 2026-09-01 | Applications API (CRUD)

> **To be filled at end of Day 5.**

---

### ⬜ DAY 6 — 2026-09-02 | Interview Notes + Study Logs API

> **To be filled at end of Day 6.**

---

### ⬜ DAY 7 — 2026-09-03 | Stats Endpoint + SQL Aggregations

> **To be filled at end of Day 7.**

---

### ⬜ DAY 8 — 2026-09-04 | Frontend Architecture + API Layer

> **To be filled at end of Day 8.**

---

### ⬜ DAY 9 — 2026-09-05 | Dashboard Page

> **To be filled at end of Day 9.**

---

### ⬜ DAY 10 — 2026-09-06 | Applications Page

> **To be filled at end of Day 10.**

---

### ⬜ DAY 11 — 2026-09-07 | Study Log + Interview Notes + Polish

> **To be filled at end of Day 11.**

---

### ⬜ DAY 12 — 2026-09-08 | Testing + Deployment

> **To be filled at end of Day 12.**

---

*Last updated: 2026-08-30 | End of Day 2*
