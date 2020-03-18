//ForEach en JavaScript

const ciudades = ['CDMX', 'Londres', 'Tokio', 'Berlín', 'Roma'];
/*El objeto Set permite almacenar valores únicos de cualquier tipo, 
incluso valores primitivos u referencias a objetos.*/
const ordenes = new Set([133, 231, 131, 102]);
/*El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) 
pueden ser usados como clave o valor.*/
const datos = new Map();

datos.set('nombre', 'César');
datos.set('profesión', 'Desarrollador web');

/**
 * La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable,
 *  como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), 
 * TypedArray, Map, Set e iterables definidos por el usuario.
 */

/*entries() regresa llave y valor*/
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}
/*Imprime) 
(2) [0, "CDMX"]
(2) [1, "Londres"]
(2) [2, "Tokio"]
(2) [3, "Berlín"]
(2) [4, "Roma"]*/

/*values() regresa el valor y es la que se entrega por defecto*/
for (let entrada of ciudades.values()) {
    console.log(entrada);
}

/* Imprime
CDMX 
Londres
Tokio
Berlín 
Roma
*/

/*keys iterador regresa las llaves de cada uno de los elementos*/
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}
/**
 * Imprime
 * 0
 * 1
 * 2
 * 3
 * 4
 */

for (const entradas of ordenes.entries()) {
    console.log(entradas);
}


/*  Imprime
   (2) [133, 133]
   (2) [231, 231]
   (2) [131, 131]
   (2) [102, 102] */

for (const entradas of ordenes) {
    console.log(entradas);
}
/**
 * Imprime:
 * 133
   231
   131
   102
 */

for (const entrada of datos.entries()) {
    console.log(entrada);
}

/* Imprime
(2) ["nombre", "César"]
(2) ["profesión", "Desarrollador web"]
*/

for (const entrada of datos.values()) {
    console.log(entrada);
}

/*
César
Desarrollador web
*/