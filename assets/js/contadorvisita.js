 // Recupera el contador de visitas desde LocalStorage, si no existe, inicializa en 0
let contador = localStorage.getItem("contador-visitas");

if (contador === null) {
     // Si no existe en LocalStorage, lo inicializamos a 1
    contador = 1;
} else {
     // Si ya existe, incrementamos el contador
    contador = parseInt(contador) + 1;
}

// Guardamos el nuevo valor en LocalStorage
localStorage.setItem("contador-visitas", contador);

// Mostramos el contador en el HTML
document.getElementById("contador-visitas").textContent = contador;