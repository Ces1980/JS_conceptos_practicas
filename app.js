// Prototipos

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}


//Creando un prototipo
Cliente.prototype.tipoCliente = function() {

    let tipo;

    if (this.saldo > 1000) {
        tipo = 'Premium'
    } else if (this.saldo > 499) {
        tipo = 'Gold'
    } else {
        tipo = 'Normal'
    }

    return tipo;
}

//Creando protoripo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo},
     Tipo de cliente: ${this.tipoCliente()}`;
}

//Retirar Saldo
Cliente.prototype.retirSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('César', 5000);
const cliente2 = new Cliente('Vero', 600);
const cliente3 = new Cliente('Vane', 100);

cliente2.retirSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());