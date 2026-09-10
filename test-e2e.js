/**
 * HuntFlow — Comprehensive End-to-End (E2E) Test Suite
 * 
 * Tests all 14 REST API endpoints across Applications, Interview Notes,
 * Study Logs, Dashboard Statistics, and Referential Database Integrity.
 * Uses native Node.js fetch and assert — zero external dependencies.
 */

const assert = require('assert');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000/api/v1';

const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    bold: "\x1b[1m"
};

let totalPassed = 0;
let totalFailed = 0;

async function runTest(description, testFn) {
    process.stdout.write(`  • ${description} ... `);
    try {
        await testFn();
        console.log(`${colors.green}✓ PASS${colors.reset}`);
        totalPassed++;
    } catch (err) {
        console.log(`${colors.red}✗ FAIL${colors.reset}`);
        console.error(`    ${colors.yellow}Error: ${err.message}${colors.reset}`);
        totalFailed++;
    }
}

async function request(path, options = {}) {
    const url = `${BASE_URL}${path}`;
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
    };

    if (options.body && typeof options.body === 'object') {
        options.body = JSON.stringify(options.body);
    }

    const res = await fetch(url, { ...options, headers });
    let data;
    try {
        data = await res.json();
    } catch (e) {
        data = null;
    }

    return { status: res.status, ok: res.ok, data };
}

