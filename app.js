/**
 * Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta.
 */


//Listado de paises

const paises = ['México', 'Canada', 'EEUU', 'España', 'Brazil', 'India'];


// Callback         los paises se muestran despues de 3 segundos
function nuevoPais(pais, mostrarPaises) {
    setTimeout(function() {
        paises.push(pais);
        //Se agrega un nuevo país y después se vuelve a ejecutar la funcion de mostrar pais
        mostrarPaises();
    }, 3000);
}

//Los paises se muestran después de 2 segundos
function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 2000);
}


//Agregar nuevo pais
nuevoPais('Guatemala', mostrarPaises);

//Mandar llamar a la función
mostrarPaises();