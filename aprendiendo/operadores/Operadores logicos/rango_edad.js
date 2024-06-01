/*Escribe una condición “if” para comprobar que age(edad) está entre 14 y 90 inclusive.

“Inclusive” significa que age puede llegar a ser uno de los extremos, 14 o 90.
*/
let age = 22;

if (age >= 14 && age <= 90) {
  console.log("1.Estas en el rango de edad");
} else {
  console.log("1.No estas en el rango de edad");
}

/**
 * Escribe una condición if para comprobar que age NO está entre 14 y 90 inclusive.

Crea dos variantes: la primera usando NOT !, y la segunda sin usarlo.
 */

if (!(age >= 14 && age <= 90)) {
  console.log("2.no estas en el rango de edad");
} else {
  console.log("2.Si estas en el rango de edad");
}

let resultado =
  age < 14 || age > 90 ? "No esta en el rango" : "Esta en el rango";

console.log("Resultado: " + resultado);
