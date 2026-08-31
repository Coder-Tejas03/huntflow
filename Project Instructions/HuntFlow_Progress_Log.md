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

*Last updated: 2026-08-31 | End of Day 5*

