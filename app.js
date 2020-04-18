//GENERADORES

function *nuevoGenerador(carrito) {

        for (let i = 0; i < carrito.length; i++) {
            yield carrito[i];
            
        }
}

// Creamos el carrito
const carrito = ['Producto1','Producto2','Producto3','Producto4','Producto5'];

// Recorrimos el carrito
let iterador = nuevoGenerador(carrito);

//Imprimimos
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
