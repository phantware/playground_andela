import app from './app';

console.log(__dirname);

const port = process.env.PORT;
app.listen(port, console.log(`App is listening at ${port}`));
