class Cliente {

    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre} ${this.apellido}, tu saldo es de ${this.saldo}`
    }

    tipoCliente() {
        let tipo;

        if (this.saldo > 10000) {
            tipo = 'Gold';
        } else if (this.saldo > 5000) {
            tipo = 'Platino'
        } else {
            tipo = 'normal';
        }
        return `Eres un cliente de tipo ${tipo}`;
    }

    retirarSaldo(retiro) {

        return this.saldo -= retiro;
    }

    static bienvenida() {
        return 'Bienvenida al cajero';
    }
}

console.log(Cliente.bienvenida());

const maria = new Cliente('María', 'Martínez', 5500);

console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());
console.log(maria.retirarSaldo(200));