
const comprarBoleto = (function () {

    //Privado
    let evento = 'Conferencia JS 2020';
    const adquirirBoleto  =() =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // De acceso público
    return {
        // evento
        mostrarBoleto: function () {
           adquirirBoleto();
        }
    }
})();


// console.log(evento)
comprarBoleto.mostrarBoleto()
