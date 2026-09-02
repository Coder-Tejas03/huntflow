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
| Day 3 | PostgreSQL Basics | Create DB, write `schema.sql`, CRUD SQL practice in `psql` | ✅ COMPLETE |
| Day 5 | Applications API | 5 endpoints, input validation, test with curl/Postman | ✅ COMPLETE |
| Day 6 | Interview Notes + Study Logs API | 4 more endpoints, foreign keys in practice | ✅ COMPLETE |
| Day 7 | Stats Endpoint | `COUNT`, `GROUP BY`, `LEFT JOIN`, stats formula queries | ✅ COMPLETE |
| Day 8 | Frontend Architecture | `api.js` fetch wrappers, SPA navigation, `app.js` state | ✅ COMPLETE |
| Day 9 | Dashboard Page | Stat cards, Chart.js bar chart, follow-up list, activity timeline | ⬜ |
| Day 10 | Applications Page | List, add, edit, delete, filter, search, follow-up badge | ⬜ |
| Day 11 | Study Log + Interview Notes + Polish | Study log page, notes in detail view, empty/loading states, responsive | ⬜ |
| Day 12 | Testing + Deployment | End-to-end test, Render.com deploy, README, final push | ⬜ |

---

## 3. Live Student Profile (Updated After Each Day)

> This section describes Tejas as he actually is, not as he was described at the start. Update after each day.

**Last updated:** End of Day 5 (2026-08-31)

### Identity
- **Name:** Tejas Gosavi
- **OS:** Ubuntu 24.04.4 LTS
- **Learning style:** Builds real things, understands best when he can run code and see output. Very self-driven — iterates on his own without being pushed.

### Skill Assessment (Updated After Day 5)

| Skill | Pre-Day-1 Assessment | Post-Day-5 Reality |
|---|---|---|
| `let`/`const`/`var` | Rusty | **Solid.** Understood immediately, applied correctly. |
| Arrow functions | Rusty | **Solid.** Got implicit return, single-param shorthand. |
| Template literals | Rusty | **Solid.** Mastered dynamic string building and SQL ILIKE interpolation (`%${search}%`). |
| Objects + destructuring | Rusty | **Strong.** Destructures `req.params`, `req.query`, and `req.body` effortlessly. |
| Array methods (`map/filter/reduce/find/forEach`) | Needed revision | **Strong.** All 5 correct on first attempt after seeing syntax. Invented `filter().map()` chaining independently. |
| Method chaining | Unknown | **Surprising strength.** Asked the right question and solved it himself. |
| `async`/`await` + `fetch()` | Conceptual, no practice | **Good.** Correct structure, double-await, try/catch included. |
| Self-debugging | Unknown | **Exceptional.** Self-isolated and resolved typos in SQL function names, route parameter prefixes (`/:id`), and dynamic template strings. |
| SQL & Schema Design | Has written JOINs before | **Solid.** Grasped DB vs Table mental models, primary/foreign keys, `ON DELETE CASCADE` (no orphan records), `CHECK` constraints, and all CRUD operations (`INSERT ... RETURNING *`, `SELECT` with `WHERE/ORDER BY/LIMIT`, `UPDATE` with `COALESCE`, `DELETE`). |
| Node.js / Express & REST APIs | Not started | **Strong.** Modular architecture (`routes/` + `controllers/` + `config/`), `express.json()` middleware, request parsing (`req.query`, `req.params`, `req.body`), HTTP status codes (`200`, `201`, `400`, `404`, `500`), and dynamic parameterized query construction. |

### Behavioral Patterns (Observed)
- ✅ **Deep architectural curiosity** — Traced the complete lifecycle of request data across 5 distinct scenarios and deduced dynamic query building array mechanics independently.
- ✅ **Self-corrects before asking** — rarely waits for help, tries things first, and inspects error stacks/terminal headers.
- ✅ **Asks curious "what if" questions** — e.g. questioned SQL semicolon rules, missing record return shapes, and array counter mechanics.
- ✅ **Archives & tests thoroughly** — rigorously tests both happy paths and edge cases (400 validation, 404 missing ID).
- ⚠️ **Route parameter prefix watch** — remember Express route params require leading colon (`/:id`).

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

### ✅ DAY 3 — 2026-08-30 | PostgreSQL Basics

**Duration:** ~3 hours
**Focus:** PostgreSQL concepts, `psql` shell, schema design with constraints, foreign keys, and SQL CRUD operations.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| Relational DB mental model | ✅ | Understood tables, rows, columns, primary/foreign keys, and constraints |
| Connect to PostgreSQL with `psql` | ✅ | Learned meta-commands (`\l`, `\c`, `\dt`, `\q`) vs SQL queries |
| `CREATE DATABASE huntflow;` | ✅ | Created DB and switched context with `\c huntflow` |
| Write `db/schema.sql` (3 tables) | ✅ | All 3 tables created (`applications`, `interview_notes`, `study_logs`) with `CHECK`, `NOT NULL`, `DEFAULT`, and `ON DELETE CASCADE` |
| Execute `schema.sql` in `psql` | ✅ | `\i db/schema.sql` ran cleanly with 0 errors |
| Practice INSERT queries | ✅ | Used `RETURNING *`, tested default values and intentional `CHECK` violation |
| Practice SELECT queries | ✅ | Projections, `WHERE`, multi-condition `AND`, `ORDER BY`, `LIMIT` |
| Practice UPDATE queries | ✅ | Single & multi-column updates with `CURRENT_TIMESTAMP` |
| Practice DELETE & CASCADE | ✅ | Deleted parent application and verified 0 ghost rows in `interview_notes` |
| Git commit | ✅ | Committed `44a5a02` (`db/schema.sql`) |

