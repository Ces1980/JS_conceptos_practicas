//Object literal


const cliente = {

    nombre: 'César',
    saldo: 200,
    tipoCliente: function() {
        let tipo;

        if (this.saldo > 1000 && this.saldo < 4999) {
            tipo = 'Gold';

        } else if (cliente.saldo >= 5000) {
            tipo = 'Premium';

        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

console.log('El cliente es de tipo: ' + cliente.tipoCliente());
console.log(`El saldo del cliente es de ${cliente.saldo}`);
console.log(`El cliente es de tipo ${cliente.tipoCliente()}`);


/**
 * this permite acceder a los atributos del mismo objeto
 * this.atributo = objeto.atributo
 */