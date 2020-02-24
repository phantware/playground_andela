import express from 'express';
import employeesRouter from './routes/employee';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/employees/', employeesRouter);

export default app;
