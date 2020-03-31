document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    //Una vez que carga la página
    xhr.onreadystatechange = function() {
        console.log(`Estado ${this.readyState}`);
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    //ready status
    /**
     * 0 -> no inicializado
     * 1-> Conexion establecida 
     * 2-> Recibido
     * 3-> procesando
     * 4-> Respuesta lista
     */
    /* xhr.onload = function() {
            //Estado de la conexion --> this se refiere a xhr que es la variable declarada
            if (this.status === 200) {
                document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`
            }
        } */
    //Enviar el request
    xhr.send();
}