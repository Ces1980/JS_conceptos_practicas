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
                /**Selecionado el select del fomulario --> crear un select de opciones */
                const select = document.querySelector('#criptomoneda');
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
                //-> Iterar por los resultados de la api
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    //Añadir el simbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    //Se obtiene los value al recorrerse el for
                    opcion.value = value.Symbol;
                    //Obtener el texto que va a estar dentro de los opciones
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
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

    //Imprime el resultado de la cotizacion

    mostrarResultado(resultado, moneda, crypto) {

        const datosMoneda = resultado[crypto][moneda];

        //recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);
        //Construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El Precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                </div>
            </div>
        `;
        //Insertar el resultado
        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}