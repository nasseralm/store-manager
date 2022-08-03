const myError = (message) => {
  const error = new Error(message);
  error.name = 'NotFoundError';
  throw error;
};

module.exports = myError;
