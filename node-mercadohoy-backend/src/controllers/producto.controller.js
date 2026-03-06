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

// Obtener productos
exports.obtenerProductos = (req, res) => {
    db.query("SELECT * FROM productos", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
};

// Crear producto
exports.crearProducto = (req, res) => {
    const { nombre, precio, descripcion, supermercado } = req.body;

    const sql = "INSERT INTO productos (nombre, precio, descripcion, supermercado) VALUES (?, ?, ?, ?)";

    db.query(sql, [nombre, precio, descripcion, supermercado], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: "Producto creado",
            id: result.insertId
        });
    });
};