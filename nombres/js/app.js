/*
 *Seleccionar el formulario --> document.querySelector('#generar-nombre')
 *Agregar un avento a un objeto en especifico -->addEventListener(Evento:'submit', Objeto:cargarNombres);
 */
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);


//Llamada a ajax e imprimir resultados
function cargarNombres(evento) {
    /**
     *  preventDefault es para que la función no haga su acción por defecto
     */
    evento.preventDefault();
    //Leer las variables
    //Identificamos el select y lo regusdamos en la variable origen
    const origen = document.getElementById('origen');
    /*identificamos la opción seleccionada y la depositamos en la variable origenSeleccionado
     * En el formulario al eligir costarrica se muestra costrarrica se se hace un console.log
     */
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    /**
     * Los mismos pasos paque se hicieron para identificar origen seleccionado se realizan para identificar
     * el genero
     */
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    /**
     * Se obtiene la cantidad de nombres que se quiere obtener
     */
    const cantidad = document.getElementById('numero').value;
    console.log(cantidad);

    /**
     * Se construye la url conforme los datos del formulario
     */
    let url = '';
    url += 'http://uinames.com/api/?';
    //Si hay origen agregarlo a la url --> el origen se selecciona según las opciones que se muestran en el formulario
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    //Si hay genero seleccionado agregarlo a la url --> el genero se selecciona según las opciones que se muestran en el formulario
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    /*Si hay cantidad de nombres seleccionado agregarlo a la url 
    --> la cantidad denombres se selecciona según las opciones que se muestran en el formulario*/
    if (generoSeleccionado !== '') {
        url += `amount=${cantidad}&`;
    }

    console.log(url);

}