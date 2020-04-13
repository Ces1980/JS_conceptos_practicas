class Interfaz {
    constructor() {
            //Inicializa la app al instanciar
            this.init();
            //Leer el resultado
            this.listado = document.getElementById('resultado-eventos');
        }
        // para cuando se inicialice la app
    init() {
        //Llamar imprimir categorias de la REST API
            this.imprimirCategorias()
        }
        //Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventBrite.obtenerCategorias()
        .then(categorias => {
            const cats = categorias.categorias.categories;
            //Seleccionar el select de categorias
            const selectCategoria = document.getElementById('listado-categorias');
            //Recorremos el arreglo e imprimimos las <options>
            cats.forEach(cat => {
                //*Creamos el elemento option
                const option = document.createElement('option');
                //Le asignamos un valor a option que nos ayude al recorrido con el for
                option.value = cat.id;
                //Agregamos el texto(nombre de las opciones que nos ofrece la api)
                option.appendChild(document.createTextNode(cat.name_localized));
                //para elegir la opciòn y se muestre en la ventana
                selectCategoria.appendChild(option);
            });
            console.log(cats)
        })
    }

    //Método para imprimir mensajes
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        //Agregar Texto
        div.appendChild(document.createTextNode(mensaje));
        //Buscar un nodo padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        //quitar el alert después de 3 segundos
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    } 

    //Desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}