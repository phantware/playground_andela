import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send('No authorization header was specified');
  }

  // let decoded;
  try {
    const decoded = jwt.verify(token, 'AndelaPrivateKey');
    // console.log('inside auth', decoded);
    req.body.decoded = decoded;
  } catch (ex) {
    return res.status(400).send('Token provided cannot be authenticated.');
  }

  return next();
};

export default auth;
