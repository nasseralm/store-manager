const error = (err, req, res, _next) => {
  res.status(500).json({ error: `Error: ${err.message}` });
};
module.exports = error;
