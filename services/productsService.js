const myError = require('../middlewares/Error');
const productsModel = require('../models/productsModel');

const productsService = {

  checkExistingProduct: async (id) => {
    const exists = await productsModel.checkExistingProduct(id);
    if (!exists) return myError('Product not found');
  },

  checkManyExistingProducts: async (array) => {
    const products = await productsModel.listManyProducts(array);
    if (products.length !== array.length) {
      return myError('Product not found');
    }
    return true;
  },

  listProduct: async () => {
    const products = await productsModel.listProduct();
    return products;
  },

  findProduct: async (name) => {
    if (name === '') {
      const products = await productsModel.listProduct();
      return products;
    }
    const productByName = await productsModel.findProduct(name);
    return productByName;
  },

  findProductById: async (productId) => {
    const product = await productsModel.findProductById(productId);
    return product;
  },

  createProduct: async (data) => {
    const id = await productsModel.createProduct(data);
    return id;
  },

  updateProduct: async (id, changes) => {
    await productsModel.updateProduct(id, changes);
  },

  deleteProduct: async (productId) => {
    await productsModel.deleteProduct(productId);
  },
};

module.exports = productsService;
