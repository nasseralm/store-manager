const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.get('/', salesController.listSales);
salesRoute.get('/:id', salesController.listSaleById);
salesRoute.post('/', salesController.createSale);
salesRoute.put('/:id', salesController.updateSale);
salesRoute.delete('/:id', salesController.deleteSale);

module.exports = salesRoute;
