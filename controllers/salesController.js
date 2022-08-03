const salesService = require('../services/salesService');
const productsService = require('../services/productsService');

const salesController = {
  listSales: async (_req, res) => {
    const sales = await salesService.listSales();
    res.status(200).json(sales);
  },

  listSaleById: async (req, res) => {
    const { id } = await salesService.validateParamsId(req.params);
    await salesService.checkIfExists(id);
    const sale = await salesService.listSaleById(id);
    res.status(200).json(sale);
  },

  createSale: async (req, res) => {
    const data = await salesService.validateBody(req.body);
    const products = data.map((item) => item.productId);
    await productsService.checkIfExistsByArrayOfId(products);

    const id = await salesService.createSale(data);
    res.status(201).json({
      id,
      itemsSold: data,
    });
  },

  updateSale: async (req, res) => {
    const [{ id }, changes] = await Promise.all([
      salesService.validateParamsId(req.params),
      salesService.validateBody(req.body),
    ]);
    await salesService.checkIfExists(id);
    const products = changes.map((item) => item.productId);
    await productsService.checkIfExistsByArrayOfId(products);
    await salesService.updateSale(id, changes);
    res.status(200).json({
      saleId: id,
      itemsUpdated: changes,
    });
  },

  deleteSale: async (req, res) => {
    const { id } = await salesService.validateParamsId(req.params);
    await salesService.checkIfExists(id);
    await salesService.deleteSale(id);
    res.sendStatus(204);
  },
};

module.exports = salesController;
