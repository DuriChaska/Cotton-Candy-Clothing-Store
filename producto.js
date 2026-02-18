const productos = [
  {
    id: "blusa-amarilla-cruzada",
    nombre: "Blusa amarilla cruzada (manga larga)",
    precio: "$399 MXN",
    descripcion: "Blusa cruzada de manga larga con diseño fruncido al frente. Ideal para looks frescos y femeninos.",
    imagen: "Imagenes/PLAYERA ESTAMPADA TRAVIS SCOTT.png"
  },
  {
    id: "top-vino-acampanado",
    nombre: "Top vino manga larga acampanada",
    precio: "$389 MXN",
    descripcion: "Top ajustado en tono vino con mangas acampanadas, elegante y moderno.",
    imagen: "Imagenes/SUDADERA ESTAMPADA.png"
  },
  {
    id: "top-rojo-tirantes",
    nombre: "Top rojo con tirantes",
    precio: "$299 MXN",
    descripcion: "Top de tirantes con textura acanalada y diseño ajustado.",
    imagen: "Imagenes/Playera estampada jesus.png"
  },
  {
    id: "top-rosa-mono",
    nombre: "Top rosa con moño",
    precio: "$249 MXN",
    descripcion: "Top corto en tono rosa pastel con detalle de moño al frente.",
    imagen: "Imagenes/Playera estampada con flores.png"
  },
  {
    id: "top-rosa-strapless",
    nombre: "Top rosa strapless",
    precio: "$269 MXN",
    descripcion: "Top strapless con ajuste cómodo, ideal para climas cálidos.",
    imagen: "Imagenes/Playera de bruja feminista.png"
  },
  {
    id: "top-amarillo-tirantes",
    nombre: "Top amarillo con tirantes finos",
    precio: "$289 MXN",
    descripcion: "Top ligero con tirantes delgados y diseño fruncido.",
    imagen: "Imagenes/Playera Return of Misfits.png"
  },
  {
    id: "top-rosa-manga-larga",
    nombre: "Top rosa manga larga",
    precio: "$319 MXN",
    descripcion: "Top de manga larga en tono rosa suave.",
    imagen: "Imagenes/Playera de manga corta para hombre.png"
  },
  {
    id: "top-halter-brillante",
    nombre: "Top brillante cuello halter",
    precio: "$349 MXN",
    descripcion: "Top con acabado brillante y cuello halter.",
    imagen: "Imagenes/Playera Estampada Gatos.png"
  },
  {
    id: "blusa-blanca-vuelo",
    nombre: "Blusa blanca con tirantes y vuelo",
    precio: "$379 MXN",
    descripcion: "Blusa blanca con diseño romántico y fresco.",
    imagen: "Imagenes/playera estampada persona.png"
  }
];

// obtener id de la URL
const params = new URLSearchParams(window.location.search);
const productoId = params.get("id");

// buscar producto
const producto = productos.find(p => p.id === productoId);

// mostrar producto
if (producto) {
  document.getElementById("nombre-producto").textContent = producto.nombre;
  document.getElementById("precio-producto").textContent = producto.precio;
  document.getElementById("descripcion-producto").textContent = producto.descripcion;
  document.getElementById("imagen-producto").src = producto.imagen;

  // productos similares
  const contenedor = document.getElementById("articulos-similares");

  productos
    .filter(p => p.id !== productoId)
    .slice(0, 4)
    .forEach(p => {
      const div = document.createElement("div");
      div.classList.add("product-card");

      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h4>${p.nombre}</h4>
        <p>${p.precio}</p>
        <button onclick="window.location.href='producto.html?id=${p.id}'">
          Ver detalles
        </button>
      `;

      contenedor.appendChild(div);
    });

} else {
  document.querySelector(".producto-detalle").innerHTML =
    "<p>Producto no encontrado 😥</p>";
}
