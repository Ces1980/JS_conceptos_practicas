// Variable global
let DB;

//Selectores de la interfaz
const form = document.querySelector('#formulario'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');

//Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    //Crear la base de datos
    let crearDB = window.indexedDB.open('citas', 1);

    //Si hay un error enviarlo a la consola
    crearDB.onerror = function () {
        console.err('Hubo un error')
    }
    // Si todo esta bien entonces mostrar en consola y asignar la base de datos
    crearDB.onsuccess = function () {
        console.log('Todo listo ....!')

        //Asignar a la base de datos
        DB = crearDB.result;
        console.log(DB);
    }
});
