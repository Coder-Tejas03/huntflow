const pool = require('../config/db');

const getStats = async (req, res) => {
    try {
        // 1. Overview counts: total, active, offers, rejected
        const overviewQuery = `
            SELECT 
                COUNT(*) as total,
                COUNT(*) FILTER (WHERE status NOT IN ('Offer', 'Rejected', 'Withdrawn')) AS active,
                COUNT(*) FILTER (WHERE status = 'Offer') AS offers,
                COUNT(*) FILTER (WHERE status = 'Rejected') as rejected
            FROM applications;
        `;

        // 2. Breakdown by status
        const byStatusQuery = `
            SELECT status, COUNT(*) AS count
            FROM applications
            GROUP BY status
            ORDER BY count DESC;
        `;

        // 3. Breakdown by platform
        const byPlatformQuery = `
            SELECT platform, COUNT(*) as count
            FROM applications
            GROUP BY platform
            ORDER BY count DESC;
        `;

        // 4. Rate counters: total, responded, interviewed, offered
        const rateQuery = `
            SELECT 
                COUNT(*) AS total,
                COUNT(*) FILTER (WHERE status != 'Applied') AS responded,
                COUNT(*) FILTER (WHERE status ILIKE '%Interview%' OR status = 'Offer') AS interviewed,
                COUNT(*) FILTER (WHERE status = 'Offer') AS offered
            FROM applications;
        `;

        // 5. Pending follow-ups (no notes, applied > 7 days ago)
        const followUpQuery = `
            SELECT 
                a.id, 
                a.company_name,
                a.role,
                a.date_applied,
                a.status
            FROM applications a
            LEFT JOIN interview_notes n ON a.id = n.application_id
            WHERE n.id IS NULL
                AND a.date_applied < CURRENT_DATE - INTERVAL '7 days'
            ORDER BY a.date_applied ASC;
        `;

        const [overviewRes, byStatusRes, byPlatformRes, rateRes, followUpRes] = await Promise.all([
            pool.query(overviewQuery),
            pool.query(byStatusQuery),
            pool.query(byPlatformQuery),
            pool.query(rateQuery),
            pool.query(followUpQuery)
        ]);

        const overviewRow = overviewRes.rows[0];
        const overview = {
            total: parseInt(overviewRow.total, 10) || 0,
            active: parseInt(overviewRow.active, 10) || 0,
            offers: parseInt(overviewRow.offers, 10) || 0,
            rejected: parseInt(overviewRow.rejected, 10) || 0
        };

        const total = overview.total;
        const rateRow = rateRes.rows[0];
        const responded = parseInt(rateRow.responded, 10) || 0;
        const interviewed = parseInt(rateRow.interviewed, 10) || 0;
        const offered = parseInt(rateRow.offered, 10) || 0;

        const rates = {
            responseRate: total > 0 ? parseFloat(((responded / total) * 100).toFixed(1)) : 0,
            interviewRate: total > 0 ? parseFloat(((interviewed / total) * 100).toFixed(1)) : 0,
            offerRate: total > 0 ? parseFloat(((offered / total) * 100).toFixed(1)) : 0,
        };

        const byStatus = byStatusRes.rows.map(row => ({
            status: row.status,
            count: parseInt(row.count, 10)
        }));

        const byPlatform = byPlatformRes.rows.map(row => ({
            platform: row.platform,
            count: parseInt(row.count, 10)
        }));

        const pendingFollowUps = followUpRes.rows;

        res.status(200).json({
            overview,
            rates,
            byStatus,
            byPlatform,
            pendingFollowUps
        });

    } catch (err) {
        console.error("Error in getStats: ", err.message);
        res.status(500).json({ error: "Failed to retrieve statistics!" });
    }
};

module.exports = {
    getStats
};