const db = require('./connection');

const checkExistence = async (id) => {
  const query = ' SELECT * FROM StoreManager.sales WHERE id = ? ';
  const [[existent]] = await db.query(query, [id]);
  return !!existent;
};

const createSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await db.query(query);
  return insertId;
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';
  await db.query(query, [id]);
};

(module.exports = {
  checkExistence,
  createSale,
  deleteSale,
});
