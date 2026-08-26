# HuntFlow — Project Specification and Technical Requirements

> **Tagline:** Your personal job hunt command center.

## 1. Project Overview


| Item           | Specification                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Project name   | HuntFlow                                                                                                                      |
| Description    | A local-first web application for one user to add, track, and manage job applications, interview notes, and daily study logs. |
| Project type   | Full-stack CRUD application (frontend, backend, and database).                                                                |
| Intended user  | One job seeker (the developer).                                                                                               |
| Authentication | Not required for this version. Authentication is deliberately deferred to Project B.                                          |
| Hosting        | Render.com, accessible from any browser.                                                                                      |




## 2. Problem Statement

The user applies through Naukri, LinkedIn, company sites, and WhatsApp referrals. Applications and follow-ups become hard to track; interview notes are scattered; job-search funnel metrics are unavailable; and six hours of daily study lack a structured record.

**Core pain:** important job-hunt information is fragmented, preventing reliable tracking and data-driven decisions.

## 3. Product Solution

HuntFlow is a single-page application that centralizes:

1. **Job application tracking** — company, role, source platform, link, status, and notes.
2. **Interview and follow-up management** — interview-round notes and visible follow-up indicators.
3. **Daily study logging** — topics, time spent, learning notes, projects, and confidence.

The application is intentionally personal and single-user: no multi-user support or login is in scope.

## 4. Functional Requirements



### 4.1 Job Application Management


| ID  | Feature             | Requirement                                                                                                                                                                                                                                                                                               |
| --- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | Add application     | Form fields: **company name** (required), **role/position** (required), **platform** (Naukri, LinkedIn, Company Website, Referral, Other), **job link** (optional URL), **date applied** (defaults to today), **status**, **salary offered** (optional; show only for `Offer`), and **notes** (optional). |
| 1.2 | List applications   | Sort by date applied, newest first. Show company, role, platform, date applied, status, and days since applied. Each row opens the detail view.                                                                                                                                                           |
| 1.3 | View application    | Show all application fields, related interview notes, and follow-up history.                                                                                                                                                                                                                              |
| 1.4 | Edit application    | Allow editing every field, including status transitions.                                                                                                                                                                                                                                                  |
| 1.5 | Delete application  | Require confirmation using `Are you sure?`.                                                                                                                                                                                                                                                               |
| 1.6 | Filter applications | Filter simultaneously by status and platform.                                                                                                                                                                                                                                                             |
| 1.7 | Search applications | Search company name and role.                                                                                                                                                                                                                                                                             |


**Allowed application statuses:** `Applied`, `Online Assessment`, `Interview Round 1`, `Interview Round 2`, `Interview Round 3`, `Offer`, `Rejected`, `Withdrawn`.

### 4.2 Interview Notes and Follow-ups


| ID  | Feature            | Requirement                                                                                                                                              |
| --- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1 | Add interview note | From the application detail view, record date (default: today), round number, questions asked, answers, revision topics, and optional assessment.        |
| 2.2 | View notes         | Display an application’s notes in reverse chronological order.                                                                                           |
| 2.3 | Edit/delete note   | Allow individual interview notes to be edited or deleted.                                                                                                |
| 2.4 | Follow-up flag     | Show a red **Follow-up needed** badge when an application remains `Applied` for at least 7 days without a status change. This is computed, never stored. |




### 4.3 Dashboard and Analytics


| ID  | Feature             | Requirement                                                                                                                                      |
| --- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.1 | Dashboard overview  | Show total applications, status breakdown, response rate, interview rate, offer rate, and pending-follow-up count.                               |
| 3.2 | Status distribution | Display application counts by status in a simple bar chart using Chart.js or Recharts.                                                           |
| 3.3 | Activity timeline   | Show chronological events such as `Applied to Company X on Date Y` and `Moved to Interview Round 1 on Date Z`, derived from status-change dates. |




