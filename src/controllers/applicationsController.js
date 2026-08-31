const pool = require('../config/db');

// GET /api/v1/applications
const getAllApplications = async (req, res) => {
    try {
        const { status, platform, search } = req.query;

        let query = 'SELECT * FROM applications';
        const values = [];
        const conditions = [];

        if (status) {
            values.push(status);
            conditions.push(`status = $${values.length}`);
        }

        if (platform) {
            values.push(platform);
            conditions.push(`platform = $${values.length}`);
        }

        if (search) {
            values.push(`%${search}%`);
            // Enables insensitive search across company_name or role
            conditions.push(`(company_name ILIKE $${values.length} OR role ILIKE $${values.length})`);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY created_at DESC';

        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error("Error in getAllApplications:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

const getApplicationById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('SELECT * FROM applications WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Application not found!" });
        }
        res.json(result.rows[0]);

    } catch (err) {
        console.error("Error in getApplicationById:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

const createApplication = async (req, res) => {
    try {
        const {
            company_name,
            role,
            platform,
            job_link,
            date_applied,
            status,
            salary_offered,
            notes
        } = req.body;

        if (!company_name || !role || !platform) {
            return res.status(400).json({ error: "company_name, role, and platform are required fields!" });
        }

        const query = `
        INSERT INTO applications (company_name, role, platform, job_link, date_applied, status, salary_offered, notes) 
        Values ($1, $2, $3, $4, COALESCE($5, CURRENT_DATE), COALESCE($6, 'Applied'), $7, $8)
        RETURNING *
        `;

        const values = [
            company_name,
            role,
            platform,
            job_link || null,
            date_applied || null,
            status || null,
            salary_offered || null,
            notes || null
        ];

        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error in createApplication:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

const updateApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            company_name,
            role,
            platform,
            job_link,
            date_applied,
            status,
            salary_offered,
            notes
        } = req.body;

        const query = `
            UPDATE applications
            SET 
                company_name = COALESCE($1, company_name),
                role = COALESCE($2, role),
                platform = COALESCE($3, platform),
                job_link = COALESCE($4, job_link),
                date_applied = COALESCE($5, date_applied),
                status = COALESCE($6, status),
                salary_offered = COALESCE($7, salary_offered),
                notes = COALESCE($8, notes),
                updated_at = CURRENT_TIMESTAMP 
            WHERE id = $9
            RETURNING * 
        `;

        const values = [
            company_name || null,
            role || null,
            platform || null,
            job_link || null,
            date_applied || null,
            status || null,
            salary_offered || null,
            notes || null,
            id
        ];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "application not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error("Error in UpdateApplication:", err.message);
        res.status(500).json({ error: "Server Error" });
    }


};

const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('DELETE FROM applications WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.json({ message: "Application deleted successfully", id: Number(id) });

    } catch (err) {
        console.error("Error in deleteApplication:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    getAllApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication,
};