const db = require('./connection');

const salesModel = {
  exists: async (id) => {
    const query = `
      SELECT *
      FROM StoreManager.sales
      WHERE id = ?
    `;
    const [[exists]] = await db.query(query, [id]);
    return !!exists;
  },

  createSale: async () => {
    const query = `
      INSERT INTO StoreManager.sales (date)
      VALUES (NOW())
    `;
    const [{ insertId }] = await db.query(query);
    return insertId;
  },

  deleteSale: async (id) => {
    const query = `
      DELETE FROM StoreManager.sales
      WHERE id = ?
    `;
    await db.query(query, [id]);
  },
};

module.exports = salesModel;