#### Final File State

**`db/schema.sql`:**
```sql
DROP TABLE IF EXISTS interview_notes;
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS study_logs;

CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    platform VARCHAR(255) NOT NULL CHECK (platform IN ('NxtWave', 'Naukri', 'LinkedIn', 'Indeed', 'Wellfound', 'Instahyre', 'Company Website', 'Referral', 'Other')),
    job_link TEXT,
    date_applied DATE NOT NULL DEFAULT CURRENT_DATE,
    status VARCHAR(30) NOT NULL DEFAULT 'Applied' CHECK (status IN ('Applied', 'Online Assessment', 'Mock Interview', 'Interview Round 1', 'Interview Round 2', 'Interview Round 3', 'Offer', 'Rejected', 'Withdrawn')),
    salary_offered VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE interview_notes(
    id SERIAL PRIMARY KEY,
    application_id INTEGER NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    round_number INTEGER NOT NULL,
    note_date DATE NOT NULL DEFAULT CURRENT_DATE,
    questions_asked TEXT NOT NULL,
    my_answers TEXT,
    to_revise TEXT,
    how_it_went TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE study_logs(
    id SERIAL PRIMARY KEY,
    log_date DATE NOT NULL DEFAULT CURRENT_DATE,
    topic VARCHAR(255) NOT NULL,
    hours_spent DECIMAL(4,1) NOT NULL CHECK (hours_spent > 0),
    what_i_learned TEXT,
    project_worked_on VARCHAR(255),
    confidence_level INTEGER CHECK (confidence_level BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### SQL Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| Tables, Rows, Columns | ✅ | Clear mental model: Database = Cabinet, Table = Drawer, Row = Record, Column = Field |
| Primary Key (`SERIAL PRIMARY KEY`) | ✅ | Auto-incrementing unique identifier |
| Foreign Key + `ON DELETE CASCADE` | ✅ | Student coined the term "no ghosts in the application" — verified live |
| `CHECK` constraints | ✅ | Proved constraint enforcement by attempting invalid platform input |
| `psql` meta-commands vs SQL | ✅ | Backslash commands (`\l`, `\c`, `\i`, `\dt`, `\q`) vs SQL statements ending in `;` |
| `RETURNING *` | ✅ | Learned how Postgres immediately returns created/updated records |
| SQL Quotes (`'string'` vs `"ident"`) | ✅ | Self-debugged double-quote vs single-quote error in `WHERE` clause |
| SQL Operators (`=` vs `===`) | ✅ | Self-corrected JavaScript equality to SQL single `=` |
| SQL Comma rules in `UPDATE` | ✅ | Grasped the "English list" rule: commas separate assignments, never trail before `WHERE` |

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `/l` in `psql` | Used forward slash instead of backslash `\l` | ✅ Yes |
| `WHERE status = "Applied"` | Used double quotes (identifiers) instead of single quotes (strings) | ✅ Yes |
| `WHERE status == 'Applied'` | Used JavaScript equality `==` instead of SQL `=` | ✅ Yes |
| Trailing comma before `WHERE` in `UPDATE` | Treated comma as statement separator rather than list item separator | ✅ Explained & mastered |
| Repeating `SET` in multi-column `UPDATE` | Repeated keyword `SET` instead of comma-separated column list | ✅ Explained & mastered |

#### Assessment
- **Verdict:** Highly productive session. Student mastered database schema definition, referential integrity, and SQL CRUD queries with strong intuitive understanding.
- **Strongest area:** Conceptual understanding of relational models & cascade behaviors ("no ghosts").
- **Watch area for Day 4:** When transitioning to Node.js parameterized queries (`$1`, `$2`), remember that SQL queries passed to `pool.query()` follow these exact same SQL rules.

#### Tutor Notes for Day 4
- Open Day 4 by connecting Day 2 and Day 3: "On Day 2 we built the server. On Day 3 we built the database. Today we build the bridge connecting the two using the `pg` library."
- Agenda: Install `pg` & `dotenv` → create `src/config/db.js` with `Pool` → set up `.env` with `DATABASE_URL` → write first parameterized query in Node.js → test reading from `applications`.
- Emphasize parameterized queries (`$1`, `$2`) to prevent SQL injection.

---

### ✅ DAY 4 — 2026-08-31 | Node.js ↔ PostgreSQL

**Duration:** ~1.5 hours
**Focus:** Connecting Node.js Express backend to PostgreSQL using `pg` (node-postgres), environment variables with `dotenv`, connection pooling mental model, SQL injection defense, and parameterized queries.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| Install `pg` & `dotenv` | ✅ | Packages installed in `package.json` |
| Set up `.env` & verify `.gitignore` | ✅ | `DATABASE_URL` and `PORT` defined; `.env` excluded from git |
| Connection Pooling mental model | ✅ | Understood "Waiter Pool" analogy vs per-request connections |
| Create `src/config/db.js` | ✅ | Created modular `pg.Pool` instance connected to `process.env.DATABASE_URL` |
| Understand SQL Injection & Defense | ✅ | Grasped why string interpolation is vulnerable and how parameterized queries (`$1`, `$2`) treat input as literal data |
| Test live Node.js ↔ PostgreSQL query | ✅ | Successfully fetched rows from `applications` table created on Day 3 |
| Understand query result shapes & 0-row handling | ✅ | Analyzed `result.rows` array, `rowCount`, non-guaranteed SQL default ordering, and empty array `[]` on missing IDs |
| Git commit & push | ✅ | Committed Day 4 code |

#### Files Created / Modified

- `src/config/db.js` — Database connection pool configuration
- `.env` — Environment configuration for local PostgreSQL
- `package.json` — Added `pg` and `dotenv` dependencies
- `test-db.js` — Test script for validating live database queries

#### Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| Environment Variables (`dotenv`) | ✅ | Secure configuration outside version control |
| Connection Pool (`pg.Pool`) | ✅ | Reusable database connections to eliminate connection overhead |
| Parameterized Queries (`$1`, `$2`) | ✅ | Safe passing of query arguments to prevent SQL injection |
| Query Result Structure | ✅ | `result.rows` as an array of JS objects, `result.rowCount` |
| SQL Default Ordering | ✅ | Learned why SQL tables are unordered bags of data unless `ORDER BY` is specified |
| Missing Record Handling | ✅ | Observed that non-existent IDs return `[]` without erroring |

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `mkdir: cannot create directory 'src/config'` | Missing parent directory flag | ✅ Fixed with `mkdir -p` |
| `Cannot find module '.src/config/db'` | Typo in relative path `./src/config/db` | ✅ Self-fixed |
| `password authentication failed for user "postgres"` | Default peer authentication on Ubuntu Linux | ✅ Fixed by setting password via `ALTER USER postgres PASSWORD 'postgres';` |

#### Assessment
- **Verdict:** Flawless transition from SQL basics to Node.js database integration.
- **Strongest area:** Deep curiosity and deduction — independently observed and questioned array format, SQL physical row ordering, and missing record return shapes.
- **Watch area for Day 5:** When building Express routes and controllers, remember to map `req.params`, `req.query`, and `req.body` into parameterized query values arrays.

#### Tutor Notes for Day 5
- Open Day 5 by connecting Day 4 and Day 5: "Yesterday you built the database connection module. Today we build the full Applications REST API (all 5 CRUD endpoints) on top of it!"
- Agenda: Create `src/routes/applications.js` and `src/controllers/applicationsController.js` → implement `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` → input validation → test with curl / REST client.

---

### ✅ DAY 5 — 2026-08-31 | Applications API (CRUD)

**Duration:** ~2.5 hours
**Focus:** Building the complete Applications CRUD REST API with Express Router, controller modularization, query parameter filtering, route parameters, JSON body parsing, input validation, and HTTP status codes.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| Architecture Setup (`express.json()`, `routes/`, `controllers/`) | ✅ | Clean separation of concerns (Server $\rightarrow$ Route $\rightarrow$ Controller $\rightarrow$ Database) |
| `GET /api/v1/applications` (List + Filters) | ✅ | Dynamic query generation supporting `?status`, `?platform`, and `?search` with `ILIKE` |
| `GET /api/v1/applications/:id` (Get Single) | ✅ | Extracted `req.params.id`, handled `404 Not Found` for missing IDs |
| `POST /api/v1/applications` (Create) | ✅ | Validated required fields (`400 Bad Request`), executed `INSERT ... RETURNING *`, returned `201 Created` |
| `PUT /api/v1/applications/:id` (Update) | ✅ | Partial updates using `COALESCE`, refreshed `updated_at = CURRENT_TIMESTAMP`, handled `404` |
| `DELETE /api/v1/applications/:id` (Delete) | ✅ | Executed parameterized `DELETE`, verified cascade integrity and `404` on subsequent delete |
| REST API Testing via `curl` | ✅ | Tested all 5 endpoints for both happy paths and edge cases (400, 404, 500) |

#### Files Created / Modified

- `server.js` — Mounted `express.json()` and `/api/v1/applications` router
- `src/routes/applications.js` — Express Router mapping HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) to controller methods
- `src/controllers/applicationsController.js` — Complete CRUD business logic with parameterized SQL queries and error handling

#### Key Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| Router vs Controller Pattern | ✅ | Routes define endpoints & verbs; Controllers handle business logic and DB communication |
| `express.json()` Middleware | ✅ | Acts as the JSON translator, parsing raw request streams into `req.body` |
| Data Sources (`query`, `params`, `body`) | ✅ | `req.query` for search/filter query strings, `req.params` for URL route variables, `req.body` for payloads |
| Dynamic SQL Query Construction | ✅ | Dynamically assembled `WHERE` clauses with `conditions.join(' AND ')` and dynamic `$n` indices |
| HTTP Status Codes | ✅ | `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error` |
| Partial Updates with `COALESCE` | ✅ | `COALESCE($1, column)` preserves existing database values when fields are omitted in `PUT` |

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `%{search}%` in template literal | Omitted `$` in `${search}`, searching for literal `%{search}%` | ✅ Yes |
| `function coalsesce(...) does not exist` | Typo in SQL keyword `COALESCE` | ✅ Yes |
| `Cannot DELETE /api/v1/applications/5` (HTML 404) | Missing colon in route definition (`/id` instead of `/:id`) | ✅ Yes |

#### Assessment
- **Verdict:** Mastered REST API architecture and Express CRUD development with excellent debugging skills.
- **Strongest area:** Deep conceptual curiosity — deduced dynamic query formation across 5 test cases and understood parameter array mechanics.
- **Watch area for Day 6:** When building Interview Notes and Study Logs APIs, apply the same route-controller pattern and remember the foreign key linkage (`application_id`).

#### Tutor Notes for Day 6
- Open Day 6 by connecting Applications with Interview Notes & Study Logs: "Yesterday you built the parent Applications API. Today we build the child Interview Notes API (foreign key relationship) and the standalone Study Logs API!"
- Agenda: Create `src/routes/interviewNotes.js` & `src/controllers/interviewNotesController.js` $\rightarrow$ create `src/routes/studyLogs.js` & `src/controllers/studyLogsController.js` $\rightarrow$ test all 8 new endpoints with `curl`.

---

### ✅ DAY 6 — 2026-09-01 | Interview Notes + Study Logs API

**Duration:** ~8 hours
**Focus:** Building the Interview Notes API (child resource with foreign key) and the Study Logs API (standalone resource). 8 new endpoints, modular route/controller architecture, REST URL design for parent-child relationships, and comprehensive `curl` testing.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| Mental model: Parent-Child REST URL design | ✅ | Understood `/applications/:id/notes` (scoped to parent) vs `/notes/:id` (direct by note ID) |
| `GET /api/v1/applications/:id/notes` | ✅ | Parameterized query on `interview_notes` where `application_id = $1`, ordered by `round_number ASC` |
| `POST /api/v1/applications/:id/notes` | ✅ | `application_id` from `req.params`, note fields from `req.body`, `INSERT ... RETURNING *`, returns `201` |
| `PUT /api/v1/notes/:id` | ✅ | Full `COALESCE` partial-update pattern, `WHERE id = $7`, `404` handling |
| `DELETE /api/v1/notes/:id` | ✅ | Parameterized `DELETE ... RETURNING *`, `404` on missing note |
| `GET /api/v1/study-logs` | ✅ | Optional `?date` filter on `log_date`, `ORDER BY log_date DESC, created_at DESC` |
| `POST /api/v1/study-logs` | ✅ | Required fields (`topic`, `hours_spent`) validated, server-managed `created_at` excluded from user input |
| `PUT /api/v1/study-logs/:id` | ✅ | `COALESCE` partial updates, correct `$7` -> `id` param index after removing `created_at` |
| `DELETE /api/v1/study-logs/:id` | ✅ | Clean delete with confirmation message |
| Route files + `module.exports` for both routers | ✅ | Correct nested paths in router (`/applications/:id/notes`, `/notes/:id`, `/study-logs`, `/study-logs/:id`) |
| Mount both routers in `server.js` at `/api/v1` | ✅ | Both routers mounted cleanly alongside existing applications router |
| Git commit + push to GitHub | ✅ | Commit `5ff1b0e` — 6 files changed, 296 insertions |

#### Files Created / Modified

- `src/controllers/interviewNotesController.js` — 4 functions: `getNotesByApplicationId`, `createNote`, `updateNote`, `deleteNote`
- `src/controllers/studyLogsController.js` — 4 functions: `getAllStudyLogs`, `createStudyLog`, `updateStudyLog`, `deleteStudyLog`
- `src/routes/interviewNotes.js` — Router mapping 4 HTTP verb/path combinations to controller methods
- `src/routes/studyLogs.js` — Router mapping 4 HTTP verb/path combinations to controller methods
- `server.js` — Mounted both new routers under `/api/v1`

#### Key Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| Parent-Child REST URL design | ✅ | `/applications/:id/notes` addresses the parent's collection; `/notes/:id` addresses the child directly. `req.params.id` means different things in each route. |
| `INSERT` never has a `WHERE` clause | ✅ | Foreign key (`application_id`) is a column in the `INSERT` list, not a `WHERE` filter — student initially wrote `WHERE application_id = $7` on an `INSERT`. |
| Empty array `[]` is not a `404` | ✅ | `GET /applications/99999/notes` returns `200 []`. An application can legitimately have 0 notes. Only missing resources deserve `404`. |
| Server-managed fields (`created_at`) must never come from `req.body` | ✅ | Auto-timestamp columns are PostgreSQL's responsibility. Accepting them from clients is a data integrity risk. |
| `||` vs `&&` in validation guards | ✅ | `!a && !b` only catches when both are missing. `!a || !b` correctly catches when either is missing. |
| `return` before error responses | ✅ | Without `return`, Express would attempt to send two responses and crash with `ERR_HTTP_HEADERS_SENT`. |
| Consistent JSON error shape | ✅ | All error responses wrapped in `{ error: "..." }` object, not plain strings. |
| Debugging with correct resource ID | ✅ | PUT/DELETE tests failed with `404` because note ID `1` didn't exist — the created note was ID `2`. Student recognised this independently with one hint. |

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `SELECT interview_notes FROM applications WHERE id = $1` | Confused table name with column name; queried wrong table entirely | ❌ Caught by tutor |
| `404` when 0 notes returned | Misapplied "missing record" rule to empty collections | ❌ Caught by tutor |
| `INSERT INTO interview_notes ... WHERE application_id = $7` | Applied `WHERE` clause to an `INSERT` statement — SQL syntax error | ❌ Caught by tutor |
| `!round_number && !questions_asked` | Used `&&` instead of `||` in validation guard | ❌ Caught by tutor |
| `query = ...` without `const` | Forgot `const` declaration — variable leaked to global scope | ❌ Caught by tutor |
| `const deleteNote = async (res, req) =>` | Classic `res`/`req` parameter swap — entire function was broken | ❌ Caught by tutor |
| `res.status(404).json("Note not found")` | Plain string instead of `{ error: "..." }` JSON object | ❌ Caught by tutor |
| `conditions.push('date = $...')` | Wrong column name — column is `log_date`, not `date` | ❌ Caught by tutor |
| `created_at` accepted from `req.body` | Exposing server-managed field to client override | ❌ Caught by tutor |
| `const { route } = require('./interviewNotes')` | Accidental phantom import left in `studyLogs.js` | ❌ Caught by tutor |
| `PUT /notes/1` returned `404` | Note was created with ID `2` not `1` — used wrong ID in test | ✅ Self-resolved with one hint |

#### Assessment
- **Verdict:** Strongest session of the marathon. Student wrote complete, multi-function controllers independently for the first time, applying the route-controller-database pattern with only guidance, no direct code provision.
- **Strongest area:** Autonomous implementation — picked up the Study Logs API and wrote all 4 functions, the route file, and server mount without prompting. The CRUD pattern is now fully internalised.
- **Watch area for Day 7:** SQL aggregation functions (`COUNT`, `GROUP BY`) and `LEFT JOIN` for the stats endpoint are new territory. Use strong analogies first before writing any SQL.

#### Tutor Notes for Day 7
- Open Day 7 by connecting the full picture: "We now have 13 of 14 API endpoints. Today we build the last one — the Stats endpoint — which powers the entire Dashboard."
- Agenda: Build `GET /api/v1/stats` → teach `COUNT(*)`, `GROUP BY`, response rate / interview rate / offer rate formulas → `LEFT JOIN` for pending follow-ups (applications with no notes, applied > 7 days ago).
- Student has never used `COUNT`, `GROUP BY`, or `LEFT JOIN` in Node.js context — explain in SQL first via `psql`, then move to Node.
- The pending follow-up query (LEFT JOIN + NULL check + date filter) will be the hardest concept of the day. Budget extra time.
- Create `src/routes/stats.js` and `src/controllers/statsController.js`, mount at `/api/v1/stats` in `server.js`.

---

### ✅ DAY 7 — 2026-09-01 | Stats Endpoint + SQL Aggregations

**Duration:** ~2 hours
**Focus:** Building the final `GET /api/v1/stats` endpoint. Taught `COUNT(*)`, `COUNT(column)`, `GROUP BY`, `AS` aliasing, `COUNT(*) FILTER (WHERE ...)`, all three JOIN types, the anti-join (`LEFT JOIN + IS NULL`) pattern, PostgreSQL date arithmetic with `INTERVAL`, and `Promise.all()` for parallel async queries in Node.js.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| Teach `COUNT(*)` vs `COUNT(column)` | ✅ | Student predicted different results correctly before running; understood NULL exclusion |
| Teach `GROUP BY` | ✅ | Ran status + platform breakdowns; independently tested on `salary_offered` without prompting |
| Teach `COUNT(*) FILTER (WHERE ...)` | ✅ | Ran conditional count query; self-caught double-quote error and fixed to single quotes |
| Teach `LEFT JOIN`, `INNER JOIN`, `RIGHT JOIN` | ✅ | Student independently ran all 3 join types in `psql` to compare results — saw `INNER = 0 rows`, `RIGHT = 0 rows`, `LEFT = 2 rows` with `NULL` note_id; articulated the distinction perfectly |
| Teach anti-join (`LEFT JOIN + IS NULL`) | ✅ | Live-tested by backdating Google's `date_applied` — Google appeared in `pendingFollowUps` immediately |
| Design the stats JSON response shape | ✅ | Planned all 5 blocks before writing a single line of Node.js |
| Define rate formulas (response/interview/offer) | ✅ | Understood the math and the division-by-zero risk |
| Create `src/controllers/statsController.js` | ✅ | Wrote all 5 SQL queries, `Promise.all()`, `parseInt()` coercions, rate math with `.toFixed(1)`, and `total > 0` guard independently |
| Create `src/routes/stats.js` | ✅ | Clean 7-line router file |
| Mount stats router in `server.js` | ✅ | 2 lines added correctly |
| Test `GET /api/v1/stats` with `curl \| jq` | ✅ | All 5 response blocks verified correct against live DB data |
| Test `pendingFollowUps` anti-join live | ✅ | Updated `date_applied` in `psql`, re-ran curl, confirmed Google appeared |
| Git commit + push to GitHub | ✅ | Commit `220b5b8` — 3 files changed, 122 insertions |

#### Files Created / Modified

- `src/controllers/statsController.js` — **[NEW]** 1 function `getStats`: 5 parallel SQL queries via `Promise.all()`, `parseInt` coercions, rate formula math, division-by-zero guard, `res.status(200).json()`
- `src/routes/stats.js` — **[NEW]** 1 route: `GET /stats` → `getStats`
- `server.js` — **[MODIFIED]** Mounted `statsRouter` under `/api/v1`

#### Key Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| `COUNT(*)` vs `COUNT(column)` | ✅ | `COUNT(*)` = every row; `COUNT(column)` = only non-NULL values in that column |
| `GROUP BY` | ✅ | "Sort into piles then count each pile" — correctly applied to `status` and `platform`; independently tested on `salary_offered` |
| `AS` aliasing | ✅ | Student explained: "our desired name for that grouping or column we're building" — maps directly to `result.rows[0].total` in Node.js |
| `COUNT(*) FILTER (WHERE ...)` | ✅ | PostgreSQL-specific conditional aggregation — cleaner than `CASE WHEN` |
| `INNER JOIN` | ✅ | Only returns rows where both sides have a match |
| `LEFT JOIN` | ✅ | All rows from left table retained; unmatched right-side = `NULL` |
| `RIGHT JOIN` | ✅ | Correctly identified as redundant with `LEFT JOIN` (swap table order); rarely used in production |
| Anti-join pattern (`LEFT JOIN + IS NULL`) | ✅ | "Find students without a partner" — applied live to find applications with no interview notes |
| `CURRENT_DATE - INTERVAL '7 days'` | ✅ | PostgreSQL relative date arithmetic |
| `Promise.all()` | ✅ | Fires all 5 DB queries simultaneously instead of sequentially — understood the performance benefit |
| `COUNT(*)` returns string in `pg` | ✅ | Used `parseInt(row.total, 10)` on every count field |
| Rate formula + division-by-zero guard | ✅ | `total > 0 ? parseFloat((value / total * 100).toFixed(1)) : 0` |

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `WHERE status = "Offer"` in `FILTER` | Used double quotes (identifiers) instead of single quotes (strings) | ✅ Yes |
| `'Offer` and `'Rejected` — unclosed string literals in `overviewQuery` | Forgot closing single quote before `)` | ✅ Yes (after tutor spotted it) |

#### Behavioral Patterns (New Observations)
- ✅ **Proactive experiment** — independently ran `GROUP BY salary_offered` without being asked; correctly interpreted the `NULL` row in the output.
- ✅ **Scientific method** — independently ran all 3 JOIN types (`INNER`, `RIGHT`, `LEFT`) side-by-side to verify his mental model through comparison.
- ✅ **Proactive error improvement** — upgraded `console.error("Error in getStats")` to `console.error("Error in getStats: ", err.message)` without being told; good debugging instinct.
- ✅ **Strong architectural ownership** — assembled the full `Promise.all()` + rate math + JSON response block correctly on first attempt with only a structural description, no code provided.

#### Assessment
- **Verdict:** Day 7 was the cleanest session of the marathon. Student absorbed 3 new SQL concepts (COUNT, GROUP BY, JOINs) and 2 Node.js patterns (Promise.all, parseInt coercion) with zero architectural mistakes. The backend is now 100% complete — all 14 endpoints built, tested, and pushed.
- **Strongest area:** JOIN comprehension — independently verified all 3 types live in psql, then applied the anti-join pattern correctly in the controller.
- **Error profile:** Only 2 errors today, both quote-related (SQL string vs identifier syntax), both self-caught or self-fixed. Consistent with prior sessions.

#### Tutor Notes for Day 8
- Open Day 8 by connecting the full picture: "The backend is done. Today we wire up the frontend — `public/js/api.js` fetch wrappers for all 14 endpoints, and SPA navigation so clicking the nav actually switches pages."
- Agenda: Create `public/js/api.js` (all 14 `fetch()` wrapper functions) → create `public/js/app.js` (SPA state + `showPage()` function) → wire up nav links in `index.html` → test navigation in the browser.
- Remind student that Day 2's `showPage()` in `index.html` is a forward stub that we deliberately left unwired — today is the day we wire it.
- `api.js` patterns will map directly to his Day 1 `async/await + fetch()` revision — connect that dot explicitly at the start.
- Student may try to build UI too early — keep Day 8 focused on the JS architecture layer; UI comes Day 9+.

---

### ✅ DAY 8 — 2026-09-02 | Frontend Architecture + API Layer

**Duration:** ~8 hours
**Focus:** Building the complete frontend JavaScript architecture — 14 `fetch()` wrapper functions in `api.js`, SPA state management and navigation in `app.js`, wiring `index.html`. Verified live in browser with real database data.

#### Goals vs Achieved

| Goal | Achieved? | Notes |
|---|---|---|
| Mental model: 3-file frontend architecture (`index.html`, `api.js`, `app.js`) | ✅ | Understood "kitchen/floor manager/dining room" analogy immediately |
| Create `public/js/api.js` with all 14 fetch wrappers | ✅ | All 14 functions written independently after first pattern was shown |
| `getApplications(filters)` — `URLSearchParams` query string construction | ✅ | Learned `URLSearchParams`, truthy check on empty string, double guard pattern |
| `getNotesByApplication(applicationId)`, `createNote`, `updateNote`, `deleteNote` | ✅ | Written independently; 2 bugs caught and fixed |
| `getStudyLogs(filters)`, `createStudyLog`, `updateStudyLog`, `deleteStudyLog`, `getStats` | ✅ | Pattern fully internalised; 2 subtle bugs caught and self-fixed |
| Create `public/js/app.js` — state variables | ✅ | `currentPage`, `applications`, `studylogs`, `stats` declared correctly |
| `showPage(pageName)` — SPA show/hide navigation function | ✅ | `querySelectorAll` + `forEach` hide-all, `getElementById(pageName)` show-one |
| Page loader stubs (`loadDashboard`, `loadApplications`, `loadStudyLogs`) | ✅ | Written as async stubs with `console.log` — to be built Days 9-11 |
| `DOMContentLoaded` event listener to initialise with dashboard | ✅ | Understood why it is needed (DOM not available before HTML is parsed) |
| Wire `<script>` tags in `public/index.html` (correct order) | ✅ | `api.js` before `app.js` — student initially reasoned in reverse; understood dependency rule after explanation |
| Browser test: nav clicks switch pages correctly | ✅ | All 3 sections switch cleanly; console logs confirm loaders fire |
| Browser test: `await getStats()` and `await getApplications()` from console | ✅ | Live DB data returned correctly — stats and 2 application rows verified |
| Git commit + push to GitHub | ✅ | Commit `5d5caf7` — 3 files changed, 322 insertions |

#### Files Created / Modified

- `public/js/api.js` — **[NEW]** 14 async `fetch()` wrapper functions (1 per API endpoint), `BASE_URL` constant, `URLSearchParams` for filtered GETs, `try/catch` in every function
- `public/js/app.js` — **[NEW]** 4 state variables, 3 page-loader stubs, `showPage(pageName)`, `DOMContentLoaded` initialisation
- `public/index.html` — **[MODIFIED]** Added `<script src="./js/api.js">` and `<script src="./js/app.js">` before `</body>`

#### Final File State

**`public/js/api.js` — 14 functions (grouped by resource):**
```js
const BASE_URL = '/api/v1';

