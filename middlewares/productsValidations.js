const validateName = (req, res, next) => {
  const { name } = req.body;
  const messageRequired = { message: '"name" is required' };
  const messageLength = {
    message: '"name" length must be at least 5 characters long',
  };
  if (!name) return res.status(400).json(messageRequired);
  if (name.length < 5) return res.status(422).json(messageLength);
  next();
};
const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  const messageRequired = { message: '"quantity" is required' };
  const messageGraterThan = {
    message: '"quantity" must be greater than or equal to 1',
  };
  if (!quantity && typeof quantity !== 'number') {
    return res.status(400).json(messageRequired);
  }
  if (quantity <= 0) return res.status(422).json(messageGraterThan);
  next();
};
module.exports = {
  validateName,
  validateQuantity,
};
