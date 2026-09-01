const express = require('express');
const router = express.Router();
const studylogsController = require('../controllers/studyLogsController');

router.get('/study-logs', studylogsController.getAllStudyLogs);
router.post('/study-logs', studylogsController.createStudyLog);
router.put('/study-logs/:id', studylogsController.updateStudyLog);
router.delete('/study-logs/:id', studylogsController.deleteStudyLog);

module.exports = router;