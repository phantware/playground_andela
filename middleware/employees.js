import Joi from '@hapi/joi';

class Validator {
  static schemaLogin() {
    return Joi.object({
      email: Joi.string()
        .trim()
        .max(50)
        .lowercase()
        .email({ minDomainSegments: 2, tlds: { allow: false } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    });
  }

  static async createEmployee(req, res, next) {
    const schema = Validator.schemaLogin().keys({
      username: Joi.string()
        .min(3)
        .max(30)
        .alphanum()
        .lowercase()
        .trim()
        .required(),
      firstname: Joi.string()
        .min(2)
        .max(30)
        .trim()
        .lowercase()
        .required(),
      lastname: Joi.string()
        .min(2)
        .max(30)
        .trim()
        .lowercase()
        .required(),

      repeat_password: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .strip(),
      gender: Joi.string()
        .trim()
        .lowercase()
        .valid('female', 'male', 'undisclosed')
        .required(),
      jobrole: Joi.string()
        .trim()
        .min(3)
        .max(200)
        .lowercase()
        .required(),
      department: Joi.string()
        .trim()
        .min(3)
        .max(200)
        .lowercase()
        .required(),
      address: Joi.string()
        .trim()
        .min(3)
        .max(200)
        .lowercase()
        .required(),
    });
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((e) => ({ message: e.message }));
      return res.status(400).send({ errors });
    }
    req.body = { ...value };
    return next();
  }

  static async employeeSignIn(req, res, next) {
    const { error, value } = Validator.schemaLogin().validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((e) => ({ message: e.message }));
      return res.status(400).send({ errors });
    }
    req.body = { ...value };
    return next();
  }
}

export default Validator;
