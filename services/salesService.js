const myError = require('../middlewares/Error');
const salesModel = require('../models/salesModel');
const salesProductsModel = require('../models/salesProductsModel');

const salesService = {

  checkIfExists: async (id) => {
    const exists = await salesModel.exists(id);
    if (!exists) return myError('Sale not found');
  },

  listSales: async () => {
    const sales = await salesProductsModel.listSales();
    return sales;
  },

  listSaleById: async (id) => {
    const sales = await salesProductsModel.listSaleById(id);
    return sales;
  },

  createSale: async (data) => {
    const id = await salesModel.createSale();
    await salesProductsModel.createSales(id, data);
    return id;
  },

  updateSale: async (id, updates) => {
    const items = updates.map((update) => salesProductsModel.updateSale(id, update));
    await Promise.all(items);
  },

  deleteSale: async (id) => {
    await salesModel.deleteSale(id);
  },
};

module.exports = salesService;
