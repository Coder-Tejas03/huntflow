const pool = require('../config/db');

// GET /api/vi/applications/:id/notes
const getNotesByApplicationId = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('SELECT * FROM interview_notes WHERE application_id = $1 ORDER BY round_number ASC, created_at ASC', [id]);
        res.json(result.rows);

    } catch (err) {
        console.error("Error in getNotesByApplicationId: ", err.message);
        res.status(500).json({ error: "Server Error" });
    }
};

// POST /api/v1/applications/:id/notes
const createNote = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            round_number,
            note_date,
            questions_asked,
            my_answers,
            to_revise,
            how_it_went
        } = req.body;

        if (!round_number || !questions_asked) {
            return res.status(400).json({ error: "round_number and questions_asked are required!" });
        }

        const query = `
            INSERT INTO interview_notes (application_id, round_number, note_date, questions_asked, my_answers, to_revise, how_it_went)
            VALUES ($1, $2, COALESCE($3, CURRENT_DATE), $4, $5, $6, $7)
            RETURNING *
        `;

        const values = [
            id,
            round_number,
            note_date || null,
            questions_asked,
            my_answers || null,
            to_revise || null,
            how_it_went || null
        ];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error("Error in createNote: ", err.message);
        res.status(500).json({ error: "Server Error" });
    }
};

// PUT /api/v1/notes/:id
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            round_number,
            note_date,
            questions_asked,
            my_answers,
            to_revise,
            how_it_went
        } = req.body

        const query = `
            UPDATE interview_notes
            SET 
                round_number = COALESCE($1, round_number),
                note_date = COALESCE($2, note_date),
                questions_asked = COALESCE($3, questions_asked),
                my_answers = COALESCE($4, my_answers),
                to_revise = COALESCE($5, to_revise),
                how_it_went = COALESCE($6, how_it_went)
            WHERE id = $7
            RETURNING *
        `;

        const values = [
            round_number || null,
            note_date || null,
            questions_asked || null,
            my_answers || null,
            to_revise || null,
            how_it_went || null,
            id
        ];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Interview note not found" });
        }

        res.json(result.rows[0]);

    } catch (err) {
        console.error("Error in updateNote: ", err.message);
        res.status(500).json({ error: "Server Error" });
    }
}

// DELETE /api/v1/notes/:id
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('DELETE FROM interview_notes WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Interview note not found" });
        }
        res.json({ message: "Interview note deleted successfully", id: Number(id) });

    } catch (err) {
        console.error("Error in deleteNote:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    getNotesByApplicationId,
    createNote,
    updateNote,
    deleteNote
};