//Se instancian en el archivo principal praa que la clase este disponible en toda la aplicación
/**Se usa la clave api obtenida al crear el perfil en el sitio web CrytoCompare*/
const cotizador = new API('6a24315c3f28ba96e19bd8a6155fc18382281dff454bb7807738e73bdea3fa38');
const ui = new Interfaz();


//Leer el formulario
const formulario = document.querySelector('#formulario');

//eventLissener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    //Se obtienen la ubicación de la moneda seleccionada(dolar, euro, peso, etc..)
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //Leer la criptomoneda seleccionada
    const criptoSelect = document.querySelector('#criptomoneda');
    //Se obtienen la ubicación de la criptomoneda seleccionada
    const criptoSeleccionada = criptoSelect.options[criptoSelect.selectedIndex].value;

    //Comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === '' || criptoSeleccionada === '') {
        //Arrojar una alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');

    } else {
        //Todo bien, consultar la API
        cotizador.obtenerValores(monedaSeleccionada, criptoSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSelect, criptoSeleccionada);
            })
    }
})