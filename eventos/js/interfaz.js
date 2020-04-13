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
}