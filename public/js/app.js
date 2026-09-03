let currentPage = 'dashboard';
let applications = [];
let studylogs = [];
let stats = null;
let statusChartInstance = null;

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
    console.log("Loading Applications...");
}

async function loadStudyLogs() {
    console.log("Loading Study Logs....");
}

function showPage(pageName) {
    const sections = document.querySelectorAll('main section');

    sections.forEach(item => {
        item.style.display = 'none'
    });

    const activePage = document.getElementById(pageName)
    if (activePage) {
        activePage.style.display = 'block';
    }

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
                backgroundColor: '#4f46e5',
                borderRadius: 6,
                maxBarThickness: 48
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 4,
                    ticks: { stepSize: 1 }
                },
                x: {
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

document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboard');
});