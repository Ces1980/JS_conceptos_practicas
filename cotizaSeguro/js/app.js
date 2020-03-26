//Cotizador constructor
function Seguro() {}



/**Fecha que permite que el auto asegurado se maximo veiteaños antiguo
 * que en la fecha actual
 */
const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    //Se crean las opciones acorde a el año max y minimo de autos que se puede asegurar
    let option = document.createElement('option');
    //Identificar las opciones que son validas
    option.value = i;
    //Incrustar código validado por el interador
    option.innerHTML = i;
    //Méter el código html en el index
    selectAnios.appendChild(option);
}