import express from 'express';
import employeesController from '../controllers/employees';
import employeeMiddleware from '../middleware/employees';
import authToken from '../middleware/auth';

const router = express.Router();

router.get('/', employeesController.getEmployees);
// Private Route
router.post('/', employeeMiddleware.createEmployee, authToken, employeesController.createEmployee);
router.post('/login', employeeMiddleware.employeeSignIn, employeesController.employeeSignIn);
router.delete('/:employeeId', employeesController.deleteUser);

export default router;
