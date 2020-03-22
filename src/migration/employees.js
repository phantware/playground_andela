import pool from '../config/db';

const employeesTable = `
DROP TABLE IF EXISTS employees CASCADE ;

CREATE TABLE IF NOT EXISTS employees (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR (130) NOT NULL,
    firstname VARCHAR (130) NOT NULL,
    lastname VARCHAR (130) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    gender VARCHAR (7) NOT NULL DEFAULT 'male',
    jobrole VARCHAR (100) NOT NULL DEFAULT 'admin',
    department VARCHAR (130) NOT NULL,
    address VARCHAR (130) NOT NULL 
);`;
const createEmployeesTable = async () => {
  await pool.query(employeesTable).then(() => console.log('Employes table created'));
};

export default createEmployeesTable;
