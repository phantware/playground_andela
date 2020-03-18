import Joi from '@hapi/joi';

class ArticleValidation {
  static articleSchema() {
    return Joi.object({
      title: Joi.string()
        .min(3)
        .max(100)
        .trim()
        .lowercase()
        .required(),
      article: Joi.string()
        .min(3)
        .trim()
        .lowercase()
        .required(),
      category: Joi.string()
        .min(3)
        .trim()
        .lowercase()
        .required(),
    });
  }

  static async createAticle(req, res, next) {
    const schema = ArticleValidation.articleSchema();
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((e) => ({ message: e.message }));
      return res.status(400).send({ errors });
    }
    req.body = { ...value };
    return next();
  }

  static async createArticleComment(req, res, next) {
    const schema = Joi.object({
      articleid: Joi.number()
        .min(1)
        .required(),
      comment: Joi.string()
        .min(3)
        .trim()
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

  static async updateAnArticle(req, res, next) {
    const schema = ArticleValidation.articleSchema().keys({
      articleid: Joi.number()
        .min(1)
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
}

export default ArticleValidation;