async function main() {
    console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}   HUNTFLOW — FULL STACK E2E INTEGRATION TEST SUITE   ${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}====================================================${colors.reset}`);
    console.log(`Targeting Base URL: ${colors.bold}${BASE_URL}${colors.reset}\n`);

    let createdAppId = null;
    let secondAppId = null;
    let createdNoteId = null;
    let createdStudyLogId = null;

    // ==========================================
    // MODULE 1: APPLICATIONS API (5 ENDPOINTS)
    // ==========================================
    console.log(`${colors.bold}▶ MODULE 1: Applications REST API${colors.reset}`);

    await runTest("POST /applications - Reject when required fields are missing (400)", async () => {
        const res = await request('/applications', {
            method: 'POST',
            body: { company_name: "Incomplete Corp" }
        });
        assert.strictEqual(res.status, 400, `Expected 400, got ${res.status}`);
        assert.ok(res.data.error, "Expected error message in response");
    });

    await runTest("POST /applications - Successfully create valid application (201)", async () => {
        const res = await request('/applications', {
            method: 'POST',
            body: {
                company_name: "Stripe",
                role: "Senior Backend Engineer",
                platform: "LinkedIn",
                job_link: "https://stripe.com/jobs/123",
                status: "Applied",
                salary_offered: "$140,000",
                notes: "Applied with referral"
            }
        });
        assert.strictEqual(res.status, 201, `Expected 201, got ${res.status}`);
        assert.ok(res.data.id, "Expected valid application id");
        assert.strictEqual(res.data.company_name, "Stripe");
        assert.strictEqual(res.data.status, "Applied");
        createdAppId = res.data.id;
    });

    await runTest("POST /applications - Create second application with older date (201)", async () => {
        const res = await request('/applications', {
            method: 'POST',
            body: {
                company_name: "OpenAI",
                role: "AI Systems Engineer",
                platform: "Company Website",
                date_applied: "2026-08-15",
                status: "Interview Round 1",
                salary_offered: "$180,000"
            }
        });
        assert.strictEqual(res.status, 201);
        assert.ok(res.data.id);
        secondAppId = res.data.id;
    });

    await runTest("GET /applications - Retrieve list of all applications (200)", async () => {
        const res = await request('/applications');
        assert.strictEqual(res.status, 200);
        assert.ok(Array.isArray(res.data), "Expected response to be an array");
        assert.ok(res.data.length >= 2, `Expected at least 2 apps, found ${res.data.length}`);
    });

    await runTest("GET /applications?status=Applied - Filter applications by status", async () => {
        const res = await request('/applications?status=Applied');
        assert.strictEqual(res.status, 200);
        assert.ok(Array.isArray(res.data));
        assert.ok(res.data.every(app => app.status === 'Applied'), "All apps should have status 'Applied'");
    });

    await runTest("GET /applications?platform=Company+Website - Filter by platform", async () => {
        const res = await request('/applications?platform=Company%20Website');
        assert.strictEqual(res.status, 200);
        assert.ok(Array.isArray(res.data));
        assert.ok(res.data.some(app => app.company_name === 'OpenAI'));
    });

    await runTest("GET /applications?search=Stripe - Case-insensitive search filter", async () => {
        const res = await request('/applications?search=stripe');
        assert.strictEqual(res.status, 200);
        assert.ok(res.data.some(app => app.company_name === 'Stripe'));
    });

    await runTest("GET /applications/:id - Retrieve single application by ID (200)", async () => {
        const res = await request(`/applications/${createdAppId}`);
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.data.id, createdAppId);
        assert.strictEqual(res.data.company_name, "Stripe");
    });

    await runTest("GET /applications/:id - Return 404 for non-existent ID", async () => {
        const res = await request('/applications/999999');
        assert.strictEqual(res.status, 404);
        assert.ok(res.data.error);
    });

    await runTest("PUT /applications/:id - Partially update application fields (200)", async () => {
        const res = await request(`/applications/${createdAppId}`, {
            method: 'PUT',
            body: {
                status: "Offer",
                salary_offered: "$155,000"
            }
        });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.data.status, "Offer");
        assert.strictEqual(res.data.salary_offered, "$155,000");
        assert.strictEqual(res.data.company_name, "Stripe", "Existing fields must be preserved by COALESCE");
    });

    await runTest("PUT /applications/:id - Return 404 for updating non-existent application", async () => {
        const res = await request('/applications/999999', {
            method: 'PUT',
            body: { status: "Offer" }
        });
        assert.strictEqual(res.status, 404);
    });

    // ==========================================
    // MODULE 2: INTERVIEW NOTES API (4 ENDPOINTS)
    // ==========================================
    console.log(`\n${colors.bold}▶ MODULE 2: Interview Notes REST API (Parent-Child Resource)${colors.reset}`);

    await runTest("POST /applications/:id/notes - Reject note missing required fields (400)", async () => {
        const res = await request(`/applications/${createdAppId}/notes`, {
            method: 'POST',
            body: { round_number: 1 }
        });
        assert.strictEqual(res.status, 400);
        assert.ok(res.data.error);
    });

    await runTest("POST /applications/:id/notes - Add Round 1 note to application (201)", async () => {
        const res = await request(`/applications/${createdAppId}/notes`, {
            method: 'POST',
            body: {
                round_number: 1,
                questions_asked: "Explain system architecture and database sharding",
                my_answers: "Detailed vertical vs horizontal scaling and hashing strategies",
                to_revise: "Distributed consensus (Raft/Paxos)",
                how_it_went: "Very positive response from tech lead"
            }
        });
        assert.strictEqual(res.status, 201);
        assert.ok(res.data.id);
        assert.strictEqual(res.data.application_id, createdAppId);
        assert.strictEqual(res.data.round_number, 1);
        createdNoteId = res.data.id;
    });

    await runTest("GET /applications/:id/notes - Retrieve all notes for an application (200)", async () => {
        const res = await request(`/applications/${createdAppId}/notes`);
        assert.strictEqual(res.status, 200);
        assert.ok(Array.isArray(res.data));
        assert.strictEqual(res.data.length, 1);
        assert.strictEqual(res.data[0].id, createdNoteId);
    });

    await runTest("GET /applications/:id/notes - Return empty array 200 [] when no notes exist", async () => {
        const res = await request(`/applications/${secondAppId}/notes`);
        assert.strictEqual(res.status, 200);
        assert.ok(Array.isArray(res.data));
        assert.strictEqual(res.data.length, 0, "Application without notes should return empty array, not 404");
    });

    await runTest("PUT /notes/:id - Update existing interview note (200)", async () => {
        const res = await request(`/notes/${createdNoteId}`, {
            method: 'PUT',
            body: {
                how_it_went: "Exceptional! Offered next steps immediately."
            }
        });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.data.how_it_went, "Exceptional! Offered next steps immediately.");
        assert.strictEqual(res.data.round_number, 1, "COALESCE must preserve round_number");
    });

    await runTest("PUT /notes/:id - Return 404 for non-existent note", async () => {
        const res = await request('/notes/999999', {
            method: 'PUT',
            body: { how_it_went: "Does not exist" }
        });
        assert.strictEqual(res.status, 404);
    });

    // ==========================================
    // MODULE 3: STUDY LOGS API (4 ENDPOINTS)
    // ==========================================
    console.log(`\n${colors.bold}▶ MODULE 3: Study Logs REST API${colors.reset}`);

    await runTest("POST /study-logs - Reject study log missing topic or hours (400)", async () => {
        const res = await request('/study-logs', {
            method: 'POST',
            body: { topic: "Node.js Streams" }
        });
        assert.strictEqual(res.status, 400);
    });

    await runTest("POST /study-logs - Successfully create study log entry (201)", async () => {
        const res = await request('/study-logs', {
            method: 'POST',
            body: {
                topic: "PostgreSQL Query Optimization & Indexing",
                hours_spent: 3.5,
                what_i_learned: "Analyzed EXPLAIN ANALYZE output and B-Tree vs GIN indexes",
                project_worked_on: "HuntFlow",
                confidence_level: 5
            }
        });
        assert.strictEqual(res.status, 201);
        assert.ok(res.data.id);
        assert.strictEqual(res.data.topic, "PostgreSQL Query Optimization & Indexing");
        assert.strictEqual(res.data.confidence_level, 5);
        createdStudyLogId = res.data.id;
    });

    await runTest("GET /study-logs - Retrieve list of study logs (200)", async () => {
        const res = await request('/study-logs');
        assert.strictEqual(res.status, 200);
        assert.ok(Array.isArray(res.data));
        assert.ok(res.data.some(log => log.id === createdStudyLogId));
    });

    await runTest("PUT /study-logs/:id - Update study log entry (200)", async () => {
        const res = await request(`/study-logs/${createdStudyLogId}`, {
            method: 'PUT',
            body: {
                hours_spent: 4.0,
                what_i_learned: "Mastered EXPLAIN ANALYZE and composite index order"
            }
        });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(Number(res.data.hours_spent), 4.0);
        assert.strictEqual(res.data.topic, "PostgreSQL Query Optimization & Indexing");
    });

    await runTest("PUT /study-logs/:id - Return 404 for updating non-existent study log", async () => {
        const res = await request('/study-logs/999999', {
            method: 'PUT',
            body: { hours_spent: 2 }
        });
        assert.strictEqual(res.status, 404);
    });

    await runTest("DELETE /study-logs/:id - Delete study log entry (200)", async () => {
        const res = await request(`/study-logs/${createdStudyLogId}`, {
            method: 'DELETE'
        });
        assert.strictEqual(res.status, 200);
        assert.ok(res.data.message);
    });

    await runTest("DELETE /study-logs/:id - Return 404 on deleting already deleted study log", async () => {
        const res = await request(`/study-logs/${createdStudyLogId}`, {
            method: 'DELETE'
        });
        assert.strictEqual(res.status, 404);
    });

    // ==========================================
    // MODULE 4: STATS & AGGREGATIONS API
    // ==========================================
    console.log(`\n${colors.bold}▶ MODULE 4: Analytics & Dashboard Stats API (1 ENDPOINT)${colors.reset}`);

    await runTest("GET /stats - Verify statistics structure and metric formulas (200)", async () => {
        const res = await request('/stats');
        assert.strictEqual(res.status, 200);
        
        const { overview, rates, byStatus, byPlatform, pendingFollowUps } = res.data;
        assert.ok(overview, "Stats must include overview");
        assert.ok(rates, "Stats must include rates");
        assert.ok(Array.isArray(byStatus), "Stats must include byStatus array");
        assert.ok(Array.isArray(byPlatform), "Stats must include byPlatform array");
        assert.ok(Array.isArray(pendingFollowUps), "Stats must include pendingFollowUps array");

        assert.ok(typeof overview.total === 'number');
        assert.ok(typeof rates.responseRate === 'number');
        assert.ok(typeof rates.interviewRate === 'number');
        assert.ok(typeof rates.offerRate === 'number');
        assert.ok(overview.total >= 2, `Total applications should be at least 2, got ${overview.total}`);
    });

    // ==========================================
    // MODULE 5: REFERENTIAL INTEGRITY & CASCADE DELETE
    // ==========================================
    console.log(`\n${colors.bold}▶ MODULE 5: Referential Integrity & Cascade Deletion${colors.reset}`);

    await runTest("DELETE /applications/:id - Cascade delete parent application and child notes (200)", async () => {
        // Stripe has createdNoteId attached
        const res = await request(`/applications/${createdAppId}`, {
            method: 'DELETE'
        });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.data.id, createdAppId);
    });

    await runTest("Verify 0 orphaned child notes in database after parent deletion (No Ghosts)", async () => {
        const notesRes = await request(`/applications/${createdAppId}/notes`);
        assert.strictEqual(notesRes.status, 200);
        assert.strictEqual(notesRes.data.length, 0, "No notes should remain for deleted application");

        const directNoteRes = await request(`/notes/${createdNoteId}`, {
            method: 'PUT',
            body: { how_it_went: "Ghost check" }
        });
        assert.strictEqual(directNoteRes.status, 404, "Child note must be cascaded and completely removed from database");
    });

    await runTest("DELETE /applications/:id - Clean up second test application (200)", async () => {
        const res = await request(`/applications/${secondAppId}`, {
            method: 'DELETE'
        });
        assert.strictEqual(res.status, 200);
    });

    // ==========================================
    // SUMMARY REPORT
    // ==========================================
    console.log(`\n${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}`);
    console.log(`${colors.bold}E2E TEST SUMMARY:${colors.reset}`);
    console.log(`  ${colors.green}Total Passed: ${totalPassed}${colors.reset}`);
    console.log(`  ${totalFailed === 0 ? colors.green : colors.red}Total Failed: ${totalFailed}${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}\n`);

    if (totalFailed > 0) {
        process.exitCode = 1;
    }
}

main().catch(err => {
    console.error("\n💥 Fatal error in test runner:", err);
    process.exit(1);
});
