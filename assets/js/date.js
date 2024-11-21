const contenedor = document.getElementById("items");

// Renderizar productos
function renderizarProductos(listaProductos) {
    contenedor.innerHTML = ""; // Limpiar contenido
    listaProductos.forEach(producto => {
        // Crear el HTML de cada producto
        const item = document.createElement("div");
        item.classList.add("col-sm-4", "producto");
        item.setAttribute("data-category", producto.categoria);

        item.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(item);
    });
}
