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
    } else {
        //Todo bien
    }
})