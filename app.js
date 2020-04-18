//EXPRESIONES REGULARES
let valor, expReg;

//-d -> digito
//-D -> mayusculas
expReg =/[1-9]/;
valor = 1992;

//Una fecha en exp regular 20-10-2020
expReg = /\d\d-\d\d-\d\d\d\d/;
valor= '20-10-2020';

//  Hora 10:30
expReg = /\d\d:\d\d/;
valor= '10:30';

//  Hora 10:30 am
expReg = /\d\d:\d\d \D\D/;
valor= '10:30 AM';

//Cadenas de digitos
expReg = /\d+/;
valor= 12365897451254;

console.log(expReg.test(valor));

