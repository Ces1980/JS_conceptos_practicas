//Instanciar las clases
const eventBrite = new EventBrite();
const ui = new Interfaz();

//listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e)=> {
    e.preventDefault();
//Comprobar si la funcion del listener funciona console.log('Presionado')

    //Leer el texto del input
    const textoBuscador = document.getElementById('evento').value;
    //Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    /* console.log(textoBuscador)
    console.log(categoriaSeleccionada) */
    //Revisar que haya algo escrito en el buscador
    if(textoBuscador !== ''){
        console.log('Buscando')
    }else{
        console.log('No hay nada')
    }
})