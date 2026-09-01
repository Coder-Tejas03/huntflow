const express = require('express');
const router = express.Router();
const interviewNotesController = require('../controllers/interviewNotesController');

router.get('/applications/:id/notes', interviewNotesController.getNotesByApplicationId);
router.post('/applications/:id/notes', interviewNotesController.createNote);
router.put('/notes/:id', interviewNotesController.updateNote);
router.delete('/notes/:id', interviewNotesController.deleteNote);

module.exports = router;