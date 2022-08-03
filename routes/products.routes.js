const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productsRoute = Router();

productsRoute.get('/', productsController.listProduct);
productsRoute.get('/search', productsController.findProduct);
productsRoute.get('/:id', productsController.findProductById);
productsRoute.post('/', productsController.createProduct);
productsRoute.put('/:id', productsController.updateProduct);
productsRoute.delete('/:id', productsController.deleteProduct);

module.exports = productsRoute;
