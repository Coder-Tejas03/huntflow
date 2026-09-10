let currentPage = 'dashboard';
let applications = [];
let studylogs = [];
let stats = null;
let statusChartInstance = null;
let currentEditingAppId = null;
let currentDetailAppId = null;
let currentEditingStudyLogId = null;

async function loadDashboard() {
    try {
        console.log("Loading Dashboard...");
        stats = await getStats();
        applications = await getApplications()

        renderStatCards(stats.overview);
        renderRateCards(stats.rates);
        renderStatusChart(stats.byStatus);
        renderPendingFollowUps(stats.pendingFollowUps);
        renderRecentActivity(applications);

    } catch (err) {
        console.error("Failed to load dashboard:", err);
    }
}

async function loadApplications() {
    try {
        console.log("Loading Applications...");
        applications = await getApplications();
        renderApplicationsTable(applications);
    } catch (err) {
        console.error("Failed to load applications: ", err);
    }
}

async function loadStudyLogs() {
    try {
        console.log("Loading Study Logs...");
        studylogs = await getStudyLogs();
        renderStudyLogStats(studylogs);
        renderStudyLogs(studylogs);
    } catch (err) {
        console.error("Failed to load study logs: ", err);
    }
}

function showPage(pageName) {
    const sections = document.querySelectorAll('main section');

    sections.forEach(item => {
        item.style.display = 'none';
    });

    const activePage = document.getElementById(pageName);
    if (activePage) {
        activePage.style.display = 'block';
    }

    // Update active nav link
    document.querySelectorAll('nav a').forEach(a => {
        const onclickAttr = a.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${pageName}'`)) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });

    currentPage = pageName;

    if (pageName === 'dashboard') {
        loadDashboard();
    } else if (pageName === 'applications') {
        loadApplications();
    } else if (pageName === 'studylog') {
        loadStudyLogs();
    }
}

function renderStatCards(overview) {
    const container = document.getElementById('stat-cards');
    if (!container || !overview) return;

    container.innerHTML = `
        <div class="stat-card total">
            <span class="stat-label">Total Applications</span>
            <span class="stat-value">${overview.total}</span>
        </div>

        <div class="stat-card active">
            <span class="stat-label">Active Applications</span>
            <span class="stat-value">${overview.active}</span>
        </div>

        <div class="stat-card offers">
            <span class="stat-label">Total Offers</span>
            <span class="stat-value">${overview.offers}</span>
        </div>

        <div class="stat-card rejected">
            <span class="stat-label">Rejected Applications</span>
            <span class="stat-value">${overview.rejected}</span>
        </div>
    `;

}

function renderRateCards(rates) {
    const container = document.getElementById('rate-cards');
    if (!container || !rates) return

    container.innerHTML = `
        <div class="rate-card response">
            <div class="rate-title">Response Rate</div>
            <div class="rate-value">${rates.responseRate}%</div>
            <div class="rate-sub">Applications with response</div>
        </div>

        <div class="rate-card interview">
            <div class="rate-title">Interview Rate</div>
            <div class="rate-value">${rates.interviewRate}%</div>
            <div class="rate-sub">Reached interview stage</div>
        </div>

        <div class="rate-card offer">
            <div class="rate-title">Offer Rate</div>
            <div class="rate-value">${rates.offerRate}%</div>
            <div class="rate-sub">Converted to offers</div>
        </div>
    `;
}

function renderStatusChart(byStatus) {
    const canvas = document.getElementById('status-chart');
    if (!canvas || !byStatus) return;

    if (statusChartInstance) {
        statusChartInstance.destroy();
    }

    const labels = byStatus.map(item => item.status);
    const counts = byStatus.map(item => item.count);

    const ctx = canvas.getContext('2d');
    statusChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Applications',
                data: counts,
                backgroundColor: '#6366f1',
                hoverBackgroundColor: '#4f46e5',
                borderRadius: 8,
                borderSkipped: false,
                maxBarThickness: 44
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#0f172a',
                    titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: '600' },
                    bodyFont: { family: 'JetBrains Mono', size: 13 },
                    padding: 10,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 4,
                    ticks: {
                        stepSize: 1,
                        font: { family: 'JetBrains Mono', size: 11 },
                        color: '#94a3b8'
                    },
                    grid: {
                        color: '#f1f5f9',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' },
                        color: '#64748b'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderPendingFollowUps(pendingFollowUps) {
    const container = document.getElementById('pending-followups');
    if (!container || !pendingFollowUps) return;

    // Empty state
    if (pendingFollowUps.length === 0) {
        container.innerHTML = `
            <div class="empty-state">🎉 No pending follow-ups! You're all caught up.</div>
        `;
        return;
    }

    // Non Empty state
    container.innerHTML = pendingFollowUps.map(app => `
        <div class="followup-items">
            <div class="followup-info">
                <h4>${app.company_name}</h4>
                <p>${app.role} • Applied: ${app.date_applied.slice(0, 10)}</p>
            </div>
            <span class="badge badge-warning">${app.status}</span>
        </div>
    `).join('');
}

function renderRecentActivity(applications) {
    const container = document.getElementById('recent-activity');
    if (!container || !applications) return;

    // Empty state
    if (applications.length === 0) {
        container.innerHTML = `
            <div class="empty-state">No recent activity yet!</div>
        `;
        return;
    }

    // Non Empty state
    container.innerHTML = applications.map(apps => `
        <div class="activity-item">
            <div class="activity-left">
                <span class="activity-dot"></span>
                <div class="activity-text">
                    <strong>${apps.company_name}</strong> — ${apps.role} (${apps.status})
                </div>
            </div>
            <span class="activity-time">${apps.date_applied.slice(0, 10)}</span>
        </div>
    `).join('');
}

function needsFollowUp(app) {
    if (app.status !== 'Applied') return false;
    const appliedDate = new Date(app.date_applied);
    const today = new Date();
    const diffDays = (today - appliedDate) / (1000 * 60 * 60 * 24);
    return diffDays > 7;
}

function renderApplicationsTable(apps) {
    const container = document.getElementById('app-table-container');
    if (!container || !apps) return;
    if (apps.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No applications found. Click <strong>+ Add Application</strong> to create your first one!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <table class="app-table">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Platform</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${apps.map(app => {
        const statusClass = app.status.toLowerCase().replace(/ /g, '-');
        const showBadge = needsFollowUp(app);
        const formattedDate = app.date_applied.slice(0, 10);
        return `
                        <tr>
                            <td>
                                <a href="javascript:void(0)" onclick="openApplicationDetail(${app.id})" class="app-company-link">
                                    <strong>${app.company_name}</strong>
                                </a>
                                ${showBadge ? '<span class="badge badge-warning" style="margin-left: 6px;">Follow-up</span>' : ''}
                            </td>
                            <td>${app.role}</td>
                            <td><span class="platform-tag">${app.platform}</span></td>
                            <td>${formattedDate}</td>
                            <td><span class="status-badge status-${statusClass}">${app.status}</span></td>
                            <td class="table-actions">
                                <button class="btn-sm btn-primary" onclick="openApplicationDetail(${app.id})">Notes</button>
                                <button class="btn-sm btn-outline" onclick="handleEdit(${app.id})">Edit</button>
                                <button class="btn-sm btn-danger" onclick="handleDelete(${app.id})">Delete</button>
                            </td>
                        </tr>
                    `;
    }).join('')}
            </tbody>
        </table>
    `;

}

async function applyFilters() {
    try {
        const search = document.getElementById('search-input').value.trim();
        const status = document.getElementById('filter-status').value;
        const platform = document.getElementById('filter-platform').value;

        const filters = {};
        if (search) filters.search = search;
        if (status) filters.status = status;
        if (platform) filters.platform = platform;

        const filteredApps = await getApplications(filters);
        renderApplicationsTable(filteredApps);
    } catch (err) {
        console.error("Failed to apply filters:", err);
    }
}

function clearFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('filter-status').value = '';
    document.getElementById('filter-platform').value = '';
    loadApplications();
}

function showAddForm() {
    currentEditingAppId = null;
    const form = document.getElementById('app-form');
    if (form) form.reset();

    const titleEl = document.getElementById('form-title');
    if (titleEl) titleEl.textContent = 'Add New Application';

    const saveBtn = document.getElementById('btn-save-app');
    if (saveBtn) saveBtn.textContent = 'Save Application';

    // Default date to today
    const dateInput = document.getElementById('date-applied');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    const panel = document.getElementById('app-form-panel');
    if (panel) {
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function hideForm() {
    const panel = document.getElementById('app-form-panel');
    if (panel) panel.style.display = 'none';

    const form = document.getElementById('app-form');
    if (form) form.reset();

    currentEditingAppId = null;
}

async function handleEdit(id) {
    try {
        let app = applications.find(a => a.id === id);
        if (!app) {
            app = await getApplication(id);
        }
        if (!app) return;

        currentEditingAppId = id;

        // Populate fields
        document.getElementById('company-name').value = app.company_name || '';
        document.getElementById('role').value = app.role || '';
        document.getElementById('platform').value = app.platform || 'LinkedIn';
        document.getElementById('job-link').value = app.job_link || '';
        document.getElementById('date-applied').value = app.date_applied ? app.date_applied.slice(0, 10) : '';
        document.getElementById('status').value = app.status || 'Applied';
        document.getElementById('salary-offered').value = app.salary_offered || '';
        document.getElementById('notes').value = app.notes || '';

        // Switch to edit mode UI
        const titleEl = document.getElementById('form-title');
        if (titleEl) titleEl.textContent = 'Edit Application';

        const saveBtn = document.getElementById('btn-save-app');
        if (saveBtn) saveBtn.textContent = 'Update Application';

        const panel = document.getElementById('app-form-panel');
        if (panel) {
            panel.style.display = 'block';
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } catch (err) {
        console.error('Failed to prepare application for edit:', err);
    }
}

async function handleDelete(id) {
    try {
        const app = applications.find(a => a.id === id);
        const name = app ? app.company_name : 'this application';
        const confirmed = confirm(`Are you sure you want to delete the application for "${name}"?\nThis will also remove any interview notes.`);
        if (!confirmed) return;

        await deleteApplication(id);
        await loadApplications();
    } catch (err) {
        console.error('Failed to delete application:', err);
        alert('Could not delete application. Please try again.');
    }
}

function initAppForm() {
    const form = document.getElementById('app-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const payload = {
            company_name: document.getElementById('company-name').value.trim(),
            role: document.getElementById('role').value.trim(),
            platform: document.getElementById('platform').value,
            job_link: document.getElementById('job-link').value.trim() || null,
            date_applied: document.getElementById('date-applied').value,
            status: document.getElementById('status').value,
            salary_offered: document.getElementById('salary-offered').value.trim() || null,
            notes: document.getElementById('notes').value.trim() || null
        };

        try {
            if (currentEditingAppId) {
                await updateApplication(currentEditingAppId, payload);
            } else {
                await createApplication(payload);
            }

            hideForm();
            await loadApplications();
        } catch (err) {
            console.error('Failed to save application:', err);
            alert('Failed to save application. Please check input fields.');
        }
    });
}

// =============================================================================
// Application Detail & Interview Notes
// =============================================================================

async function openApplicationDetail(appId) {
    try {
        let app = applications.find(a => a.id === appId);
        if (!app) {
            app = await getApplication(appId);
        }
        if (!app) return;

        currentDetailAppId = appId;

        // Populate header
        document.getElementById('modal-app-company').textContent = app.company_name;
        document.getElementById('modal-app-role').textContent = app.role;

        const statusEl = document.getElementById('modal-app-status');
        const statusClass = app.status.toLowerCase().replace(/ /g, '-');
        statusEl.className = `status-badge status-${statusClass}`;
        statusEl.textContent = app.status;

        // Populate metadata
        document.getElementById('modal-app-platform').textContent = app.platform;
        document.getElementById('modal-app-date').textContent = app.date_applied ? app.date_applied.slice(0, 10) : '-';
        document.getElementById('modal-app-salary').textContent = app.salary_offered || 'Not specified';

        const linkEl = document.getElementById('modal-app-link');
        if (app.job_link) {
            linkEl.innerHTML = `<a href="${app.job_link}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">View Posting ↗</a>`;
        } else {
            linkEl.textContent = 'None';
        }

        const notesRow = document.getElementById('modal-app-notes-row');
        const notesEl = document.getElementById('modal-app-notes');
        if (app.notes && app.notes.trim()) {
            notesEl.textContent = app.notes;
            notesRow.style.display = 'flex';
        } else {
            notesRow.style.display = 'none';
        }

        // Reset note form panel
        hideAddNoteForm();

        // Load interview notes
        await loadInterviewNotes(appId);

        // Show modal
        const modal = document.getElementById('app-detail-modal');
        if (modal) modal.style.display = 'flex';
    } catch (err) {
        console.error('Failed to open application detail:', err);
    }
}

function closeApplicationDetail() {
    const modal = document.getElementById('app-detail-modal');
    if (modal) modal.style.display = 'none';
    currentDetailAppId = null;
    hideAddNoteForm();
}

async function loadInterviewNotes(appId) {
    try {
        const notes = await getNotesByApplication(appId);
        renderInterviewNotes(notes);
    } catch (err) {
        console.error('Failed to load interview notes:', err);
    }
}

function renderInterviewNotes(notes) {
    const container = document.getElementById('notes-list-container');
    if (!container) return;

    if (!notes || notes.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No interview notes recorded yet. Click <strong>+ Add Round Note</strong> above to track questions and feedback!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = notes.map(note => {
        const dateFormatted = note.note_date ? note.note_date.slice(0, 10) : '';
        return `
            <div class="note-card">
                <div class="note-card-top">
                    <div>
                        <span class="round-tag">Round ${note.round_number}</span>
                        ${dateFormatted ? `<span class="note-date-tag" style="margin-left: 8px;">• ${dateFormatted}</span>` : ''}
                    </div>
                    ${note.how_it_went ? `<span class="note-assessment-pill">${note.how_it_went}</span>` : ''}
                </div>

                <div class="note-block">
                    <div class="note-block-label">Questions Asked</div>
                    <div class="note-block-content">${note.questions_asked}</div>
                </div>

                ${note.my_answers ? `
                    <div class="note-block">
                        <div class="note-block-label">My Answers / Approach</div>
                        <div class="note-block-content">${note.my_answers}</div>
                    </div>
                ` : ''}

                ${note.to_revise ? `
                    <div class="note-block">
                        <div class="note-block-label">Topics to Revise</div>
                        <div class="note-block-content">${note.to_revise}</div>
                    </div>
                ` : ''}

                <div class="note-actions">
                    <button type="button" class="btn-sm btn-danger" onclick="handleDeleteNote(${note.id})">Delete Note</button>
                </div>
            </div>
        `;
    }).join('');
}

function showAddNoteForm() {
    const panel = document.getElementById('note-form-panel');
    const form = document.getElementById('interview-note-form');
    if (form) form.reset();

    const dateInput = document.getElementById('note-date');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    if (panel) {
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function hideAddNoteForm() {
    const panel = document.getElementById('note-form-panel');
    if (panel) panel.style.display = 'none';
    const form = document.getElementById('interview-note-form');
    if (form) form.reset();
}

async function handleDeleteNote(noteId) {
    try {
        const confirmed = confirm('Are you sure you want to delete this interview note?');
        if (!confirmed) return;

        await deleteNote(noteId);
        if (currentDetailAppId) {
            await loadInterviewNotes(currentDetailAppId);
        }
    } catch (err) {
        console.error('Failed to delete note:', err);
        alert('Could not delete note. Please try again.');
    }
}

function initInterviewNoteForm() {
    const form = document.getElementById('interview-note-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!currentDetailAppId) return;

        const payload = {
            round_number: parseInt(document.getElementById('note-round').value, 10),
            note_date: document.getElementById('note-date').value || null,
            questions_asked: document.getElementById('note-questions').value.trim(),
            my_answers: document.getElementById('note-answers').value.trim() || null,
            to_revise: document.getElementById('note-revise').value.trim() || null,
            how_it_went: document.getElementById('note-assessment').value.trim() || null
        };

        try {
            await createNote(currentDetailAppId, payload);
            hideAddNoteForm();
            await loadInterviewNotes(currentDetailAppId);
        } catch (err) {
            console.error('Failed to save note:', err);
            alert('Failed to save interview note.');
        }
    });
}

// =============================================================================
// Study Log Logic
// =============================================================================

function calculateStreak(logs) {
    if (!logs || logs.length === 0) return 0;

    // Unique dates (YYYY-MM-DD)
    const dates = Array.from(new Set(logs.map(l => l.log_date.slice(0, 10)))).sort().reverse();
    if (dates.length === 0) return 0;

    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    // Must have studied today or yesterday to have an active streak
    if (dates[0] !== todayStr && dates[0] !== yesterdayStr) {
        return 0;
    }

    let streak = 1;
    let currentDate = new Date(dates[0]);

    for (let i = 1; i < dates.length; i++) {
        const prevDate = new Date(dates[i]);
        const diffDays = Math.round((currentDate - prevDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            streak++;
            currentDate = prevDate;
        } else if (diffDays === 0) {
            continue;
        } else {
            break;
        }
    }

    return streak;
}

function renderStudyLogStats(logs) {
    if (!logs) return;

    const totalHours = logs.reduce((acc, log) => acc + (parseFloat(log.hours_spent) || 0), 0);
    const uniqueDays = new Set(logs.map(l => l.log_date.slice(0, 10))).size;
    const avgHours = uniqueDays > 0 ? (totalHours / uniqueDays).toFixed(1) : '0.0';
    const streak = calculateStreak(logs);

    const totalEl = document.getElementById('stat-study-total');
    if (totalEl) totalEl.textContent = `${totalHours.toFixed(1)} hrs`;

    const avgEl = document.getElementById('stat-study-avg');
    if (avgEl) avgEl.textContent = `${avgHours} hrs`;

    const streakEl = document.getElementById('stat-study-streak');
    if (streakEl) streakEl.textContent = `${streak} ${streak === 1 ? 'day' : 'days'}`;
}

function updateConfidenceReadout(val) {
    const readout = document.getElementById('confidence-readout');
    if (!readout) return;

    const labels = {
        '1': '1 / 5 (Struggling)',
        '2': '2 / 5 (Need Practice)',
        '3': '3 / 5 (Moderate)',
        '4': '4 / 5 (Confident)',
        '5': '5 / 5 (Mastered)'
    };

    readout.textContent = labels[val] || `${val} / 5`;
}

function renderStudyLogs(logs) {
    const container = document.getElementById('studylog-list-container');
    if (!container) return;

    if (!logs || logs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No study logs recorded yet. Click <strong>+ Add Entry</strong> above to start tracking your daily progress!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = logs.map(log => {
        const formattedDate = log.log_date ? log.log_date.slice(0, 10) : '';
        const confidenceLabel = log.confidence_level ? `★ Confidence: ${log.confidence_level}/5` : '';

        return `
            <div class="studylog-card">
                <div class="studylog-card-header">
                    <div>
                        <h4 class="studylog-topic">${log.topic}</h4>
                        <div class="studylog-meta-row">
                            <span class="studylog-date">${formattedDate}</span>
                            <span class="studylog-badge studylog-hours">${log.hours_spent} hrs</span>
                            ${log.project_worked_on ? `<span class="studylog-badge studylog-project">${log.project_worked_on}</span>` : ''}
                            ${confidenceLabel ? `<span class="confidence-badge">${confidenceLabel}</span>` : ''}
                        </div>
                    </div>
                </div>

                ${log.what_i_learned ? `
                    <div class="studylog-learned">${log.what_i_learned}</div>
                ` : ''}

                <div class="studylog-card-actions">
                    <button class="btn-sm btn-outline" onclick="handleEditStudyLog(${log.id})">Edit</button>
                    <button class="btn-sm btn-danger" onclick="handleDeleteStudyLog(${log.id})">Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function showAddStudyLogForm() {
    currentEditingStudyLogId = null;
    const form = document.getElementById('studylog-form');
    if (form) form.reset();

    const titleEl = document.getElementById('studylog-form-title');
    if (titleEl) titleEl.textContent = 'Add Study Log Entry';

    const saveBtn = document.getElementById('btn-save-log');
    if (saveBtn) saveBtn.textContent = 'Save Entry';

    const dateInput = document.getElementById('log-date');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    const slider = document.getElementById('log-confidence');
    if (slider) {
        slider.value = '3';
        updateConfidenceReadout('3');
    }

    const panel = document.getElementById('studylog-form-panel');
    if (panel) {
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function hideAddStudyLogForm() {
    const panel = document.getElementById('studylog-form-panel');
    if (panel) panel.style.display = 'none';

    const form = document.getElementById('studylog-form');
    if (form) form.reset();

    currentEditingStudyLogId = null;
}

async function handleEditStudyLog(id) {
    try {
        const log = studylogs.find(l => l.id === id);
        if (!log) return;

        currentEditingStudyLogId = id;

        document.getElementById('log-topic').value = log.topic || '';
        document.getElementById('log-hours').value = log.hours_spent || '';
        document.getElementById('log-date').value = log.log_date ? log.log_date.slice(0, 10) : '';
        document.getElementById('log-project').value = log.project_worked_on || '';
        document.getElementById('log-learned').value = log.what_i_learned || '';

        const confidenceVal = log.confidence_level ? String(log.confidence_level) : '3';
        const slider = document.getElementById('log-confidence');
        if (slider) {
            slider.value = confidenceVal;
            updateConfidenceReadout(confidenceVal);
        }

        const titleEl = document.getElementById('studylog-form-title');
        if (titleEl) titleEl.textContent = 'Edit Study Log Entry';

        const saveBtn = document.getElementById('btn-save-log');
        if (saveBtn) saveBtn.textContent = 'Update Entry';

        const panel = document.getElementById('studylog-form-panel');
        if (panel) {
            panel.style.display = 'block';
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } catch (err) {
        console.error('Failed to prepare study log for edit:', err);
    }
}

async function handleDeleteStudyLog(id) {
    try {
        const confirmed = confirm('Are you sure you want to delete this study log entry?');
        if (!confirmed) return;

        await deleteStudyLog(id);
        await loadStudyLogs();
    } catch (err) {
        console.error('Failed to delete study log:', err);
        alert('Could not delete study log. Please try again.');
    }
}

function initStudyLogForm() {
    const form = document.getElementById('studylog-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const payload = {
            topic: document.getElementById('log-topic').value.trim(),
            hours_spent: parseFloat(document.getElementById('log-hours').value),
            log_date: document.getElementById('log-date').value,
            project_worked_on: document.getElementById('log-project').value.trim() || null,
            confidence_level: parseInt(document.getElementById('log-confidence').value, 10) || null,
            what_i_learned: document.getElementById('log-learned').value.trim() || null
        };

        try {
            if (currentEditingStudyLogId) {
                await updateStudyLog(currentEditingStudyLogId, payload);
            } else {
                await createStudyLog(payload);
            }

            hideAddStudyLogForm();
            await loadStudyLogs();
        } catch (err) {
            console.error('Failed to save study log:', err);
            alert('Failed to save study log entry. Please check required fields.');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAppForm();
    initInterviewNoteForm();
    initStudyLogForm();

    // Close modal on backdrop click
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('app-detail-modal');
        if (e.target === modal) {
            closeApplicationDetail();
        }
    });

    // Close modal on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeApplicationDetail();
        }
    });

    showPage('dashboard');
});