require("dotenv").config();
const express = require("express");
const cors = require("cors");

const productoRoutes = require("./routes/producto.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/productos", productoRoutes);

module.exports = app;

const API = "http://localhost:3000/api/productos";

async function cargarProductos() {

    const respuesta = await fetch(API);
    const productos = await respuesta.json();

    const lista = document.getElementById("listaProductos");
    lista.innerHTML = "";

    productos.forEach(producto => {

        const li = document.createElement("li");
        li.textContent = producto.nombre + " - $" + producto.precio;

        lista.appendChild(li);
    });

}

async function crearProducto(){

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    await fetch(API, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nombre,
            precio
        })
    });

    cargarProductos();
}