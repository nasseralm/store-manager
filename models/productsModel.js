const connection = require('./connection');

const listProducts = async () => {
  const query = 'SELECT id, name, quantity FROM StoreManager.products ORDER BY id;';
  const [products] = await connection.execute(query);
  return products;
};
const findProductById = async (id) => {
  const query = 'SELECT id, name, quantity FROM StoreManager.products WHERE id = ?;';
  const [product] = await connection.execute(query, [id]);
  return product;
};
const checkExistingProduct = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?;';
  const [product] = await connection.execute(query, [name]);
  return product;
};
const createProduct = async (name, quantity) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES(?, ?)';
  const [newProduct] = await connection.execute(query, [name, quantity]);
  return {
    id: newProduct.insertId,
    name,
    quantity,
  };
};
const updateProduct = async (id, name, quantity) => {
  const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
  await connection.execute(query, [name, quantity, id]);
  return { id, name, quantity };
};
const deleteProduct = async (id) => {
  const query = `DELETE FROM StoreManager.products
WHERE id = ?`;
  await connection.execute(query, [id]);
  return true;
};
module.exports = {
  listProducts,
  findProductById,
  checkExistingProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
