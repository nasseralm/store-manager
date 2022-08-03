const Joi = require('joi');
const validations = require('./validations');

const salesValidations = {

  validateParamsId: validations(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validateBody: validations(Joi.array().items(
    Joi.object({
      productId: Joi.number().required().positive().integer(),
      quantity: Joi.number().min(1).required().integer(),
    }),
  )),
};
module.exports = salesValidations;
