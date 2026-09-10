require('dotenv').config();
const { Pool } = require('pg');

// Determine if SSL is required (e.g. on Render.com or any remote cloud database)
const isProduction = process.env.NODE_ENV === 'production';
const isRemoteDb = process.env.DATABASE_URL &&
    !process.env.DATABASE_URL.includes('localhost') &&
    !process.env.DATABASE_URL.includes('127.0.0.1');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: (isProduction || isRemoteDb) ? { rejectUnauthorized: false } : false
});

module.exports = pool;

