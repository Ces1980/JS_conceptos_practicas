//Funciones en javaScript declaración
/*Con parametros*/
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar('César');


function sumar(a, b) {
    console.log(a + b);
}

sumar(1, 2);


/**Con return */
function restar(a, b) {
    return a - b;
}
let resta;
resta = restar(5, 4);
console.log(resta);


//Return string
/* function saludar(nombre) {
    if (typeof nombre === 'undefined') {
        nombre = 'visitante';
    }
    return `Hola ${nombre}`;
} */

function saludar(nombre = 'Visitante') {
    return `Hola ${nombre}`;
}


saludo = saludar('César');
console.log(saludo);