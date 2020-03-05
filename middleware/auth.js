import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send('No authorization header was specified');
  }

  let decoded;
  try {
    decoded = jwt.verify(token, 'AndelaPrivateKey');
  } catch (ex) {
    return res.status(400).send('Token provided cannot be authenticated.');
  }
  req.body.decoded = decoded;
  return next();
};

export default auth;
