/*
Función min(a, b)
importancia: 1
Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

Por ejemplo:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

//Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
