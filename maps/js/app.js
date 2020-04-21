const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
});

//Habilitar busqueda de establecimientos

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input', () => {
    /* identificar las letras que se estan digitando en el input */
    if (buscador.value.length > 3) {
        // Obtener sugerencias que sean parte de la busqueda
        ui.obtenerSugerencias(buscador.value);
    } else if (buscador.value.length === 0) {
        // Mostrar los pines
        ui.mostrarEstablecimientos();
    }
});