### 4.4 Daily Study Log


| ID  | Feature           | Requirement                                                                                                                                                                               |
| --- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1 | Add entry         | Fields: date (defaults to today), topic (required), hours spent (required number), what was learned (optional), project worked on (optional), and confidence level (optional 1–5 slider). |
| 4.2 | List entries      | Display entries newest first.                                                                                                                                                             |
| 4.3 | Study statistics  | Show total hours, average hours per day, most-studied topics, and current consecutive-day streak.                                                                                         |
| 4.4 | Edit/delete entry | Allow editing and deletion of every entry.                                                                                                                                                |




### 4.5 UI and UX


| ID  | Requirement         | Details                                                                                                     |
| --- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| 5.1 | Navigation          | Top navigation: Dashboard, Applications, Study Log.                                                         |
| 5.2 | Responsive design   | Must work on desktop and mobile using CSS media queries.                                                    |
| 5.3 | Visual style        | Plain CSS only; calm grays plus one accent color; prioritize readability and spacing. Do not use Bootstrap. |
| 5.4 | Empty states        | Use useful messages, e.g. `No applications yet. Add your first job application →`.                          |
| 5.5 | Destructive actions | Show a confirmation dialog before deletion.                                                                 |




## 5. Technology Constraints


| Layer           | Technology                             | Rationale                                                                     |
| --------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| Frontend        | HTML5, CSS3, Vanilla JavaScript (ES6+) | Master core browser fundamentals before frameworks.                           |
| Backend         | Node.js and Express.js                 | Lightweight JavaScript backend with a large ecosystem.                        |
| Database        | PostgreSQL                             | Relational model suits structured job-application data and builds SQL skills. |
| Version control | Git and GitHub                         | Required developer workflow.                                                  |
| Deployment      | Render.com                             | Free-tier hosting for Node.js and PostgreSQL.                                 |


**Constraint:** Do not use frameworks or libraries except Chart.js for the dashboard chart.

## 6. Data Model



### 6.1 `applications`


| Column           | Type           | Constraints                      | Description                   |
| ---------------- | -------------- | -------------------------------- | ----------------------------- |
| `id`             | `SERIAL`       | Primary key                      | Auto-incrementing identifier. |
| `company_name`   | `VARCHAR(255)` | Not null                         | Company name.                 |
| `role`           | `VARCHAR(255)` | Not null                         | Job title or position.        |
| `platform`       | `VARCHAR(50)`  | Not null; check allowed values   | Application source.           |
| `job_link`       | `TEXT`         | Nullable                         | Job-posting URL.              |
| `date_applied`   | `DATE`         | Not null; default `CURRENT_DATE` | Date applied.                 |
| `status`         | `VARCHAR(30)`  | Not null; default `Applied`      | Current status.               |
| `salary_offered` | `VARCHAR(100)` | Nullable                         | Filled only for an offer.     |
| `notes`          | `TEXT`         | Nullable                         | General notes.                |
| `created_at`     | `TIMESTAMP`    | Default `CURRENT_TIMESTAMP`      | Creation time.                |
| `updated_at`     | `TIMESTAMP`    | Default `CURRENT_TIMESTAMP`      | Last update time.             |




### 6.2 `interview_notes`


| Column            | Type        | Constraints                                               | Description                   |
| ----------------- | ----------- | --------------------------------------------------------- | ----------------------------- |
| `id`              | `SERIAL`    | Primary key                                               | Auto-incrementing identifier. |
| `application_id`  | `INTEGER`   | Not null; references `applications(id)` on delete cascade | Parent application.           |
| `round_number`    | `INTEGER`   | Not null                                                  | Interview round number.       |
| `note_date`       | `DATE`      | Not null; default `CURRENT_DATE`                          | Interview date.               |
| `questions_asked` | `TEXT`      | Not null                                                  | Interviewer questions.        |
| `my_answers`      | `TEXT`      | Nullable                                                  | Candidate answers.            |
| `to_revise`       | `TEXT`      | Nullable                                                  | Revision topics.              |
| `how_it_went`     | `TEXT`      | Nullable                                                  | Subjective assessment.        |
| `created_at`      | `TIMESTAMP` | Default `CURRENT_TIMESTAMP`                               | Creation time.                |


