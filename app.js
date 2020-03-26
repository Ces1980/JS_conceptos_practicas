// Función Object Create
const Cliente = {
    imprimirSaldo: function() {
        return `Holan${this.nombre} tu saldo es de ${this.saldo}`
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

//Crear el objeto y darle valor a atrinutos

const lupe = Object.create(Cliente);
lupe.nombre = 'Lupe';
lupe.saldo = 500;
console.log(lupe);


console.log(lupe.imprimirSaldo());

lupe.retirarSaldo(200);

console.log(lupe.imprimirSaldo());