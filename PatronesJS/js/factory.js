/* Factory Method permite la creación de objetos de un subtipo determinado a través de una clase Factory.
Esto es especialmente útil cuando no sabemos, en tiempo de diseño, el subtipo que vamos a utilizar
o cuando queremos delegar la lógica de creación de los objetos a una clase Factory.
 Utilizando este patrón podemos crear instancias dinámicamente mediante la configuración, estableciendo cual será la implementación a utilizar en un archivo de texto, XML, properties o mediante cualquier otra estrategia. */
// @ts-nocheck
function constructorSitios() {

    this.crearElemento = function (texto, tipo) {
        let html;

        // Se compara el tipo de elemento que se quiere crear
        if (tipo === 'input') {

            html = new InputHTML(texto);

        } else if (tipo === 'img') {

            html = new ImagenHTML(texto);

        } else if (tipo == 'h1') {

            html = new HeadingHTML(texto);

        } else if (tipo === 'p') {

            html = new ParrafoHTML(texto);

        }

        html.tipo = tipo;

        html.mostrar = function () {
            // No se sabe que instancia se va a crear, por eso se le pasa this.tipo como parametro
            // const elemento = document.createElement(this.tipo);
            const elemento = document.createElement(this.tipo);

            if (this.tipo === 'input') {
                elemento.setAttribute('placeholder', this.texto);
            } else if (this.tipo === 'img') {
                elemento.setAttribute('src', this.texto);
            } else {
                elemento.appendChild(document.createTextNode(this.texto));
            }

            document.querySelector('#app').appendChild(elemento);

        }
        return html;
    }
}

// Es la instancia que se ha elegido crear
const InputHTML = function (texto) {

    this.texto = texto;

}

const ParrafoHTML = function (texto) {

    this.texto = texto;

}
const ImagenHTML = function (texto) {

    this.texto = texto;

}
const HeadingHTML = function (texto) {

    this.texto = texto;

}
const sitioweb = new constructorSitios();

// Almacenar los elementos
const elementosWeb = [];
// LLEnamos el arreglo
elementosWeb.push(sitioweb.crearElemento('Bienvenidos', 'h1'));
elementosWeb.push(sitioweb.crearElemento('Bienvenidos a mi sitio web', 'p'));
elementosWeb.push(sitioweb.crearElemento('imagen.svg', 'img'));
elementosWeb.push(sitioweb.crearElemento('Informaciòn del contacto', 'h1'));
elementosWeb.push(sitioweb.crearElemento('Contacto', 'input'));
elementosWeb.push(sitioweb.crearElemento('Guardame en tus contactos', 'p'));

/* Mostrar cada uno de los elementos agregados previamente con la funcion push */
elementosWeb.forEach(elemento => {
    // mostrar los elementos usando el metodp mostar()
    elemento.mostrar();
})

