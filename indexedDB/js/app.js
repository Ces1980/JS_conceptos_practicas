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
    //Crear la base de datos open('nombreAsignara db', versionDB)
    let crearDB = window.indexedDB.open('citas', 1);

    //Si hay un error enviarlo a la consola
    crearDB.onerror = function () {
        console.err('Hubo un error')
    }
    // Si todo esta bien entonces mostrar en consola y asignar la base de datos
    crearDB.onsuccess = function () {
        // console.log('Todo listo ....!')

        //Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB);
    }
    //Este método solo corre una vez y es ideal para crear el Schema de la base de datos
    crearDB.onupgradeneeded = function (e) {
        // El evento es la misma base de datos -> se crea una instancia de la base de datos
        let db = e.target.result;


        //Definir el objetstore, toma dos parametros: nombre de la base de datos y segundo las opciones
        // ketPath es el indice de la base de datos
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });

        //Crear los indices y campos de la base de datos createIndex: 3 parametros, nombre, keypath y opciones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintoma', 'sintoma', { unique: false });

        console.log('Base de datos creada y lista....')

    }
});





