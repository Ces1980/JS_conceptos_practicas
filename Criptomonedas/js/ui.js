class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.ObtenerMonedasAPI()
            .then(monedas => {
                /**
                 * El método Object.entries() devuelve una matriz de pares propios de 
                 * una propiedad enumerable [key, value] de un objeto dado, 
                 * en el mismo orden que es proporcionado por for...in 
                 * (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
                 * entries() toma los objetos y los convierte en arreglos
                 */
                /**
                 * La sintaxis de  for...of es específica para las colecciones, y no para todos los objetos.
                 *  Esta Iterará sobre cualquiera de los elementos de una colección que tengan 
                 * la propiedad [Symbol.iterator].
                 */
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {

                    console.log(key);
                }
            })
    }

    /**mostrarMensaje('Mensajes que se quiere mostrar', 'Clases para darle estilos a el mensaje') */
    mostrarMensaje(mensaje, clases) {
        //Creamos la parte del html donde se va a mostra el mensaje
        const div = document.createElement('div');
        //Agregamos los atributos para reconocer las clases
        div.className = clases;
        //Se inserta el contenido al div
        div.appendChild(document.createTextNode(mensaje));

        //Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes')
        divMensaje.appendChild(div);
        //Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);

    }
}