const Joi = require('joi');
const validations = require('./validations');

const productsValidations = {
  validateParams: validations(
    Joi.object({
      id: Joi.number().required().positive().integer(),
    }),
  ),

  validateBody: validations(
    Joi.object({
      name: Joi.string().min(5).required().max(100),
    }),
  ),
};

module.exports = productsValidations;
