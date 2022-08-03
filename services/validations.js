const validations = (schema) => (data) => {
  const { error, value } = schema.validate(data);
  if (error) {
    error.message = error.details[0].message.replace(/"/g, '');
    error.type = error.details[0].type;
    throw error;
  }
  return value;
};

module.exports = validations;

// https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages
