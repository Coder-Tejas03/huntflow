# HuntFlow — Complete Session Context & Continuity Log

> **Purpose:** Living record of everything discussed, decided, and set up before Day 1. Use this to resume the tutoring session with full context in any conversation or IDE.

---

## 1. The Two Source Documents

| File | Role |
|---|---|
| `HuntFlow_Project_Spec.md` | Single source of truth — features, tech stack, DB schema, API endpoints, UI wireframes, all learning topics |
| `HuntFlow_Tutor_Instructions.md` | Tutor instruction manual — teaching philosophy, 12-day sequence, rules, interaction format |

---

## 2. Project Summary — HuntFlow

**Tagline:** Your personal job hunt command center.
**Type:** Local-first, single-user, full-stack web app. No authentication (deferred to future project).
**Hosting:** Render.com

### Core Modules
| Module | What it does |
|---|---|
| Job Applications | Add, list, filter, search, edit, delete. Fields: company, role, platform, link, date, status, salary, notes |
| Interview Notes | Per-application round notes: date, round number, questions, answers, revision topics, assessment |
| Study Log | Daily entries: date, topic, hours, what learned, project, confidence (1-5 slider) |
| Dashboard | Stats cards, Chart.js bar chart, pending follow-up list, activity timeline |

### Application Statuses
Applied, Online Assessment, Interview Round 1, Interview Round 2, Interview Round 3, Offer, Rejected, Withdrawn

### UI
- 3 pages: Dashboard, Applications, Study Log
- Top nav bar, plain CSS only (no Bootstrap/Tailwind), calm grays + one accent color
- Responsive: desktop + mobile via CSS media queries

---

## 3. Technology Stack

| Layer | Tech | Note |
|---|---|---|
| Frontend | HTML5, CSS3, Vanilla JS (ES6+) | No frameworks |
| Backend | Node.js + Express.js | — |
| Database | PostgreSQL | — |
| Charts | Chart.js via CDN | Only allowed library |
| Version Control | Git + GitHub | Required |
| Deployment | Render.com | Free tier |

---

## 4. Database Schema (3 Tables)

### applications
id SERIAL PK, company_name VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL,
platform VARCHAR(50) NOT NULL, job_link TEXT, date_applied DATE default CURRENT_DATE,
status VARCHAR(30) default 'Applied', salary_offered VARCHAR(100), notes TEXT,
created_at TIMESTAMP, updated_at TIMESTAMP

### interview_notes
id SERIAL PK, application_id INTEGER FK -> applications(id) ON DELETE CASCADE,
round_number INTEGER NOT NULL, note_date DATE default CURRENT_DATE,
questions_asked TEXT NOT NULL, my_answers TEXT, to_revise TEXT, how_it_went TEXT, created_at TIMESTAMP

### study_logs
id SERIAL PK, log_date DATE default CURRENT_DATE, topic VARCHAR(255) NOT NULL,
hours_spent DECIMAL(4,1) NOT NULL (> 0), what_i_learned TEXT,
project_worked_on VARCHAR(255), confidence_level INTEGER (1-5), created_at TIMESTAMP

---

## 5. API Contract (14 Endpoints) — Base URL: /api/v1

| Method | Path | Purpose |
|---|---|---|
| GET | /applications | List all (filters: ?status, ?platform, ?search) |
| GET | /applications/:id | Get one |
| POST | /applications | Create |
| PUT | /applications/:id | Update |
| DELETE | /applications/:id | Delete |
| GET | /applications/:id/notes | Get notes for an application |
| POST | /applications/:id/notes | Add note |
| PUT | /notes/:id | Update note |
| DELETE | /notes/:id | Delete note |
| GET | /study-logs | List logs (optional ?date) |
| POST | /study-logs | Create log |
| PUT | /study-logs/:id | Update log |
| DELETE | /study-logs/:id | Delete log |
| GET | /stats | Dashboard statistics |

### Stats Response Shape
{ total_applications, status_breakdown: {Applied: N, ...}, response_rate, interview_rate, offer_rate, pending_followups }

### Metric Formulas
- Response rate: (status != Applied AND != Withdrawn) / total x 100
- Interview rate: (status contains "Interview") / total x 100
- Offer rate: (status = "Offer") / total x 100
- Pending follow-ups: status=Applied AND date_applied < today-7days AND no interview notes

---

## 6. Project Folder Structure

```
huntflow/
├── package.json
├── server.js                      <- Entry point
├── .env                           <- Never commit
├── .gitignore
├── src/
│   ├── config/db.js               <- PostgreSQL pool
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
│       ├── api.js                 <- Fetch wrappers
│       ├── app.js                 <- logic + navigation
│       ├── dashboard.js
│       ├── applications.js
│       └── studyLog.js
└── db/schema.sql
```

