/* Funciones autoejecutables
 *Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés)
 son funciones que se ejecutan tan pronto como se definen.

(function () {
    statements
})();

Es un patrón de diseño también conocido cómo función autoejecutable (Self-Executing Anonymous Function  )
y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el
Operador de Agrupación (). Esto impide accesar variables fuera del IIFE, así
cómo contaminar el alcance (scope) global.

La segunda parte crea la expresión de función cuya ejecución es inmediata (), siendo
interpretado directamente en el engine de JavaScript.
*/
const comprarBoleto = ( function(){

    //Privado
    let evento = 'Conferencia JS 2020';
    let precio = 200;

    return{
        // evento
        mostrarBoleto: function(){
            console.log(evento);
            console.log(precio);
        }
    }
})();


// console.log(evento)
comprarBoleto.mostrarBoleto()
