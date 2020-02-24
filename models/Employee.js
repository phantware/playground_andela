import pool from '../config/db';

class Employee {
  static async findAll() {
    const query = {
      text: 'SELECT * FROM employees',
    };
    return pool.query(query);
  }
}

export default Employee;
