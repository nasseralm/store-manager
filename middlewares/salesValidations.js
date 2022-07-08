const validateProductId = (req, res, next) => {
  const [{ productId }] = req.body;
  const message = { message: '"productId" is required' };
  if (!productId) return res.status(400).json(message);
  next();
};
const validateQuantity = (req, res, next) => {
  const [{ quantity }] = req.body;
  const messageRequired = { message: '"quantity" is required' };
  const messageGraterThan = {
    message: '"quantity" must be greater than or equal to 1',
  };
  if (!quantity && typeof quantity !== 'number') { return res.status(400).json(messageRequired); }
  if (quantity <= 0) return res.status(422).json(messageGraterThan);
  next();
};
module.exports = { validateProductId, validateQuantity };
