const productsService = require('../services/productsService');
const productsValidations = require('../services/productsValidations');

const productsController = {
  listProduct: async (_req, res) => {
    const products = await productsService.listProduct();
    res.status(200).json(products);
  },

  findProduct: async (req, res) => {
    const { q } = req.query;
    const productsFound = await productsService.findProduct(q);
    res.status(200).json(productsFound);
  },

  findProductById: async (req, res) => {
    const { id } = await productsValidations.validateParams(req.params);
    await productsService.checkExistingProduct(id);
    const product = await productsService.findProductById(id);
    res.status(200).json(product);
  },

  createProduct: async (req, res) => {
    const data = await productsValidations.validateBody(req.body);
    const id = await productsService.createProduct(data);
    const product = await productsService.findProductById(id);
    res.status(201).json(product);
  },

  updateProduct: async (req, res) => {
    const [{ id }, changes] = await Promise.all([
      productsValidations.validateParams(req.params),
      productsValidations.validateBody(req.body),
    ]);
    await productsService.checkExistingProduct(id);
    await productsService.updateProduct(id, changes);
    const product = await productsService.findProductById(id);
    res.status(200).json(product);
  },

  deleteProduct: async (req, res) => {
    const { id } = await productsValidations.validateParams(req.params);
    await productsService.checkExistingProduct(id);
    await productsService.deleteProduct(id);
    res.sendStatus(204);
  },
};

module.exports = productsController;
