const Producto = require("../models/producto.model");

exports.getProductos = (req, res) => {
  Producto.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getProductoById = (req, res) => {
  Producto.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createProducto = (req, res) => {
  Producto.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Producto creado ✔", id: result.insertId });
  });
};

exports.updateProducto = (req, res) => {
  Producto.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Producto actualizado ✔" });
  });
};

exports.deleteProducto = (req, res) => {
  Producto.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Producto eliminado ✔" });
  });
};

const db = require("../config/db");


