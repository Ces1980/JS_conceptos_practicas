// Prototipos

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


//Creando protoripo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`;
}

const cliente1 = new Cliente('César', 5000);

console.log(cliente1);

//Banca para empresas

function Empresa(nombre, saldo, telefono, tipo) {
    //Heredar de la clase Cliente 
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}
//Heredando el prototipo "nombreClienteSaldo " de clase Cliente a la clase Empresa
Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa('Udemy', 500000, 55556589, 'Educación');
console.log(empresa.nombreClienteSaldo());