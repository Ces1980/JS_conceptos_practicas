/*Event Listener click al buscador*/

document.querySelector('#submit-buscador').addEventListener('click',
    function(e) {
        /**  e.preventDefault(); evita que se realice una acción*/
        e.preventDefault();
        alert('Buscando Cursos');
    });