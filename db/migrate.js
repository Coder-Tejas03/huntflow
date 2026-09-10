const fs = require('fs');
const path = require('path');
const pool = require('../src/config/db');

async function runMigration() {
    console.log("🚀 Starting database migration...");
    try {
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log(`📄 Reading schema from ${schemaPath}...`);
        console.log("⏳ Executing DDL statements against target database...");

        await pool.query(schemaSql);

        console.log("✅ Schema migration executed successfully!");
        console.log("   - Created tables: 'applications', 'interview_notes', 'study_logs'");
        console.log("   - Applied primary keys, foreign keys with ON DELETE CASCADE, CHECK constraints, and defaults.");
    } catch (err) {
        console.error("❌ Migration failed with error:", err.message);
        process.exitCode = 1;
    } finally {
        await pool.end();
        console.log("🔌 Database connection closed.");
    }
}

runMigration();
