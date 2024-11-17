//DOM
document.addEventListener('DOMContentLoaded', () => {
    // Variables - base de datos
    const baseDedatos = [
        { id: 1, nombre: 'Blusa Blanca', precio: 90000, imagen: 'assets/img/Damas/blusa1.jpg' },
        { id: 2, nombre: 'Blusa Verde', precio: 110000, imagen: 'assets/img/Damas/blusa2.jpg' },
        { id: 3, nombre: 'Buso Blanco&Azul', precio: 100000, imagen: 'assets/img/Caballero/buso1.jpg' },
        { id: 4, nombre: 'Buso Vinotinto', precio: 130000, imagen: 'assets/img/Caballero/buso2.jpg' },
        { id: 5, nombre: 'Gorra Negra', precio: 60000, imagen: 'assets/img/Accesorios/gorra1.jpg' }
    ];
    
    let carrito = [];
    const divisa = ' Cop ';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    // Función para dibujar los productos
    function renderizarProductos() {
        baseDedatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Título
            const miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa}${info.precio}`;
            // Botón
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        handleCarritoValue(carrito.length);
        calcularTotal();
    }

    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        if (carritoContainer) {
            carritoContainer.textContent = `${value}`;
        }
    }

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDedatos.filter((itemBaseDatos) => itemBaseDatos.id === parseInt(item));
            if (miItem.length > 0) {
                const numeroUnidadesItem = carrito.reduce((total, itemId) => itemId === item ? total += 1 : total, 0);
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                miBoton.textContent = 'X';
                miBoton.style.marginLeft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                miNodo.appendChild(miBoton);
                DOMcarrito.appendChild(miNodo);
            }
        });
        calcularTotal(); // Recalcular el total al renderizar el carrito
    }

    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => carritoId !== id);
        renderizarCarrito();
        handleCarritoValue(carrito.length);
        calcularTotal();
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        handleCarritoValue(carrito.length);
        calcularTotal();
    }

    // Función para calcular el total del carrito
    function calcularTotal() {
        const total = carrito.reduce((acc, item) => {
            const producto = baseDedatos.find((producto) => producto.id === parseInt(item));
            return acc + producto.precio;
        }, 0);
        DOMtotal.textContent = total.toFixed(2); // Mostrar el total con dos decimales
    }

    // Agregar evento al botón de vaciar carrito
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    renderizarProductos();
    renderizarCarrito();
});



