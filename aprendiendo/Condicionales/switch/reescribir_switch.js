/**
 * Reescribe el código debajo utilizando solo un argumento switch:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/
let a = +prompt("Ingresa un valor para a", "");

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
  default:
    console.log("La opcion ingresada no  es correcta");
}
