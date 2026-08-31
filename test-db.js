const pool = require('./src/config/db');

async function testConnection() {
    try{
        const result = await pool.query('SELECT * FROM applications WHERE id = $1', [2]);
        console.log("Successfully connected to PostgreSQL!");
        
        console.log(`Found ${result.rowCount} applications`);
        
        console.log(result.rows);
    } catch (err){
        console.error("Database connection error:", err.message);
    } finally {
        await pool.end();
    }

}

testConnection();