/*
*Promises: Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
*resolve, es el parametro a tomar cuando se cumple la promesa
--> resolve necesita de then() para que ejecutar su acción 
* El método then es el retorno de la promesa, puede ser cumplida o rechazada 
* Así como el resolve necesita de then() para mostra su mensaje, reject necesita de catch
* para mostra el suyo resolve va de la mano con then() y reject va de la mano con catch()  
 */

const aplicarDescuento = new Promise(function(resolve, reject) {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(mensaje) {
    console.log(mensaje);
}).catch(function(error) {
    console.log(error);
});