const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);


function cargarAPI() {
    //Crear el objeto
    const xhr = new XMLHttpRequest();
    //Abrir la conexión
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        //Carga y leer datos
        if (this.status === 200) {
            //la variable respuesta guarda el texto como objeto parceado anteriormente de formato jason
            /*Esta instrucción muestra los datos en json*/
            console.log(this.responseText);
            /**Esta instrucción muestra los datos como un arreglo */
            console.log(JSON.parse(this.responseText));

            const respuesta = JSON.parse(this.responseText);

            let contenido = '';

            respuesta.forEach(function(post) {

                contenido += `
                <ul>
                <br>
                    <h2>Titulo de post: ${post.title}</h2>
                    <p>Mensaje del post: ${post.body}</p>
                </ul>
                <br>
                `;

            });

            document.getElementById('listado').innerHTML = contenido;
        }
    }

    //Enviar la conexion
    xhr.send();
}