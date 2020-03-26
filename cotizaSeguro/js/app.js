//Constructor para seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


//Creación de prototype cotizarSeguro(seguro)
Seguro.prototype.cotizarSeguro = function(informacion) {
    /**
     * 1 = americano 1.15
     * 2 = asiatico 1.05
     * 3 = europeo 1.35
     */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;

        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;
            break;

    }



    //Leer el año
    const diferencia = new Date().getFullYear() - this.anio;
    //Cadea año de diferencia hay que reducir 3% del valor del seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /**
     * Si el seguro es básico se multiplica por 30%
     * Si el seguro es completo se multiplica por 50%
     */

    if (this.tipo === 'basico') {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.5;
    }

    return cantidad;

}

//Todo lo que se muestra
function Interfaz() {}



//Mensaje que se imprime en el html
Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    //Insertar el div con el contenido
    div.innerHTML = `${mensaje}`;

    //Insertar el contenido del div a la estructura HTML del formulario
    /**insertBefore(elemento que se quiere insetar, antes de donde insertar) */
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000);
}




//Imprime el resultado de la cotización
Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');
    let marca;
    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;

        case '2':
            marca = 'Asiatico';
            break;

        case '3':
            marca = 'Europeo';
            break;
    }

    const div = document.createElement('div');

    div.innerHTML = `
   <p class = 'header'>Tu Resumen:</p>
   Marca: ${marca}
   <br>
   Año: ${seguro.anio}
   <br>
   Tipo: ${seguro.tipo}
   <br>
   Total: $ ${total}
   `;
    /**Cargar el spiner para simular el envío */
    //Seleccionando la ubicación de la imagen
    const spinner = document.querySelector('#cargando img');
    //Cargando la imagen
    spinner.style.display = 'block';
    /**
     * Funcion setTimeout que esconde el spinner y muestra el resultado 
     * después de 3 segundos simulando el
     *  proceso de muestra de cotización
     */
    setTimeout(function() {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);
}



/**   --> EventListener*/

//Cotizar seguro es el id con el cual se identifica el cuerpo del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        //Interfaz mosrando un error
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error')
    } else {

        //Limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');

        if (resultados != null) {
            resultados.remove();
        }

        //Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);

        //Cotizar el seguro con prototype creado
        const cantidad = seguro.cotizarSeguro();

        //Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando....', 'correcto');
    }
});



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