const express = require('express');
const ProductsController = require('../controllers/productsController');
const {
  validateName,
  validateQuantity,
} = require('../middlewares/productsValidations');

const productsRouter = express.Router();
productsRouter.get('/', ProductsController.listProducts);
productsRouter.post(
  '/',
  validateName,
  validateQuantity,
  ProductsController.createProduct,
);
productsRouter.put(
  '/:id',
  validateName,
  validateQuantity,
  ProductsController.updateProduct,
);
productsRouter.delete('/:id', ProductsController.deleteProduct);
productsRouter.get('/:id', ProductsController.findProductById);
module.exports = productsRouter;
