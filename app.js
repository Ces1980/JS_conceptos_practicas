//Método alternativo para crear objetos

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platino';
        } else {
            tipo = 'Normal'
        }

        return tipo;
    }
}

const persona = new Cliente('Pedro', 20000);

const persona1 = new Cliente('César', 50000);



console.log(persona);
console.log(persona.saldo);
console.log(persona.nombre);
console.log(persona.tipoCliente());
console.log(persona1);
console.log(persona1.saldo);
console.log(persona1.nombre);
console.log(persona1.tipoCliente());