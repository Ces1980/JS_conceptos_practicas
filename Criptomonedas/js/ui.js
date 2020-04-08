class Interfaz {

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