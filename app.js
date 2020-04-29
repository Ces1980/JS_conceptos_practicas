//EXPRESIONES REGULARES

/*
Las expresiones, son un lenguaje utilizado para describir patrones en cadenas
de caracteres. Forman un pequeño y separado lenguaje,
que está incluido en JavaScript (y en la gran mayoría de lenguajes de programación).
No es un lenguaje fácil de leer, pero es una herramienta muy poderosa que
simplifica mucho tareas de procesado de cadenas de caracteres.
*/
let valor, expReg;

//-d -> digito
//-D -> mayusculas
expReg =/[0-9]/;
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

//NEgar la expresión
expReg =/[^0-9]/;
valor = 'hola';

//la sintaxis  {1,2}
expReg=/\d{1,2}-\d{1,2}-\d{4}/;
valor='10-10-2018';
valor='1-1-2020';
valor='05-100-2020';
valor='10-10-20';

//Letras o números  (+)=> El uso del simbolomás es para indicar qu se estan esperando
//más números o letras
expReg=/\w+/;
valor = 'Mensaje de prueba';
valor=1234;
valor=' ';

//Revisar que son puros números
expReg=/\d+/;
valor= 'hola';
valor=12345;
expReg=/([0-9])\w+/;
valor= 1234;
valor= 'Hola mundo';

//Teexto sean puras mayusculas
expReg = /([A-Z])\w+/;
valor='cesar';
valor=12345;
valor='CESAR';

//Revisar que todas las letras sean minusculas
expReg = /([a-z])\w+/;
valor= 'cesar';
valor=12345;

console.log(valor)
console.log(expReg.test(valor));

