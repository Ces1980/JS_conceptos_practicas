//Swith en JavaScript
const metodoPago = 'tarjeta de debito';
switch (metodoPago) {
    case 'efectivo':
        console.log('Usuario pago con efectivo');
        break;
    case 'tajeta de credito':
        console.log('Usuario pago con tarjeta de credito');
        break;
    case 'tarjeta de debito':
        console.log('Usuario pago con tarjeta de debito');
        break;
    case 'cheque':
        console.log('Usuario pago con cheque');
        break;
}

let numero = parseInt(prompt('Ingresa un número'));
switch (numero) {
    case 1:
        console.log('Ingreso el número uno');
        break;
    case 2:
        console.log('Ingreso el número dos');
        break;
    case 3:
        console.log('Ingreso el número tres');
        break;
    case 4:
        console.log('Ingreso el número cuatro');
        break;
    case 5:
        console.log('Ingreso el número cinco');
        break;
    default:
        if (numero > 3) {
            console.log('Ingreso un número que no existe en la base de datos');
        } else if (numero != Number) {
            console.log('Ingreso un string');
        }
        break;
}