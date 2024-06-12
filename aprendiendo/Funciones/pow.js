/**
 Escriba la función pow(x,n) que devuelva x como potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el resultado.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Cree una página web que solicite x y n, y luego muestre el resultado de pow(x,n).

Ejecutar el demo

PD: En esta tarea, la función solo debe admitir valores naturales de n: enteros desde 1.
 */

function pow(x, n) {
  return x ** n;
}

let x = +prompt("Ingrese el valor de x");
let n = +prompt("Ingrese la potencia del numero");

if (n < 1) {
  alert(`Potencia ${n} no soportada,
        use un entero mayor a 0`);
} else {
  alert(pow(x, n));
}
