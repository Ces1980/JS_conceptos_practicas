//GENERADORES

// * -> le indica a javaScript qye vas a crear un generador 
function *crearGenerador(){
    //yield --> acepta cualquier dato primitivo
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;

}

const iterador = crearGenerador();

/* Recoorer los campos */
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);


