//Constructor para seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Todo lo que se muestra
function Interfaz() {}



// --> EventListener
//Cotizar seguro es el id con el cual se identifica el cuerpo del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        //Interfaz mosrando un error
        console.log('Te faltan datos');
    } else {
        //Instanciar seguro y mostrar interfaz
        console.log('Todo correcto');
    }
})

/**Fecha que permite que el auto asegurado se maximo veiteaños antiguo
 * que en la fecha actual
 */
const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    //Se crean las opciones acorde a el año max y minimo de autos que se puede asegurar
    let option = document.createElement('option');
    //Identificar las opciones que son validas
    option.value = i;
    //Incrustar código validado por el interador
    option.innerHTML = i;
    //Méter el código html en el index
    selectAnios.appendChild(option);
}