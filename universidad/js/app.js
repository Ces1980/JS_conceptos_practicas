/*Event Listener click al buscador*/

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//Click
//boton.addEventListener('click', obtenerEvento);

//Doble click
//boton.addEventListener('dblclick', obtenerEvento);

//Mouse enter
boton.addEventListener('mouseenter', obtenerEvento);
boton.addEventListener('mouseleave', obtenerEvento);
boton.addEventListener('mouseover', obtenerEvento);
boton.addEventListener('mouseout', obtenerEvento);
boton.addEventListener('mousedown', obtenerEvento);
boton.addEventListener('mouseup', obtenerEvento);
boton.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    console.log(`Evento: ${e.type}`);
}

boton.addEventListener('dblclick', function(e) {
    console.log('Doble click');
});