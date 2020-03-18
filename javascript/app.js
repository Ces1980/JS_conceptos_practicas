///Crear objetos en JavaScript

const persona = {
    nombre: 'César',
    apellido: 'Vargas',
    profesion: 'Estudiante',
    correo: 'cesar@vargas.com',
    edad: '39',
    musica: ['Rap', 'Pop', 'Regional mexicano'],
    /*Arreglar objeto dentro de un objeto*/
    hogar: {
        ciudad: 'Ecatepec',
        colonia: 'Ejidos de San Cristobal',
        estado: 'estado de México',
        pais: 'México'
    },
    /*Función declarada dentro de un objeto*/
    nacimiento: function() {
        let fechaDeNacimiento = new Date('1980-05-25');
        let hoy = new Date();
        return parseInt((hoy - fechaDeNacimiento) / (1000 * 60 * 60 * 24 * 365));
    }

}

console.log(persona);

console.log('Mandando llarmar un elemento del objeto, para el ejemplo el apellido : ' + persona.apellido);

console.log('Imprimir el arreglo declarado dentro del objeto: ' + persona.musica);

console.log('Imprimiendo un elemento del arreglo declarado dentro del objeto : ' + persona.musica[2]);

console.log('Agregando elemento \'ranchero\' al arreglo declarado dentro de un objeto ');

persona.musica.push('Ranchero');

console.log('Arreglo con nuevo elemento: ' + persona.musica);

console.log('Ver el objeto declarado dentro del objeto');

console.log(persona.hogar);

console.log('Accediendo al elemento \'ciudad\' del objeto declarado dentro del objeto');

console.log(persona.hogar.ciudad);

console.log('Fecha de nacimiento declarada dentro del objeto y obtenida por medio e una función');

console.log('Edad: ' + persona.nacimiento());