const express = require("express"); // Esta es la forma de inicializar el express
const app = express();
const port = 5500; // Puerto donde correra el servidor interno

app.use(express.json()); //Hace que todos los datos que el cliente envie siempre se conviertan a json

// PETICIONES CRUD

app.get("/", (req, res) => {

  return res.json("SOY NODE FUNCIONANDO");
}); // Para pedir datos al servidor

app.post();  // Para guardar datos en servidor


app.put();  // Para actualizar datos en servidor


app.delete();  // Para eliminar datos en servidor


app.listen(port, () => {
  console.log("Servidor de node escuchando en htp://localhost:"+port)
});


