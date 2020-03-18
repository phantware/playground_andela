import bcrypt from 'bcryptjs';
import pool from '../config/db';

import { createEmployee } from '../insertqueries/sql';

class Employee {
  constructor(newEmployee) {
    Object.assign(this, newEmployee);
  }

  static async findAll(queryObject = {}) {
    let query;
    if (
      queryObject === null
      || typeof queryObject === 'function'
      || Array.isArray(queryObject)
      || typeof queryObject === 'string'
      || typeof queryObject === 'number'
    ) {
      throw TypeError('object is required');
    }
    if (queryObject.email) {
      query = {
        text: 'SELECT * FROM employees WHERE lower(email) = $1',
        values: [queryObject.email.toLowerCase()],
      };
    } else if (queryObject.id) {
      query = {
        text: 'SELECT * FROM employees  WHERE id = $1',
        values: [queryObject.id],
      };
    } else {
      query = {
        text: 'SELECT * FROM employees',
      };
    }

    return pool.query(query);
  }

  async save() {
    const {
      username,
      firstname,
      lastname,
      email,
      password,
      gender,
      jobrole,
      department,
      address,
    } = this;
    const values = [
      username,
      firstname,
      lastname,
      email,
      await bcrypt.hash(password, 10),
      gender,
      jobrole,
      department,
      address,
    ];

    return pool.query(createEmployee, values);
  }

  static async deleteById(employeeId) {
    const deleteQuery = {
      text: 'DELETE  FROM employees WHERE id = $1',
      values: [employeeId],
    };
    return pool.query(deleteQuery);
  }
}

export default Employee;
