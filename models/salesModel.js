const connection = require('./connection');

const listSales = async () => {
  const query = `SELECT sp.sale_id AS saleId, s.date,
sp.product_id AS productId, sp.quantity AS quantity
FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s
ON sp.sale_id = s.id
ORDER BY saleId ASC, productId ASC;`;
const [sales] = await connection.execute(query);
return sales;
};
const findSaleById = async (id) => {
const query = `SELECT s.date,
sp.product_id AS productId, sp.quantity AS quantity
FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s
ON sp.sale_id = s.id
WHERE sp.sale_id = ?;`;
const [sale] = await connection.execute(query, [id]);
return sale;
};

module.exports = {
  listSales,
  findSaleById,
};
