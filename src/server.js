import app from './app';
import pool from './config/db';
import '../migration/index';

console.log(__dirname);
pool
  .query('SELECT 1')
  .then(() => {
    console.log('database connected succesfully');
    const port = process.env.PORT;
    app.listen(port, console.log(`App is listening at ${port}`));
  })
  .catch(console.log);
