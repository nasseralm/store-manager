const db = require('./connection');

const addSales = async (saleId, items) => {
  const query = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES ?';
  const map = items.map((item) => [saleId, item.productId, item.quantity]);
  const [{ affectedRows }] = await db.query(query, [map]);
  return !!affectedRows;
};

const listSales = async () => {
  const query = `
      SELECT
        sp.sale_id AS saleId,
        s.date,
        sp.product_id AS productId,
        sp.quantity
      FROM
        StoreManager.sales_products AS sp
      INNER JOIN
        StoreManager.sales AS s ON sp.sale_id = s.id
    `;
  const [items] = await db.query(query);
  return items;
};

const findSalesById = async (saleId) => {
  const query = `
      SELECT
        s.date,
        sp.product_id AS productId,
        sp.quantity
      FROM
        StoreManager.sales_products AS sp
      INNER JOIN
        StoreManager.sales AS s ON sp.sale_id = s.id
      WHERE sp.sale_id = ?
    `;
  const [items] = await db.query(query, [saleId]);
  return items;
};

const updateSales = async (id, change) => {
  const query = `
      UPDATE StoreManager.sales_products
      SET quantity = ?
      WHERE sale_id = ? AND product_id = ?
    `;
  await db.query(query, [change.quantity, id, change.productId]);
};

(module.exports = {
  addSales,
  listSales,
  findSalesById,
  updateSales,
});