---

## 7. The 12-Day Teaching Plan

| Day | Focus |
|---|---|
| Day 1 | JS revision: let/const, arrow functions, destructuring, map/filter/reduce, async/await, fetch |
| Day 2 | npm init, Express server, static HTML/CSS, Git + GitHub |
| Day 3 | PostgreSQL basics, create DB, write schema.sql, CRUD SQL practice |
| Day 4 | Connect Node.js to PostgreSQL (pg Pool), dotenv, parameterized queries |
| Day 5 | Applications API — 5 endpoints, test with Postman/curl |
| Day 6 | Interview Notes API + Study Logs API |
| Day 7 | Stats endpoint, SQL COUNT/GROUP BY, LEFT JOINs |
| Day 8 | api.js fetch wrappers, page navigation, app.js state |
| Day 9 | Dashboard page — stat cards, Chart.js bar chart, follow-up list |
| Day 10 | Applications page — list, add, edit, delete, filter, search |
| Day 11 | Study Log page, Interview Notes in detail view, polish + responsive |
| Day 12 | End-to-end testing, deploy to Render.com, README + final push |

6 hours/day. ~72 hours total.

---

## 8. TutorBot Role & Rules

TutorBot is a TEACHER and GUIDE, NOT a code generator.

MUST DO:
- Explain concepts with real-life analogies before any code
- Let the student write the code — give hints, not solutions
- Check understanding by asking the student to explain back or write snippets
- Follow the 12-day sequence strictly — no skipping
- Celebrate wins and keep motivation high
- Treat HuntFlow_Project_Spec.md as the bible — never deviate

MUST NOT DO:
- Write complete functions, components, or files
- Give copy-paste-ready code blocks
- Skip steps or introduce tech not in the spec
- Rush the student

When student asks "give me the code for X":
"I could give you the code, but that won't help you learn. Let me break it down instead..."

3-attempt rule when stuck: ask what they're doing → what they tried → what error they see → give hint → after 3 fails, give small targeted snippet + explanation

---

## 9. Student Profile — Tejas Gosavi

- OS: Ubuntu 24.04.4 LTS
- Learning style: builds real projects, needs analogies + simple language first
- JS: Rusty — was comfortable 1 year ago, can't write syntax from memory now
- Async/await: understands conceptually, needs hands-on practice
- SQL: has written JOINs before, needs heavy practice
- Commitment: 6 hours/day, 12-day marathon
- Day 1 start date: 2026-08-28

---

## 10. Key Decisions Made

| Decision | Choice |
|---|---|
| Follow-up flag rule | status=Applied AND date_applied < today-7days AND no interview notes (simpler + more actionable) |
| Authentication | None in this version (deferred to future project) |
| CSS approach | Plain CSS only, no frameworks |
| Charts | Chart.js via CDN (only allowed library) |

---

## 11. Environment Setup (Day 0 — 2026-08-27)

| Tool | Version | How |
|---|---|---|
| Node.js | v24.13.1 | Was already installed |
| Git | 2.55.0 | Was already installed |
| VS Code | 1.109.4 | Was already installed |
| PostgreSQL | 16.15 | sudo apt install postgresql postgresql-contrib |

Git global config (name + email) set before ending Day 0.
Node v24 is slightly ahead of LTS (v22) but fully compatible.

---

## 12. Day 1 Agenda (2026-08-28)

Topics in order:
1. let vs const vs var
2. Arrow functions — syntax, implicit return
3. Objects — literals, dot/bracket access, destructuring, spread
4. Arrays — map(), filter(), reduce(), find(), forEach() — 5+ practice examples each
5. async/await — promises, .then, .catch, try/catch
6. fetch() — real API calls to https://jsonplaceholder.typicode.com

By end of Day 1, Tejas should:
- Write arrow functions and destructuring without looking it up
- Use map(), filter(), reduce() confidently
- Make a fetch() call to a public API and log the result
- Explain: fetch returns Promise -> await waits -> response.json() is also a Promise

---

## 13. Conversation History

1. Tejas shared both spec docs -> TutorBot read + gave structured summary
2. Tejas answered 3 clarifying questions: start date (Day 1 = 2026-08-28), JS skill (rusty, 1 year gap), follow-up rule (chose "7+ days + no notes")
3. Day 0 environment check: Node/Git/VS Code already installed, PostgreSQL missing
4. PostgreSQL installed and confirmed (v16.15)
5. Git global config set (name + email)
6. This context file created morning of Day 1 for IDE continuity

---

Last updated: 2026-08-28 | Compiled for Antigravity IDE session continuity
