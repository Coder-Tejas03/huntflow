const express = require('express');
const app = express();

// Built in middleware for parsing JSON bodies
app.use(express.json());

// Serve static files from 'public'
app.use(express.static('public'));

// Import and mount routes
const applicationsRouter = require('./src/routes/applications');
app.use('/api/v1/applications', applicationsRouter);

const interviewNotesRouter = require('./src/routes/interviewNotes');
app.use('/api/v1', interviewNotesRouter);

const studyLogsRouter = require('./src/routes/studyLogs');
app.use('/api/v1', studyLogsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Starting the server on port ${PORT}`);
});