**Relationship:** one application has many interview notes. Deleting an application deletes all its notes (`ON DELETE CASCADE`).

### 6.3 `study_logs`


| Column              | Type           | Constraints                      | Description                                   |
| ------------------- | -------------- | -------------------------------- | --------------------------------------------- |
| `id`                | `SERIAL`       | Primary key                      | Auto-incrementing identifier.                 |
| `log_date`          | `DATE`         | Not null; default `CURRENT_DATE` | Study date.                                   |
| `topic`             | `VARCHAR(255)` | Not null                         | Subject studied.                              |
| `hours_spent`       | `DECIMAL(4,1)` | Not null; check `> 0`            | Hours studied; supports values such as `1.5`. |
| `what_i_learned`    | `TEXT`         | Nullable                         | Learning summary.                             |
| `project_worked_on` | `VARCHAR(255)` | Nullable                         | Related project.                              |
| `confidence_level`  | `INTEGER`      | Nullable; check 1–5              | Confidence score.                             |
| `created_at`        | `TIMESTAMP`    | Default `CURRENT_TIMESTAMP`      | Creation time.                                |




## 7. API Contract

**Base URL:** `/api/v1`

### 7.1 Applications


| Method   | Path                | Purpose                                                                         | Request body                                                                                   | Response               |
| -------- | ------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------- |
| `GET`    | `/applications`     | List applications; accepts `status`, `platform`, and `search` query parameters. | —                                                                                              | Array of applications. |
| `GET`    | `/applications/:id` | Get one application.                                                            | —                                                                                              | Application object.    |
| `POST`   | `/applications`     | Create an application.                                                          | `{ company_name, role, platform, job_link?, date_applied?, status?, salary_offered?, notes? }` | Created application.   |
| `PUT`    | `/applications/:id` | Update an application.                                                          | Any mutable application fields.                                                                | Updated application.   |
| `DELETE` | `/applications/:id` | Delete an application.                                                          | —                                                                                              | Success message.       |




### 7.2 Interview Notes


| Method   | Path                      | Purpose                        | Request body                                                               | Response         |
| -------- | ------------------------- | ------------------------------ | -------------------------------------------------------------------------- | ---------------- |
| `GET`    | `/applications/:id/notes` | List notes for an application. | —                                                                          | Array of notes.  |
| `POST`   | `/applications/:id/notes` | Add an interview note.         | `{ round_number, questions_asked, my_answers?, to_revise?, how_it_went? }` | Created note.    |
| `PUT`    | `/notes/:id`              | Update an interview note.      | Any mutable note fields.                                                   | Updated note.    |
| `DELETE` | `/notes/:id`              | Delete an interview note.      | —                                                                          | Success message. |




### 7.3 Study Logs


| Method   | Path              | Purpose                                        | Request body                                                                                | Response             |
| -------- | ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------- |
| `GET`    | `/study-logs`     | List logs; accepts optional `date=YYYY-MM-DD`. | —                                                                                           | Array of study logs. |
| `POST`   | `/study-logs`     | Create a study entry.                          | `{ log_date?, topic, hours_spent, what_i_learned?, project_worked_on?, confidence_level? }` | Created log.         |
| `PUT`    | `/study-logs/:id` | Update a study entry.                          | Any mutable log fields.                                                                     | Updated log.         |
| `DELETE` | `/study-logs/:id` | Delete a study entry.                          | —                                                                                           | Success message.     |




### 7.4 Dashboard Statistics


