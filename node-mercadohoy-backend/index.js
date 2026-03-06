require("dotenv").config();
const express = require("express");
const app = express();

require("./src/config/db");

app.use(express.json());

const productoRoutes = require("./src/routes/productoRoutes");
app.use("/api/productos", productoRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 