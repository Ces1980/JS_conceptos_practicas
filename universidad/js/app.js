//Agregar a local Storage

localStorage.setItem('nombre', 'Juan');


//Session Storage

sessionStorage.setItem('nombre', 'Juan');


//Eliminar de local Store

localStorage.removeItem('nombre');

//Eliminar de local Storage con variable


let nombre1 = localStorage.removeItem('nombre1');
console.log(nombre1);

//Limpiar completamente el localStorage

localStorage.clear();

setTimeout(borrarSessionStorage(), 3000);

function borrarSessionStorage() {
    sessionStorage.clear();
}