| Method | Path     | Purpose                      | Response                                                                                                                 |
| ------ | -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `GET`  | `/stats` | Return dashboard statistics. | `{ total_applications, status_breakdown: { Applied: N }, response_rate, interview_rate, offer_rate, pending_followups }` |


**Metric formulas**

- **Response rate:** `(status is neither Applied nor Withdrawn) / total applications × 100`
- **Interview rate:** `(status contains Interview) / total applications × 100`
- **Offer rate:** `(status is Offer) / total applications × 100`
- **Pending follow-ups:** `status is Applied` and applied more than 7 days ago and no interview notes exist.

> **Implementation note:** the source requirements describe the follow-up rule both as “no status change for 7+ days” and, in the statistics endpoint, as “date applied is more than 7 days ago and no interview notes exist.” Choose and document one rule before implementation. Supporting a true status-change history will also be needed for the requested activity timeline.



## 8. UI Structure and Wireframes



### Shared page shell

```text
┌──────────────────────────────────────────────────────────────┐
│ HuntFlow       [Dashboard] [Applications] [Study Log]        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                 Current page content                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```



### Dashboard

```text
┌──────────────────────────────────────────────────────────────┐
│ DASHBOARD                                                    │
├──────────────┬──────────────┬──────────────┬─────────────────┤
│ Total apps   │ Response rate│ Interview rate│ Offer rate / …  │
│ 25           │ 32%          │ 12%           │                 │
├──────────────┴──────────────┴──────────────┴─────────────────┤
│ Status distribution — bar chart                              │
├──────────────────────────────────────────────────────────────┤
│ Pending follow-ups: 3                                        │
│ • Company A — 9 days since applied                           │
│ • Company B — 12 days since applied                          │
├──────────────────────────────────────────────────────────────┤
│ Recent activity timeline                                     │
│ • Aug 24 — Applied to Company X                              │
│ • Aug 22 — Moved to Round 1 — Company Y                      │
└──────────────────────────────────────────────────────────────┘
```



### Applications

```text
┌──────────────────────────────────────────────────────────────┐
│ APPLICATIONS                                      [+ Add New]│
├──────────────────────────────────────────────────────────────┤
│ Search: [____________]  Filters: [Status ▾] [Platform ▾]     │
├─────────┬──────┬──────────┬─────────────┬────────────────────┤
│ Company │ Role │ Platform │ Date applied│ Status             │
├─────────┼──────┼──────────┼─────────────┼────────────────────┤
│ Google  │ SDE  │ LinkedIn │ Aug 20      │ Interview Round 1  │
│ Amazon  │ SDE  │ Naukri   │ Aug 18      │ Applied ⚠          │
└─────────┴──────┴──────────┴─────────────┴────────────────────┘
```

A clicked row opens a modal containing the application fields, edit/close controls, job-posting link, notes, and an interview-notes section with add, edit, and delete actions.

### Study log

```text
┌──────────────────────────────────────────────────────────────┐
│ STUDY LOG                                         [+ Add New]│
├──────────────┬──────────────┬────────────────────────────────┤
│ Total hours  │ Average/day  │ Current streak                 │
│ 120          │ 4.2          │ 12 days                        │
├──────────────┴──────────────┴────────────────────────────────┤
│ Aug 26 — JavaScript Array Methods                            │
│ Hours: 5  | Confidence: 4/5                                  │
│ Learned: map, filter, reduce…  | Project: HuntFlow           │
│ [Edit] [Delete]                                              │
└──────────────────────────────────────────────────────────────┘
```



## 9. Project Structure

