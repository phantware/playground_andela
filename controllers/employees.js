import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Employee from '../models/Employee';

class Employees {
  static async getEmployees(req, res) {
    const result = await Employee.findAll().catch((err) => {
      res.status(404).send({
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
  }

  static async createEmployee(req, res) {
    if (req.body.decoded.jobrole !== 'admin') {
      return res.status(403).send('Only admin can create employee account');
    }

    try {
      const emp = new Employee(req.body);
      const {
        rows: [{ id, username }],
      } = await emp.save();
      return res.status(200).send({
        status: 'Success',
        data: {
          id,
          username,
          message: 'Account successfully created',
        },
      });
    } catch (error) {
      return res.status(404).send({
        message: 'failed to create user',
        error: error.message,
      });
    }
  }

  static async employeeSignIn(req, res) {
    const { email, password } = req.body;
    const employeeRes = await Employee.findAll({ email });
    if (!employeeRes.rowCount) {
      return res.status(400).send({
        message: 'Invalid email or password',
      });
    }
    const isValidPassword = await bcrypt.compare(password, employeeRes.rows[0].password);
    if (!isValidPassword) {
      return res.status(400).send({
        message: 'Invalid email or password',
      });
    }

    const { id, jobrole } = employeeRes.rows[0];
    const payload = { id, email, jobrole };
    const token = jwt.sign(payload, 'AndelaPrivateKey');

    return res
      .status(200)
      .header('x-auth-token', token)
      .send({
        message: 'Your login was successful password',
      });
  }

  static async deleteUser(req, res) {
    const { employeeId: id } = req.params;
    const queryRes = await Employee.deleteById(id).catch(() => res.status(400).send({
      message: 'Please check your input',
    }));
    console.log(queryRes);
    if (queryRes.rowCount === 0) {
      return res.status(404).send({
        message: 'NO user found',
      });
    }
    return res.status(200).send({
      message: 'User was successfully deleted',
    });
  }
}

export default Employees;
