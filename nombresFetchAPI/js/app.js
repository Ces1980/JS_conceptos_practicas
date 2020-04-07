document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    // Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;



    let url = '';
    url += 'http://localhost/uinames/uinames.com/api/?';
    // Si hay origen agregarlo a la URL
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    // Si hay un genero agregarlo a la URL
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    // Si hay una cantidad agregarlo a la URL
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }

    // Código de FETCH API AQUI
    fetch(url)
        .then(function(res) {
            //Tipo de respuesta
            return res.json();
        })
        .then(function(data) {
            //Código html que se va a imprimir con la respuesta de la api consultada
            let html = '<h2>Nombres generados</h2>';
            //Concatenado los valores obtenidos
            html += `<ul class="lista">`;
            data.forEach(function(nombre) {
                html += `
                <li>${nombre.name}</li>
                `;
            })
            html += `</ul>`;
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
}