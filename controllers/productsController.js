const ProductsService = require('../services/productsService');

const listProducts = async (req, res, _next) => {
  const products = await ProductsService.listProducts();
  res.status(200).json(products);
};
const findProductById = async (req, res, _next) => {
  const { id } = req.params;
  const product = await ProductsService.findProductById(id);
  const message = { message: 'Product not found' };
  if (!product.length) return res.status(404).json(message);
  res.status(200).json(...product);
};
const createProduct = async (req, res, _next) => {
  const { name, quantity } = req.body;
  const jsonMessage = { message: 'Product already exists' };
  const newProduct = await ProductsService.createProduct(name, quantity);
  if (!newProduct) return res.status(409).json(jsonMessage);
  res.status(201).json(newProduct);
};
const updateProduct = async (req, res, _next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const message = { message: 'Product not found' };
  const updatedProduct = await ProductsService.updateProduct(
    Number(id),
    name,
    quantity,
  );
  if (!updatedProduct) return res.status(404).json(message);
  res.status(200).json(updatedProduct);
};
const deleteProduct = async (req, res, _next) => {
  const { id } = req.params;
  const message = { message: 'Product not found' };
  const isDeleted = await ProductsService.deleteProduct(Number(id));
  return isDeleted ? res.status(204).end() : res.status(404).json(message);
};
module.exports = {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
