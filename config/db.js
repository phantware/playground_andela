const { Pool } = require('pg');

const connectionString = 'postgresql://postgres:postgres@localhost:5432/andela';

const pool = new Pool({ connectionString });

export default pool;
