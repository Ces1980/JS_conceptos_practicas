//funcion
let aprendiendo;
/**Función tradicional */
aprendiendo = function() {
        console.log('Aprendiendo JavaScript moderno');
    }
    /**Arrow function */
aprendiendoArrow = () => {
        console.log('Aprendiendo funciones tipo arrow');
    }
    /**Funcion con una sola línea no requiere llaves */
aprendiendoArrowUnaLinea = () => console.log('Aprendiendo funciones tipo arrow de una sola línea');
/**Retornando un objeto*/
aprendiendoArrowDevolviendoObjeto = () => ({ Aprendiendo: 'JavaScript' });
/**Pasando parametros */
suma = (a, b) => a + b;
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
//Pasando un parametro los parentesis de los parametros es opcional
nombre = nombre => console.log(`Mi nombre es: ${nombre}`);
//Callback normal
const productos = ['Disco', 'Camisa', 'Guitarra'];
const letrasProducto = productos.map(function(producto) {
    return producto.length;
});

/**ForEach tradicional */
console.log('ForEach tradicional');
const motos = ['Yamaha', 'BMW', 'Harley Davidson', 'Lucati']
motos.forEach(function(moto) {
    console.log(moto);
})

/**ForEach con arrow funtion */
console.log('ForEach con función arrow');
const autos = ['Ford', 'Mazda', 'Toyota', 'Hynday', 'Nissan'];
autos.forEach(auto => {
    console.log(auto);
});

/**Callback con funciones arrow */
const ropa = ['Blusa', 'Chamarra', 'Pantalón'];
const letrasRopa = ropa.map(ropa => ropa.length);
console.log('Callback con funciones arrow');
console.log(letrasRopa);
console.log('Callback con funciones normales');
console.log(letrasProducto);
aprendiendo();
aprendiendoArrow();
aprendiendoArrowUnaLinea();
console.log(aprendiendoArrowDevolviendoObjeto());
console.log(suma(5, 9));
aprendiendo("JavaScript");
nombre('César');