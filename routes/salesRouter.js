const express = require('express');
const SalesController = require('../controllers/salesController');
// const {
//   validateProductId,
//   validateQuantity,
// } = require('../middlewares/salesValidations');

const salesRouter = express.Router();
salesRouter.get('/', SalesController.listSales);
// salesRouter.post(
//   '/',
//   validateProductId,
//   validateQuantity,
//   SalesController.createSale,
// );
// salesRouter.put(
//   '/:id',
//   validateProductId,
//   validateQuantity,
//   SalesController.updateSale,
// );
// salesRouter.delete('/:id', SalesController.deleteSale);
salesRouter.get('/:id', SalesController.findSaleById);
module.exports = salesRouter;
