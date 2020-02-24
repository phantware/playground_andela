import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db';
import { createEmployee, findIfEmployeeExist } from '../insertqueries/sql';
import Employee from '../models/Employee';

const Employees = {
  async getEmployees(req, res) {
    const result = await Employee.findAll().catch((err) => {
      res.statu(404).send({
        message: 'failure',
        users: err.message,
      });
    });
    if (result) {
      res.status(200).send({
        message: 'success',
        users: result.rows,
      });
    }
  },

  async createEmployee(req, res) {
    if (req.body.decoded.jobrole !== 'admin') {
      return res.status(403).send('Only admin can create employee account');
    }
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
    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const values = [
      username,
      firstname,
      lastname,
      email,
      hashPassword,
      gender,
      jobrole,
      department,
      address,
    ];
    try {
      const { rows } = await pool.query(createEmployee, values);
      const { id } = rows[0];
      return res.status(200).send({
        status: 'Success',
        data: {
          id,
          username,
          hashPassword,
          message: 'Account successfully created',
        },
      });
    } catch (error) {
      return res.status(404).send({
        message: 'failed to create user',
        error: error.message,
      });
    }
  },
  async employeeSignIn(req, res) {
    const { email, password } = req.body;
    const value = [email.toLowerCase()];
    // const query = {
    //   text: 'SELECT * FROM employees WHERE email = $1',
    //   values: [email],
    // };

    // const {
    //   rows: [{ password: hashPassword } = {}],
    //   rowCount,
    // }
    const employeeRes = await pool.query(findIfEmployeeExist, value);

    if (!employeeRes.rowCount) {
      return res.status(400).send({
        message: 'Invalid email or password',
      });
    }

    const validatePassword = await bcrypt.compare(password, employeeRes.rows[0].password);

    const { id, email: e, jobrole } = employeeRes.rows[0];
    const payload = { id, e, jobrole };
    const token = jwt.sign(payload, 'AndelaPrivateKey');
    if (validatePassword) {
      return res
        .status(400)
        .header('x-auth-token', token)
        .send({
          message: 'Your login was successful password',
          // data: queryRes,
        });
    }

    return res.status(200).send({
      message: 'Invalid username of password...',
    });
  },
  async deleteUser(req, res) {
    const { employeeId } = req.params;
    console.log(employeeId, typeof employeeId, Number(employeeId));
    const deleteQuery = {
      text: 'DELETE FROM employees WHERE id=$1',
      values: [employeeId],
    };
    const queryRes = await pool.query(deleteQuery).catch(() => res.status(400).send({
      message: 'Please check your input',
    }));

    if (queryRes.rowCount === 0) {
      res.status(404).send({
        message: 'NO user found',
      });
      return;
    }
    res.status(200).send({
      message: 'User was successfully deleted',
    });
  },
};

export default Employees;