```text
huntflow/
├── package.json
├── server.js                         # Entry point
├── src/
│   ├── config/db.js                  # Database connection
│   ├── routes/
│   │   ├── applications.js
│   │   ├── interviewNotes.js
│   │   ├── studyLogs.js
│   │   └── stats.js
│   ├── controllers/
│   │   ├── applicationsController.js
│   │   ├── interviewNotesController.js
│   │   ├── studyLogsController.js
│   │   └── statsController.js
│   └── middleware/errorHandler.js
├── public/
│   ├── index.html
│   ├── css/style.css
│   └── js/
│       ├── api.js                    # Fetch wrappers
│       ├── app.js                    # Main application logic
│       ├── dashboard.js
│       ├── applications.js
│       └── studyLog.js
└── db/schema.sql
```



## 10. Deployment Plan


| Step | Action                                                          |
| ---- | --------------------------------------------------------------- |
| 1    | Create a GitHub repository.                                     |
| 2    | Set up a Render.com account.                                    |
| 3    | Create a PostgreSQL database on Render.                         |
| 4    | Create a Render web service connected to the GitHub repository. |
| 5    | Set `DATABASE_URL` as an environment variable.                  |
| 6    | Add build and start scripts to `package.json`.                  |
| 7    | Deploy and verify the live application.                         |




## 11. Learning Requirements

Everything below is required for this project.

### A. JavaScript Fundamentals (Frontend)


| Topic                    | Required knowledge                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variables and data types | `let`, `const`, `var`; strings, numbers, booleans, `null`, `undefined`; null versus undefined; template literals.                                                                                                     |
| Functions                | Declarations versus expressions; arrow functions; parameters and defaults; return values; callbacks.                                                                                                                  |
| Objects                  | Literals; dot/bracket access; add/update/delete; destructuring; object spread.                                                                                                                                        |
| Arrays                   | Creation; `push`, `pop`, `shift`, `unshift`; `map`, `filter`, `reduce`, `find`, `forEach`, `sort`; destructuring and array spread.                                                                                    |
| Async JavaScript         | Non-blocking concepts; callbacks; promises (`then`, `catch`, `finally`); `async`/`await`; `try`/`catch`; `fetch` for all CRUD HTTP methods; request/response objects; `response.json()`; fetch errors; `Promise.all`. |
| DOM manipulation         | Selectors; create/modify elements; `innerHTML`, `textContent`, attributes; class manipulation; append/remove; click, submit, input events; `preventDefault`; dynamic rendering.                                       |
| Local state              | Keep state in JavaScript variables, update it, then re-render UI.                                                                                                                                                     |
| JSON                     | JSON purpose; `JSON.stringify`; `JSON.parse`; API data exchange.                                                                                                                                                      |




### B. CSS Fundamentals


| Topic             | Required knowledge                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Basics            | Selectors; box model; display; positioning; colors; typography and text alignment.                                              |
| Flexbox           | Containers/items; alignment and distribution; direction; wrapping; `gap`; flex sizing.                                          |
| Grid              | Grid container; rows/columns; gaps; when Grid is more suitable than Flexbox.                                                    |
| Responsive design | Mobile-first design; `@media (max-width: 768px)`; viewport meta tag; relative units (`%`, `rem`, `em`, `vw`, `vh`) versus `px`. |
| Forms             | Inputs, buttons, selects, textareas, focus and disabled states, Flexbox layouts.                                                |
| UI components     | Cards, tables with collapsed borders and alternating rows, modals, badges/pills, and color-coded statuses.                      |




### C. HTML Fundamentals


| Topic      | Required knowledge                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Structure  | Doctype; `html`, `head`, `body`; charset/viewport/description meta tags; semantic elements; when to use `div`. |
| Forms      | `form`; text/date/number/url/email inputs; select/options; textarea; button types; labels and accessibility.   |
| Tables     | `table`, `thead`, `tbody`, `tr`, `th`, and `td` for data display.                                              |
| Navigation | Links and `target="_blank"` for external links.                                                                |




### D. Node.js and Express