// Applications (5)
async function getApplication(id) { ... }
async function createApplication(data) { ... }
async function updateApplication(id, data) { ... }
async function deleteApplication(id) { ... }
async function getApplications(filters) {
    let url = `${BASE_URL}/applications`;
    if (filters) {
        const query = new URLSearchParams(filters).toString();
        if (query) { url += `?${query}`; }
    }
    ...
}

// Interview Notes (4)
async function getNotesByApplication(applicationId) { ... }
async function createNote(applicationId, data) { ... }
async function updateNote(id, data) { ... }
async function deleteNote(noteId) { ... }

// Study Logs (4)
async function getStudyLogs(filters) { ... }
async function createStudyLog(data) { ... }
async function updateStudyLog(id, data) { ... }
async function deleteStudyLog(id) { ... }

// Stats (1)
async function getStats() { ... }
```

**`public/js/app.js`:**
```js
let currentPage = 'dashboard';
let applications = [];
let studylogs = [];
let stats = null;

async function loadDashboard() { console.log("Loading Dashboard..."); }
async function loadApplications() { console.log("Loading Applications..."); }
async function loadStudyLogs() { console.log("Loading Study Logs...."); }

function showPage(pageName) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(item => { item.style.display = 'none' });
    const activePage = document.getElementById(pageName);
    if (activePage) { activePage.style.display = 'block'; }
    currentPage = pageName;
    if (pageName === 'dashboard') loadDashboard();
    else if (pageName === 'applications') loadApplications();
    else if (pageName === 'studylog') loadStudyLogs();
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboard');
});
```

#### Key Concepts Learned

| Concept | Understood? | Notes |
|---|---|---|
| `fetch()` GET pattern (no options object) | ✅ | Simple `fetch(url)` → `res.ok` check → `await res.json()` |
| `fetch()` POST/PUT pattern | ✅ | `method`, `headers: { 'Content-Type': 'application/json' }`, `body: JSON.stringify(data)` |
| `fetch()` DELETE pattern | ✅ | `method: 'DELETE'` only — no `body`, no `Content-Type` header needed |
| `URLSearchParams` | ✅ | Converts a plain JS object `{ status: 'Applied' }` to `"status=Applied"` safely with URL encoding |
| Truthy/falsy check on empty string | ✅ | `if (query)` guards against appending `?` when `URLSearchParams({})` returns `""` |
| Browser vs Node.js environments | ✅ | `document` doesn't exist in Node.js — learned this by attempting `node app.js` (got `ReferenceError: document is not defined`) |
| `querySelectorAll` returns a NodeList | ✅ | "Array of live DOM element objects" — each object has `.style`, `.id`, etc. |
| SPA show/hide navigation | ✅ | `forEach` to hide all, `getElementById(pageName)` to show one |
| `document.getElementById(pageName)` — dynamic lookup | ✅ | Understood that `pageName` string must match the HTML `id` attribute exactly |
| `DOMContentLoaded` event | ✅ | "Wait until all HTML tags are in memory before running JS that touches the DOM" |
| Script loading order — the Dependency Rule | ✅ | Toolmaker (`api.js`) must load before the person who uses tools (`app.js`). Initially intuited the opposite — understood the constraint clearly after explanation |
| `currentPage` state tracking | ✅ | Must store the string name `pageName`, not the DOM element `activePage` |

#### Errors Made (Learning Points)

| Error | Root Cause | Self-Fixed? |
|---|---|---|
| `Content-Type` header on `deleteApplication` | DELETE has no body — `Content-Type` is meaningless without a payload | ✅ Yes, on explanation |
| Missing semicolon on `return await res.json()` in `deleteApplication` | Syntax inconsistency | ✅ Yes |
| Space in URL: `` url += ` ?${query}` `` (space before `?`) | Typo inside template literal — space encodes to `%20` and breaks route | ✅ Yes, on tutor flag |
| `createNote`: used `${id}` instead of `${applicationId}` in URL | Parameter name mismatch — function param was `applicationId` not `id` | ❌ Caught by tutor |
| `createNote`: `data: JSON.stringify(data)` instead of `body:` | Confused `fetch` API with Axios (which uses `data:`). Native `fetch` uses `body:` | ❌ Caught by tutor |
| `updateNote`: `data: JSON.stringify(date)` — two bugs in one line | Both wrong key (`data` vs `body`) and typo in arg name (`date` vs `data`) | ❌ Caught by tutor |
| `getStudyLogs`: `.toString` without `()` | Referenced function definition instead of calling it — `query` held a function object, not a string | ❌ Caught by tutor (self-fixed after hint) |
| `getStudyLogs`: `fetch()` placed inside `if (filters)` block | Structural error — if no filters passed, function would return `undefined` with no network request | ❌ Caught by tutor (self-fixed after hint) |
| `showPage(dashboard)` — parameter hardcoded as `dashboard` | Named parameter `dashboard` instead of generic `pageName`; hardcoded `getElementById('dashboard')` too — would always show dashboard regardless of which link was clicked | ❌ Caught by tutor (self-fixed on explanation) |
| `currentPage = activePage` instead of `currentPage = pageName` | Stored the DOM element object instead of the string name into state | ❌ Caught by tutor, self-fixed |
| `node app.js` in terminal | Tried to run browser-targeted JS in Node.js — `document is not defined` | 💡 Key learning moment — understood Browser vs Node distinction clearly |

#### Assessment
- **Verdict:** Productive session with a higher error count than Day 7 (expected — this was entirely new territory: native `fetch` API, DOM manipulation, and SPA architecture). All errors were logical and pattern-based, not careless. Student self-corrected or understood fixes immediately on explanation.
- **Strongest area:** Architectural understanding — immediately grasped the 3-file separation, independently asked the right question about what form `filters` would take, and correctly explained the Browser vs Node environment distinction after encountering it live.
- **Watch area for Day 9:** `fetch` vs Axios `body`/`data` confusion may resurface. Reinforce `body:` is the native fetch key. Also watch for DOM rendering patterns — student will be building `innerHTML` templates and DOM insertion for the first time.

#### Tutor Notes for Day 9
- Open Day 9 by connecting the architecture to the UI: "Yesterday we built the invisible engine. Today we make it visible — the Dashboard page. `loadDashboard()` will go from `console.log` to rendering real stat cards, a Chart.js bar chart, pending follow-ups, and a recent activity list."
- Agenda: Wire `loadDashboard()` to call `getStats()` → render 4 stat cards (total, response rate, interview rate, offer rate) → include Chart.js via CDN → render status distribution bar chart → render `pendingFollowUps` list → render recent activity timeline (derived from `applications` sorted by `updated_at`) → style with CSS Grid for the card layout.
- Key new concepts for Day 9: DOM creation with `innerHTML` template literals, `Chart.js` CDN inclusion and `new Chart(ctx, config)`, CSS Grid for card layout, color-coded status badges.
- Student will want to jump straight into making it look beautiful. Let him move fast — he has earned it after 2 days of invisible plumbing.
- The `loadDashboard()` stub in `app.js` is the entry point — build outward from there.
- Remind him that `getStats()` already works (he verified it from the browser console yesterday). Day 9 is purely about rendering that data into the DOM.

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

*Last updated: 2026-09-02 | End of Day 8*

