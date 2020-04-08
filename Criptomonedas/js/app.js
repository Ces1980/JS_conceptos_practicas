//Se instancian en el archivo principal praa que la clase este disponible en toda la aplicación
/**Se usa la clave api obtenida al crear el perfil en el sitio web CrytoCompare*/
const cotizador = new API('6a24315c3f28ba96e19bd8a6155fc18382281dff454bb7807738e73bdea3fa38');
const ui = new Interfaz();


// leer el formulario

const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    // comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // arrojar una alerta de error
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        // todo bien, consultar la api
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }


})