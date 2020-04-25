const comparBoleto = ( function(){


    // Privado --> no puede ser accedido el valor de la variable desde fuera del método
    let evento = 'Conferencia JS 2020';


    //Publico --> solo puede ser accedido con un return
    return{
        mostarBoleto: function(){
            console.log(evento)
        }
    }
})();


comparBoleto.mostarBoleto()