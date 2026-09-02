let currentPage = 'dashboard';
let applications = [];
let studylogs = [];
let stats = null;

async function loadDashboard() {
    console.log("Loading Dashboard...");
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

document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboard');
});