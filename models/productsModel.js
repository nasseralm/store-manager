const connection = require('./connection');

const productsModel = {
  findProduct: async (name) => {
    const query = `
      SELECT *
      FROM StoreManager.products
      WHERE name LIKE ?
    `;
    const [items] = await connection.query(query, [`%${name}%`]);
    return items;
  },

  listProduct: async () => {
    const query = `
      SELECT *
      FROM StoreManager.products
    `;
    const [products] = await connection.query(query);
    return products;
  },

  findProductById: async (productId) => {
    const query = `
      SELECT *
      FROM StoreManager.products
      WHERE id = ?
    `;
    const [[product]] = await connection.query(query, [productId]);
    return product;
  },

  listManyProducts: async (array) => {
    const query = `
    SELECT *
      FROM StoreManager.products
      WHERE id IN (?);
    `;
    const [products] = await connection.query(query, [array]);
    return products;
  },

    checkExistingProduct: async (id) => {
      const query = `
        SELECT *
        FROM StoreManager.products
        WHERE id = ?
      `;
      const [[exists]] = await connection.query(query, [id]);
      return !!exists;
    },

  createProduct: async (data) => {
    const query = `
      INSERT INTO StoreManager.products (name)
      VALUES (?)
    `;
    const [{ insertId }] = await connection.query(query, [data.name]);
    return insertId;
  },

  updateProduct: async (id, changes) => {
    const query = `
      UPDATE StoreManager.products
      SET ?
      WHERE id = ?
    `;
    await connection.query(query, [changes, id]);
  },

  deleteProduct: async (id) => {
    const query = `
      DELETE FROM StoreManager.products
      WHERE id = ?
    `;
    await connection.query(query, [id]);
  },
};

module.exports = productsModel;
