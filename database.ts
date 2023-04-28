import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection pool for the PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Utility function to execute queries
const query = async (text: string, params?: any[]) => {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query:', { text, duration, rows: res.rowCount });
    return res;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
};

// Export the query function for use in other parts of the application
export default {
  query,
};
