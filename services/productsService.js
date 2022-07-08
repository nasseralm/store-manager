const ProductModel = require('../models/productsModel');

const listProducts = async () => {
  const products = await ProductModel.listProducts();
  if (!products) return false;
  return products;
};
const findProductById = async (id) => {
  const product = await ProductModel.findProductById(id);
  if (!product) return false;
  return product;
};
const createProduct = async (name, quantity) => {
  const existingProduct = await ProductModel.checkExistingProduct(name);
  if (existingProduct.length) return false;
  const newProduct = await ProductModel.createProduct(name, quantity);
  return newProduct;
};
const updateProduct = async (id, name, quantity) => {
  const productById = await ProductModel.findProductById(id);
  if (!productById || !productById.length) return false;
  const updatedProduct = await ProductModel.updateProduct(id, name, quantity);
  return updatedProduct;
};
const deleteProduct = async (id) => {
  const productById = await ProductModel.findProductById(id);
  if (!productById || !productById.length) return false;
  await ProductModel.deleteProduct(id);
  return true;
};

module.exports = {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
