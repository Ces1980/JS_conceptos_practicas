//Modificando valores de un arreglo cunado se declara un arreglo como constante

const numeros = [1, 3, 5, 7];
console.log('Arreglo sin reasignar valores a sus elementos ' + numeros);
console.log('Reasignando valor al elemento 2(vale 5) por el valor20 em el arreglo ');
numeros[2] = 20;
console.log(numeros);

/*El arreglo declarado no se puede reasignar pero si se pueden modificar sus elementos individualmente*/