document.addEventListener("DOMContentLoaded", () => {
  
  /* BUSCADOR DE PRODUCTOS */

  const inputBuscar = document.getElementById("buscarProducto");
  const productos = document.querySelectorAll(".card_product");

  if (inputBuscar) {
    inputBuscar.addEventListener("keyup", () => {
      const texto = inputBuscar.value.toLowerCase();
      productos.forEach(card => {
        const nombre = card.querySelector(".description").textContent.toLowerCase();
        card.style.display = nombre.includes(texto) ? "" : "none";
      });
    });
  }


  /* AGREGAR PRODUCTOS AL CARRITO */

  const botones = document.querySelectorAll(".btnCarrito");
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (botones.length > 0) {
    botones.forEach(btn => {
      btn.addEventListener("click", e => {
        const card = e.target.closest(".card_product");
        const nombre = card.querySelectorAll(".description")[0].textContent.trim();
        const precio = card.querySelectorAll(".description")[1].textContent.trim();

        carrito.push({ nombre, precio });
        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert(`${nombre} agregado al carrito 🛒`);
      });
    });
  }


  /* MOSTRAR PRODUCTOS EN CARRITO */

  const listaCarrito = document.getElementById("listaCarrito");

  if (listaCarrito) {
    const productosGuardados = JSON.parse(localStorage.getItem("carrito")) || [];

    if (productosGuardados.length === 0) {
      listaCarrito.innerHTML = "<p>Tu carrito está vacío 🛍️</p>";
    } else {
      productosGuardados.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - ${item.precio}`;
        listaCarrito.appendChild(li);
      });
    }
  }


  /* VACIAR CARRITO */

  const btnVaciar = document.getElementById("btnVaciar");

  if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
      localStorage.removeItem("carrito");
      const lista = document.getElementById("listaCarrito");
      lista.innerHTML = "<p class='vacio'>Tu carrito está vacío 🛍️</p>";
      alert("El carrito ha sido vaciado correctamente");
    });
  }

  
  /* ORDENAR POR PRECIO */

  const btnOrdenar = document.getElementById("ordenarPrecio");
  const contenedor = document.querySelector(".card");

  if (btnOrdenar && contenedor) {
    btnOrdenar.addEventListener("click", () => {
      const cards = Array.from(document.querySelectorAll(".card_product"));

      cards.sort((a, b) => {
        const precioA = parseInt(a.querySelectorAll(".description")[1].textContent.replace(/\D/g, ""));
        const precioB = parseInt(b.querySelectorAll(".description")[1].textContent.replace(/\D/g, ""));
        return precioA - precioB;
      });

      contenedor.innerHTML = "";
      cards.forEach(c => contenedor.appendChild(c));
    });
  }
});