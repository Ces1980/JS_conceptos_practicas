// Variable global
let DB;

//Selectores de la interfaz
const form = document.querySelector('form'),
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
        console.log('Hubo un error')
    }
    // Si todo esta bien entonces mostrar en consola y asignar la base de datos
    crearDB.onsuccess = function () {
        // console.log('Todo listo ....!')

        //Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB);

        mostrarCitas();
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
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });

        console.log('Base de datos creada y lista....')

    }

    //Cuando el formulario se envia
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }

        // console.log(nuevaCita)

        // En indexDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        // console.log(objectStore)

        let peticion = objectStore.add(nuevaCita);
        console.log(peticion);

        peticion.onsuccess = () => {
            form.reset();
        }

        transaction.oncomplete = () => {
            console.log('Cita agregada');
            // Crear una nueva cita
            mostrarCitas();
        }

        transaction.onerror = () => {
            console.log('Error en agendar su cita...');
        }

    }
    function mostrarCitas() {
        //Limpiar citas anteriores

        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        //Creamos un objetcStore
        let objectStore = DB.transaction('citas').objectStore('citas');


        // Retorno de una petición
        objectStore.openCursor().onsuccess = function (e) {
            //Cursor se va a hubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;
            console.log(cursor)

            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                <p class="font-weight-bold">Dueño: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>

                `;

                // append en el padre
                citas.appendChild(citaHTML);
                // Esta instriccuón permite que se sigan incrustando todo el contenido html y no se que de con el primer registro
                cursor.continue();
            }
        }
    }
});





