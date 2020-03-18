import express from 'express';
import employeesRouter from './routes/employee';
import articleRouter from './routes/article';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/employees', employeesRouter);
app.use('/articles', articleRouter);

export default app;
