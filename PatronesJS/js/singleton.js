/* El patrón de diseño Singleton (soltero) recibe su nombre debido a que sólo
se puede tener una única instancia para toda la aplicación de una determinada
clase, esto se logra restringiendo la libre creación de instancias de esta clase
mediante el operador new e imponiendo un constructor privado y un método estático
para poder obtener la instancia.

La intención de este patrón es garantizar que solamente pueda existir
una única instancia de una determinada clase y que exista una referencia
global en toda la aplicación. */

// Funciones de los objetos creados
const alumnos = {
    // Todos los alumnos
    listaAlumnos: [],

    // Obtener un alumno
    get: function (id) {
        console.log('id alumno: ' + id);
        return this.listaAlumnos[id];
    },

    // Crear un alumno
    crear: function (datos) {
        console.log(datos)
        this.listaAlumnos.push(datos);
    },

    // Listar alumnos
    listado: function () {
        return this.listaAlumnos;
    }
}


const infoAlumno = {
    nombre: 'César',
    edad: 39
}

const infoAlumno2 = {
    nombre: 'Vero',
    edad: 40
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);


const listado = alumnos.listado();
console.log(listado);


const alumno1 = alumnos.get(0);
console.log(alumno1)
