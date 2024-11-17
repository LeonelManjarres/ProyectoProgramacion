
// Seleccionar todas las imágenes del carrusel
const thumbnailImages = document.querySelectorAll('.carousel-inner .col-4 img');
const mainImage = document.querySelector('#main-product-img');
const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#product-price');
const productDescription = document.querySelector('#product-description');

// Cambiar la imagen principal y la información del producto al hacer clic en una miniatura
thumbnailImages.forEach(image => {
    image.addEventListener('click', () => {
        // Actualizar la imagen principal
        mainImage.src = image.src;

        // Actualizar el nombre del producto, precio y descripción
        productName.textContent = image.alt; // Usa el alt del producto como nombre
        productPrice.textContent = `$${image.getAttribute('data-price')}`; // Precio del atributo data-price
        productDescription.textContent = image.getAttribute('data-desc'); // Descripción del atributo data-desc
    });
});
