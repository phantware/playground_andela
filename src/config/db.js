import './index';

const { Pool } = require('pg');

const { CONNECTION_STRING: connectionString } = process.env;

const pool = new Pool({ connectionString });

export default pool;
