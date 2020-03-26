class Cliente {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`
    }


    static bienvenida() {
        return 'Bienvenida al cajero';
    }
}

class Empresa extends Cliente {

    constructor(nombre, saldo, telefono, tipo) {
        /**Toman los valores de la clase padre */
        super(nombre, saldo);
        /**Se asignan valores directamente*/
        this.telefono = telefono;
        this.tipo = tipo;
    }
    static bienvenida() {
        return 'Bienvenida al cajero para empresas';
    }
}


const empresa = new Empresa('Cosita', 550000, 5568223366, 'Costura');
const cesar = new Cliente('César', 5500);
console.log(Empresa.bienvenida());
console.log(empresa);
console.log(empresa.imprimirSaldo());
console.log(Cliente.bienvenida());
console.log(cesar);
console.log(cesar.imprimirSaldo());