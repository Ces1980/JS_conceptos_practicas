//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

//Listeners
cargarEventoListeners();

function cargarEventoListeners() {
    //Dispara cuando se preciona botón "agregar carrito"
    cursos.addEventListener('click', comprarCurso);
}

//Funciones

// -->> Función que añade el curso al carrito
function comprarCurso(evento) {
    evento.preventDefault();

    if (evento.target.classList.contains('agregar-carrito')) {
        //Para leer el curso al cual se le este dando target
        const curso = evento.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// --->  Leer datos del curso

function leerDatosCurso(curso) {
    console.log(curso);
}