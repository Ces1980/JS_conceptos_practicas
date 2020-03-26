//Constructor para seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Todo lo que se muestra
function Interfaz() {}

//Mensaje que se imprime en el html
Interfaz.prototype.mostrarError = function(mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    //Insertar el div con el contenido
    div.innerHTML = `${mensaje}`;

    //Insertar el contenido del div a la estructura HTML del formulario
    /**insertBefore(elemento que se quiere insetar, antes de donde insertar) */
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000);
}

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
        interfaz.mostrarError('Faltan datos, revisa el formulario y prueba de nuevo', 'error')
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