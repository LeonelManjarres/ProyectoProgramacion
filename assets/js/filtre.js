document.addEventListener("DOMContentLoaded", () => {
    const filtro = document.getElementById("filtro");

    // Renderizar todos los productos al cargar la página
    renderizarProductos(productos);

    // Filtrar productos según la categoría seleccionada
    filtro.addEventListener("change", () => {
        const categoriaSeleccionada = filtro.value;

        // Si selecciona "todas", mostrar todo
        if (categoriaSeleccionada === "todas") {
            renderizarProductos(productos);
        } else {
            // Filtrar por categoría
            const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
            renderizarProductos(productosFiltrados);
        }
    });
});