| Topic                 | Required knowledge                                                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node basics           | Node runtime; npm; `package.json`; installing packages; scripts; CommonJS versus ES modules; `path` and `fs`.                                                           |
| Express setup         | Install Express, instantiate an app, listen on a port, and understand the request-response cycle.                                                                       |
| Middleware            | `express.json`, `express.urlencoded`, custom logging, and error middleware.                                                                                             |
| Routing               | CRUD route methods; params; query parameters; `Express.Router`; versioned route grouping.                                                                               |
| Request/response      | `req.body`, `req.params`, `req.query`; `res.status`, `res.json`, `res.send`; status codes 200, 201, 400, 404, and 500.                                                  |
| Validation and errors | Required fields, types, dates; 400 validation responses; route `try`/`catch`; `next(err)`; consistent `{ error, details }` responses; graceful database-error handling. |
| Organization          | Keep routes, controllers, database configuration, middleware, and static frontend separated as shown above.                                                             |




### E. PostgreSQL and SQL


| Topic                 | Required knowledge                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fundamentals          | Relational databases; tables, rows, columns; keys; `VARCHAR`, `TEXT`, `INTEGER`, `SERIAL`, `DATE`, `TIMESTAMP`, `DECIMAL`; constraints; schema.                 |
| Setup                 | Install PostgreSQL or use Render; use `psql`; create and connect to `huntflow`.                                                                                 |
| CRUD SQL              | `INSERT ... RETURNING *`, `SELECT`, `WHERE`, `UPDATE ... RETURNING *`, `DELETE`, `ORDER BY`, and `LIMIT`.                                                       |
| Joins                 | `INNER JOIN`, `LEFT JOIN`, join differences, and table aliases.                                                                                                 |
| Aggregation           | `COUNT`, `GROUP BY`, and dashboard-statistics queries.                                                                                                          |
| Node integration      | Install `pg`; use `Pool`; `pool.query` with callbacks or `async`/`await`; parameterized `$1` queries; `result.rows`; connection via `process.env.DATABASE_URL`. |
| Environment variables | `.env`, `dotenv`, `process.env`, and ensuring `.env` is never committed.                                                                                        |


Example parameterized query:

```js
const result = await pool.query(
  'SELECT * FROM applications WHERE id = $1',
  [id],
);
```



### F. Git and GitHub

Understand repository initialization, status, staging (`git add`), commits, push/pull, history, creating a GitHub repository, adding an `origin` remote, pushing `main`, and a `.gitignore` that excludes `node_modules/` and `.env`.

### G. Render Deployment

Create a Render account, database, and web service; retrieve the database URL; connect GitHub; configure environment variables; use `npm install` as the build command and `node server.js` as the start command; inspect logs; and optionally enable auto-deploy on pushes to `main`. Learn to run `schema.sql` with `psql` against Render or through a migration script.

### H. Chart.js

Include Chart.js with a CDN, create a `<canvas>`, render a bar chart with labels and data, style colors/legends/titles, and update the chart as data changes.

### I. Best Practices

- Separate routes, controllers, and database access.
- Use `camelCase` in JavaScript and `snake_case` in SQL.
- Follow REST conventions and consistent JSON/error response formats.
- Use correct HTTP status codes.
- Prevent SQL injection with parameterized queries.
- Keep credentials out of source control.
- Validate all server-side input.
- If frontend and backend are separate during development, configure CORS with `cors` and `app.use(cors())`.



## 12. Delivery Summary


| Metric            | Value                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------- |
| Duration          | 12 days (days 1–12 of a 60-day plan)                                                   |
| Daily commitment  | 6 hours                                                                                |
| Total effort      | Approximately 72 hours                                                                 |
| Technologies      | HTML, CSS, Vanilla JavaScript, Node.js, Express, PostgreSQL, Git, Render.com, Chart.js |
| API endpoints     | 14 defined routes (the source summary says 12; route tables enumerate 14)              |
| Database tables   | 3                                                                                      |
| Pages             | 3: Dashboard, Applications, Study Log                                                  |
| Deployment target | Render.com                                                                             |


