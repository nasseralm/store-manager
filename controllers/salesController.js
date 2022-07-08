const SalesService = require('../services/salesService');

const listSales = async (req, res, _next) => {
  const sales = await SalesService.listSales();
  res.status(200).json(sales);
};

const findSaleById = async (req, res, _next) => {
  const { id } = req.params;
  const sale = await SalesService.findSaleById(Number(id));
  const message = { message: 'Sale not found' };
  if (!sale.length) return res.status(404).json(message);
  res.status(200).json(sale);
};

module.exports = {
  listSales,
  findSaleById,
};
