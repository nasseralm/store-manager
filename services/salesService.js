const SalesModel = require('../models/salesModel');

const listSales = async () => {
  const sales = await SalesModel.listSales();
  if (!sales) return false;
  return sales;
};

const findSaleById = async (id) => {
  const sale = await SalesModel.findSaleById(id);
  if (!sale) return false;
  return sale;
};

module.exports = {
  listSales,
  findSaleById,
};
