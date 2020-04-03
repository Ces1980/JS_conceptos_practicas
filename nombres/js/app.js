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

    /**
     * Se construye la url conforme los datos del formulario
     * El proyecto se monto en un servidor local ya que la página en su url oficial
     * se encuentra fuera de servicio: Se uso xampp como servidor y el proyecto
     * se agrega dentro de la carpeta c:xampp/htdocs
     */
    let url = '';
    url += 'http://localhost/uinames/uinames.com/api/?';
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

    /**
     *  Conectar con ajax
     */
    // Iniciar XMLHTTPRequest
    //--> Creando objeto
    const xhr = new XMLHttpRequest();
    //Abrir la conexión
    /**
     * Tres parametros: tipo de petición:'GET', url:url(generada de forma dinamica),  true:petición asincrona
     */
    xhr.open('GET', url, true);
    /**
     * Datos e impresión del template
     */
    xhr.onload = function() {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);
            //Generar el HTML
            let htmlNombres = '<h3>Nombres Generados</h3>';

            htmlNombres += '<ul class="lista">';
            //Imprimir cada nombre
            nombres.forEach(nombre => {
                htmlNombres += `
                     <li>${nombre.name}</li>
                     `;
            });
            htmlNombres += '</ul>';
            //Inyectar el código html
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    //Enviar la conexion
    xhr.send();
}