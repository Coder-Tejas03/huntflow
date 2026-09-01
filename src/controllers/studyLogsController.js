const pool = require('../config/db');

// GET /api/vi/study-logs
const getAllStudyLogs = async (req, res) => {
    try {
        const { date } = req.query;

        let query = "SELECT * FROM study_logs";
        const values = [];
        const conditions = [];

        if (date) {
            values.push(date);
            conditions.push(`log_date = $${values.length}`);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY log_date DESC, created_at DESC';

        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error("Error in getAllStudyLogs: ", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// POST /api/v1/study-logs
const createStudyLog = async (req, res) => {
    try {
        const {
            log_date,
            topic,
            hours_spent,
            what_i_learned,
            project_worked_on,
            confidence_level
        } = req.body;

        if (!topic || !hours_spent) {
            return res.status(400).json({ error: "topic and hours_spent are required fields" });
        }

        const query = `
        INSERT INTO study_logs (log_date, topic, hours_spent, what_i_learned, project_worked_on, confidence_level)
        VALUES(COALESCE($1, CURRENT_DATE), $2, $3, $4, $5, $6)
        RETURNING *
    `;

        const values = [
            log_date || null,
            topic,
            hours_spent,
            what_i_learned || null,
            project_worked_on || null,
            confidence_level || null
        ];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error in createStudyLog: ", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// PUT /api/v1/study-logs/:id
const updateStudyLog = async (req, res) => {
    try {
        const { id } = req.params;
        const { log_date, topic, hours_spent, what_i_learned, project_worked_on, confidence_level } = req.body;

        const query = `
            UPDATE study_logs 
            SET 
                log_date = COALESCE($1, log_date),
                topic = COALESCE($2, topic),
                hours_spent = COALESCE($3, hours_spent),
                what_i_learned = COALESCE($4, what_i_learned),
                project_worked_on = COALESCE($5, project_worked_on),
                confidence_level = COALESCE($6, confidence_level)
            WHERE id = $7
            RETURNING *
        `;

        const values = [
            log_date || null,
            topic || null,
            hours_spent || null,
            what_i_learned || null,
            project_worked_on || null,
            confidence_level || null,
            id
        ];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Study Log not found" });
        }

        res.json(result.rows[0]);

    } catch (err) {
        console.error("Error in updateStudyLog: ", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// DELETE /api/v1/study-logs/:id
const deleteStudyLog = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('DELETE FROM study_logs WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Study Log not found" });
        }

        res.json({ message: "Study Log deleted successfully", id: Number(id) });
    } catch (err) {
        console.error("Error in deleteStudyLog: ", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    getAllStudyLogs,
    createStudyLog,
    updateStudyLog,
    deleteStudyLog,
}