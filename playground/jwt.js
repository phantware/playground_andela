import jwt from 'jsonwebtoken';

const name = 'is';
const token = jwt.sign({ name }, 'lala');
const decodeVerify = jwt.verify(token, 'lala');
console.log(token);
console.log('verified', decodeVerify);
