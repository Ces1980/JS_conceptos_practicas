//funciones IIFE --> Expresiones de función ejecutadas inmediatamente


(function() {
    console.log('Creando un IIFE');
})();


(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

//Métodos de propiedad --> Cuando una función se pone dentro de un objeto

const musica = {
    reproducir: function() {
        console.log('Reproduciendo música');
    },
    pausar: function() {
        console.log('Pause a la música');
    }
}

//Los métodos también pueden guardarse /crearse fuera del objeto
musica.borrar = function(id) {
    console.log(`Borrando canción con el ID ${id}`);
}
musica.reproducir();
musica.pausar();
musica.borrar(5);