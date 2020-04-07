/*
*Promises: Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
*resolve, es el parametro a tomar cuando se cumple la promesa
--> resolve necesita de then() para que ejecutar su acción 
*reject es cuando no se cumple la promesa
 */

const esperando = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Se ejecuto');
    }, 5000);
});

esperando.then(function(mensaje) {
    console.log(mensaje);
});