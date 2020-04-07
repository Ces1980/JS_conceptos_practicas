document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);


function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let html = '';
            data.forEach(function(foto) {
                html += `
                <ul>
                <li>Autor: ${foto.author}</li>
                <li>Archivo: ${foto.filename}</li>
                <li>Formato: ${foto.format}</li>
                <a target="_blank" href="${foto.post_url}">Ver imagen</a>
                </ul>
                `
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
}


function cargarTXT() {
    fetch('datos.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error);
        })
}


function cargarJSON() {
    /**palabra fetch pasando la url  */
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';
            data.forEach(function(empleado) {
                html += `
                <li>${empleado.nombre}: ${empleado.puesto}</li>
                
                `
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
}