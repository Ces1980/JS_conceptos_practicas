//ITERADORES

function crearIterador(carrito){
    //Inicializampos el indice
    let i = 0;
    //Declaramos el retorno
    return{
        //declaramos una función que condiciona el fin de la iteracción
        siguiente: () => {
            //inicializamos la condicion de la finalicacion de la iteración
            let fin = (i >= carrito.length);
            //declaramos un ternario para dar el valor
            let valor = !fin ? carrito[i++] : undefined;
            //regresamos valor y atributo  
            return{
                fin: fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Producto','Producto1', 'Producto2', 'Producto3', 'Producto4'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());