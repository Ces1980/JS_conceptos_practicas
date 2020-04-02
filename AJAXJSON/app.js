const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

boton1.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            //Regresa datos en formato json
            console.log(this.responseText);
            //Regresa datos en un objeto
            const persona = JSON.parse(this.responseText);

            const htmlTemplate = `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Persona: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Trabajo: ${persona.trabajo}</li>
                </ul>

            `;
            //Insertar los datos del empleado en código html
            document.getElementById('empleado').innerHTML = htmlTemplate;

        }
    }
    xhr.send();
});



boton2.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            //Regresa datos en formato json
            console.log(this.responseText);
            //convierte  formato json en un objeto
            const personal = JSON.parse(this.responseText);
            /*Imprime en pantalla los datos en un arreglo */
            //Se inicializa la variable porque de no hacerloal recorrer el arreglo se marcara que la variable esta indefinida
            let htmlTemplate = '';
            //La variable template se le indica que va ir sumando los registros recorridos al código html
            personal.forEach(persona => {
                htmlTemplate += `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Persona: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>
            </ul>
                `;
            });
            //Insertar los datos del arreglo empleados en código html
            document.getElementById('empleados').innerHTML = htmlTemplate;


        }
    }
    xhr.send();
});