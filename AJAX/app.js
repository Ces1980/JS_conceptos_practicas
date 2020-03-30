document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    //Una vez que carga la página
    xhr.onload = function() {
            //Estado de la conexion --> this se refiere a xhr que es la variable declarada
            if (this.status === 200) {
                document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`
            }
        }
        //Enviar el request
    xhr.send();
}