<div align="center">

# 🎯 HuntFlow
### *Your Personal Job Hunt Command Center & Engineering Learning Tracker*

[![Node.js](https://img.shields.io/badge/Node.js-v24-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla_JS_(ES6+)-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Visualizations-Chart.js_v4-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Render](https://img.shields.io/badge/Deployment-Render.com-46E3B7?style=flat-square&logo=render&logoColor=black)](https://render.com/)
[![E2E Tests](https://img.shields.io/badge/Tests-28%2F28_Passing-brightgreen?style=flat-square&logo=checkmarx&logoColor=white)](test-e2e.js)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](LICENSE)

<p align="center">
  <b>Eliminate spreadsheet chaos. Track job applications, log round-by-round interview reflections, measure continuous study streaks, and monitor funnel conversion metrics in real time.</b>
</p>

[**Explore Live Demo »**](https://huntflow.onrender.com) · [**Report Bug »**](https://github.com/Coder-Tejas03/huntflow/issues) · [**Request Feature »**](https://github.com/Coder-Tejas03/huntflow/issues)

</div>

---

## 📖 Overview

**HuntFlow** is a production-ready, full-stack web application designed to act as an engineer's command center throughout the technical hiring lifecycle. Built from the ground up without heavy frontend frameworks, HuntFlow proves that deep mastery of vanilla web standards (HTML5, modern CSS3 Grid/Flexbox, ES6+ JavaScript), combined with a modular Express REST API and a normalized PostgreSQL relational database, delivers lightning-fast performance, high maintainability, and zero bloat.

### 🌟 Key Highlights
- **Single-Page Application (SPA) Architecture**: Zero-reload navigation powered by declarative state management and dynamic DOM injection.
- **Pure Vanilla Web Standards**: No React, no Tailwind, no bundlers — raw performance with custom design tokens, backdrop filters, and CSS Grid.
- **Relational Integrity**: Strict foreign key constraints with `ON DELETE CASCADE`, guaranteeing zero ghost records or orphan notes.
- **Follow-up Intelligence**: Anti-join SQL queries that automatically detect applications with no touchpoints after 7 days.
- **Automated Verification**: Zero-dependency end-to-end integration test runner validating all 14 REST endpoints.

---

## 🏗️ System Architecture

```mermaid
graph TD
    subgraph Client ["Client Tier (Browser)"]
        UI["Modern SPA (HTML5 / CSS3 / ES6+)"]
        State["State Manager (app.js)"]
        API_Layer["API Client Wrapper (api.js)"]
        Charts["Chart.js Dynamic Visualizer"]
        UI --> State
        State --> API_Layer
        State --> Charts
    end

    subgraph Server ["Application Tier (Node.js & Express 5)"]
        Router["Express Modular Router (/api/v1)"]
        AppCtrl["Applications Controller"]
        NotesCtrl["Interview Notes Controller"]
        StudyCtrl["Study Logs Controller"]
        StatsCtrl["Stats & Analytics Controller"]
        Pool["pg.Pool (Dynamic SSL Negotiation)"]

        API_Layer <== HTTP / JSON ==> Router
        Router --> AppCtrl
        Router --> NotesCtrl
        Router --> StudyCtrl
        Router --> StatsCtrl
        AppCtrl --> Pool
        NotesCtrl --> Pool
        StudyCtrl --> Pool
        StatsCtrl --> Pool
    end

    subgraph Database ["Data Tier (PostgreSQL 16)"]
        AppTable[("applications Table")]
        NotesTable[("interview_notes Table")]
        StudyTable[("study_logs Table")]

        Pool <== Parameterized SQL ($1, $2) ==> AppTable
        Pool <== Foreign Key (Cascade) ==> NotesTable
        Pool <== Time-Series Queries ==> StudyTable
    end
```

---

## ✨ Core Features & Modules

### 1. 💼 Job Applications Pipeline
- **Comprehensive Lifecycle Tracking**: Track applications across 9 granular statuses: *Applied, Online Assessment, Mock Interview, Interview Round 1, Interview Round 2, Interview Round 3, Offer, Rejected, Withdrawn*.
- **Real-Time Filtering & Search**: Instant case-insensitive search across company name and role, combined with platform and status dropdown filters.
- **Smart Follow-Up Engine**: Automated flag alerts when an application has been in `Applied` status for over 7 days with no interview activity.
- **Responsive Layout Transformation**: Automatically renders an interactive tabular view on desktop and transforms into gesture-friendly job cards on mobile viewports (<768px).

### 2. 🎙️ Deep Interview Round Notes
- **Round-by-Round Documentation**: Capture exact coding problems, architectural questions, personal answers, and areas to revise for subsequent rounds.
- **Subjective Assessment Tracking**: Log real-time impressions (*"Great discussion"*, *"Tough DSA round"*).
- **Referential Integrity**: Embedded modal view tied to the parent application; deleting an application cascades to all associated round notes cleanly.

### 3. 🧠 Study Log & Continuous Streak Engine
- **Daily Engineering Logs**: Record daily study topics, hours spent, target projects, and specific learnings.
- **Interactive Confidence Slider**: Custom gradient track (1 to 5) with live emoji-backed feedback (*1: Shaky* to *5: Mastered*).
- **Automated Streak Calculation**: Algorithmic backward scan that verifies continuous daily active learning sessions from today/yesterday.
- **Effort Metrics**: Automatic aggregation of total hours studied, unique active study days, and average hours per session.

### 4. 📊 Analytical Dashboard
- **Funnel Conversion Metrics**: Real-time computation of Response Rate, Interview Conversion Rate, and Offer Conversion Rate with division-by-zero protection.
- **Status Distribution Visualization**: Integrated Chart.js bar chart with responsive canvas lifecycle management (`chart.destroy()` to prevent memory leaks during SPA navigation).
- **Pending Follow-Ups Feed**: Quick-action cards displaying applications requiring follow-ups.
- **Recent Activity Feed**: Chronological log of recent pipeline movements.

---

## 🗄️ Database Schema & Relational Design

```mermaid
erDiagram
    applications ||--o{ interview_notes : "has (ON DELETE CASCADE)"
    applications {
        int id PK "SERIAL"
        string company_name "VARCHAR(255) NOT NULL"
        string role "VARCHAR(255) NOT NULL"
        string platform "VARCHAR(255) NOT NULL CHECK"
        text job_link "TEXT"
        date date_applied "DATE NOT NULL DEFAULT CURRENT_DATE"
        string status "VARCHAR(30) NOT NULL CHECK"
        string salary_offered "VARCHAR(100)"
        text notes "TEXT"
        timestamp created_at "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
        timestamp updated_at "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    }

    interview_notes {
        int id PK "SERIAL"
        int application_id FK "INTEGER NOT NULL REFERENCES applications(id)"
        int round_number "INTEGER NOT NULL"
        date note_date "DATE NOT NULL DEFAULT CURRENT_DATE"
        text questions_asked "TEXT NOT NULL"
        text my_answers "TEXT"
        text to_revise "TEXT"
        text how_it_went "TEXT"
        timestamp created_at "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    }

    study_logs {
        int id PK "SERIAL"
        date log_date "DATE NOT NULL DEFAULT CURRENT_DATE"
        string topic "VARCHAR(255) NOT NULL"
        decimal hours_spent "DECIMAL(4,1) NOT NULL CHECK (> 0)"
        text what_i_learned "TEXT"
        string project_worked_on "VARCHAR(255)"
        int confidence_level "INTEGER CHECK (1-5)"
        timestamp created_at "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    }
```

---

## 🔌 REST API Specification

**Base URL**: `/api/v1`

### 📋 Applications Endpoints
| Verb | Path | Description | Query / Body Parameters | Status Codes |
|---|---|---|---|---|
| `GET` | `/applications` | List all applications with optional filters | `?status=...&platform=...&search=...` | `200`, `500` |
| `GET` | `/applications/:id` | Get single application details | Route param: `:id` | `200`, `404`, `500` |
| `POST` | `/applications` | Create new job application | Body: `{ company_name, role, platform, ... }` | `201`, `400`, `500` |
| `PUT` | `/applications/:id` | Partial update existing application | Body: `{ status, salary_offered, ... }` | `200`, `404`, `500` |
| `DELETE` | `/applications/:id` | Delete application (cascades to notes) | Route param: `:id` | `200`, `404`, `500` |

### 🎙️ Interview Notes Endpoints
| Verb | Path | Description | Query / Body Parameters | Status Codes |
|---|---|---|---|---|
| `GET` | `/applications/:id/notes` | Get all notes for specific application | Route param: `:id` (Application ID) | `200`, `500` |
| `POST` | `/applications/:id/notes` | Add interview round note to application | Body: `{ round_number, questions_asked, ... }` | `201`, `400`, `500` |
| `PUT` | `/notes/:id` | Update existing interview note | Body: `{ questions_asked, my_answers, ... }` | `200`, `404`, `500` |
| `DELETE` | `/notes/:id` | Delete interview note | Route param: `:id` (Note ID) | `200`, `404`, `500` |

### 🧠 Study Logs Endpoints
| Verb | Path | Description | Query / Body Parameters | Status Codes |
|---|---|---|---|---|
| `GET` | `/study-logs` | Retrieve study logs (sorted chronologically) | Optional: `?date=YYYY-MM-DD` | `200`, `500` |
| `POST` | `/study-logs` | Record new daily study session | Body: `{ topic, hours_spent, confidence_level, ... }` | `201`, `400`, `500` |
| `PUT` | `/study-logs/:id` | Update study log entry | Body: `{ hours_spent, what_i_learned, ... }` | `200`, `404`, `500` |
| `DELETE` | `/study-logs/:id` | Delete study log entry | Route param: `:id` | `200`, `404`, `500` |

### 📈 Dashboard & Stats Endpoint
| Verb | Path | Description | Response Details | Status Codes |
|---|---|---|---|---|
| `GET` | `/stats` | Aggregated funnel metrics & follow-ups | `{ overview, rates, byStatus, byPlatform, pendingFollowUps }` | `200`, `500` |

---

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0+ (Tested on v24)
- **PostgreSQL**: v14.0+ (Tested on v16)
- **Git**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Coder-Tejas03/huntflow.git
   cd huntflow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root:
   ```env
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/huntflow
   PORT=3000
   ```

4. **Initialize Database Schema:**
   Run our automated schema migration script to create all tables and constraints:
   ```bash
   npm run db:init
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser!

---

## 🧪 Automated End-to-End Testing

HuntFlow features a comprehensive zero-dependency E2E test suite (`test-e2e.js`) that validates all 14 REST endpoints, dynamic query building, constraint validations, and database cascade deletions.

Run the test suite:
```bash
npm test
```

### Test Suite Coverage:
- **Applications REST API**: Creation validation, happy path, date formatting, multi-condition query filtering (`?status`, `?platform`, `?search`), single item retrieval, 404 handling, and partial updates (`COALESCE`).
- **Interview Notes REST API**: Validation guards, round creation, retrieval ordering (`round_number ASC`), empty collection handling (`200 []`), and partial updates.
- **Study Logs REST API**: Required field validation, decimal hours calculation, sorting by `log_date DESC`, and CRUD lifecycle.
- **Analytics & Stats**: Validates mathematical formulas for response, interview, and offer rates, division-by-zero guards, and anti-join queries.
- **Referential Integrity**: Verifies parent-child cascade deletion (`ON DELETE CASCADE`) to guarantee zero orphan records.

---

## 🚀 Cloud Deployment (Render.com)

HuntFlow is architected for zero-friction cloud deployment on [Render.com](https://render.com) using free-tier PostgreSQL and Web Service instances.

### Step 1: Provision PostgreSQL Database on Render
1. In the [Render Dashboard](https://dashboard.render.com), click **New +** $\rightarrow$ **PostgreSQL**.
2. Set Name to `huntflow-db`.
3. Choose your nearest region (e.g. Frankfurt / Singapore).
4. Click **Create Database**.
5. Copy the **External Database URL** and **Internal Database URL**.

### Step 2: Initialize Database Schema Remotely
From your local terminal, initialize the remote Render PostgreSQL tables using our migration script:
```bash
DATABASE_URL="<RENDER_EXTERNAL_DATABASE_URL>" npm run db:init
```

### Step 3: Deploy Web Service on Render
1. In Render Dashboard, click **New +** $\rightarrow$ **Web Service**.
2. Connect your GitHub repository `Coder-Tejas03/huntflow`.
3. Configure settings:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add Environment Variables:
   - `DATABASE_URL`: `<RENDER_INTERNAL_DATABASE_URL>`
   - `NODE_ENV`: `production`
5. Click **Deploy Web Service**!

---

## 🏆 The 12-Day App-Building Marathon

HuntFlow was conceptualized, designed, built, and shipped as part of an intensive 12-day engineering marathon:

| Day | Milestone | Technical Focus |
|---|---|---|
| **Day 1** | JS Fundamentals Revision | Arrow functions, destructuring, higher-order array methods (`map/filter/reduce`), `async`/`await`, `fetch()` |
| **Day 2** | Project Architecture Setup | `npm init`, Express 5 server initialization, static asset serving, semantic HTML5/CSS3 foundation |
| **Day 3** | Database Design & PostgreSQL | Relational modeling, `schema.sql`, primary/foreign keys, `ON DELETE CASCADE`, `CHECK` constraints |
| **Day 4** | Node.js ↔ PostgreSQL Bridge | `pg.Pool` connection pooling, `.env` security, parameterized queries (`$1`, `$2`), SQL injection defense |
| **Day 5** | Applications REST API | Dynamic SQL query construction, route parameters, JSON parsing, HTTP status codes (`200`, `201`, `400`, `404`) |
| **Day 6** | Notes & Study Logs REST APIs | Parent-child REST URL design, foreign key relationships, 8 modular endpoints |
| **Day 7** | SQL Aggregations & Analytics | `COUNT(*) FILTER`, `GROUP BY`, `LEFT JOIN` anti-joins, rate mathematics, `Promise.all()` query concurrency |
| **Day 8** | Frontend JavaScript Architecture | Modular `api.js` fetch wrappers, SPA state management, show/hide navigation lifecycle |
| **Day 9** | Dashboard Analytics Page | Dynamic stat cards, Chart.js canvas integration, instance lifecycle management (`destroy()`), CSS Grid |
| **Day 10** | Applications Core Engine | Interactive filterable table, search debounce, Add/Edit drawer, inline status updates, cascade warnings |
| **Day 11** | Study Log & 2026 UI Redesign | Study session streak algorithm, confidence slider, application detail modal, frosted glass typography overhaul |
| **Day 12** | E2E Testing, Render Deploy & Launch | Zero-dependency E2E test suite (28/28), dynamic cloud SSL hardening, Render deployment, production release |

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

<div align="center">
  <b>Built with ❤️ by <a href="https://github.com/Coder-Tejas03">Tejas Gosavi</a></b>
</div>
