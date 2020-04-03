/**
 * Una función de callback es una función que se pasa a otra función como un argumento,
 * que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 * 
 * Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código 
 * después de que se haya completado una operación a sincrónica  — estas se denominan devoluciones de llamada asincrónicas. 
 */

//Callback en forEach


const ciudades = ['CDMX', 'New York', 'Tokio', 'Berlín', 'Madrid', 'Roma'];

console.log(`LLamada a Callback - forEach con función de flecha: `);
ciudades.forEach(ciudad => {
    console.log(ciudad);
});
//Inline Callback
ciudades.forEach(function(ciudad) {
    console.log(ciudad);
});

console.log("............Con función definida");
//Con funcion definida
function callback(ciudad) {
    console.log(ciudad);
}

ciudades.forEach(callback);