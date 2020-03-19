//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
/**Para insertar curso seleccionado en el carrito de compras */
const listaCursos = document.querySelector('#lista-carrito tbody');

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

/* --->  Leer datos del curso:  antes de crear este método cuando se seleccionaba el carrito
                                la información del curso seleccionado mandaba la estrucutra html (el card que contiene la información),
                                con la función la manda en estructura de un objeto*/

function leerDatosCurso(curso) {

    const infoCurso = {
        /**atributo: valor curso.querySelector('img').src  <<-- para acceder de una vez al valor del atributo */
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    console.log(infoCurso);
    insertarCarrito(infoCurso);
}


//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    /**
     * Crear el elemento en le html donde se mostrara el curso seleccionado
     */
    const row = document.createElement('tr');
    /**
     * Los valores de curso son extraidos en la función leerDatosCurso(curso)
     */
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
        </td>
    `;
    /**
     * Se agrega el template creado
     */
    listaCursos.appendChild(row);
}