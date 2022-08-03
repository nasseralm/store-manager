const SalesModel = require('../models/salesModel');
const salesProductsModel = require('../models/salesProductsModel');

const listSales = async () => {
  const sales = await salesProductsModel.listSales();
  if (!sales) return false;
  return sales;
};

const findSaleById = async (id) => {
  const sale = await salesProductsModel.listSalesById(id);
  if (!sale) return false;
  return sale;
};

const addSale = async (data) => {
  const id = await SalesModel.createSale();
  await salesProductsModel.addSales(id, data);
  return id;
};

const editSale = async (id, changes) => {
  const items = changes.map((change) => salesProductsModel.updateSales(id, change));
  await Promise.all(items);
};

const deleteSale = async (id) => {
  await SalesModel.deleteSale(id);
};

(module.exports = {
  listSales,
  findSaleById,
  addSale,
  editSale,
  deleteSale,
});
