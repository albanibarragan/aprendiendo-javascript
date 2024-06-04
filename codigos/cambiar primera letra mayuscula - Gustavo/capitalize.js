/*

Ejercicio Albani

Recibir un texto y devolver el texto con la primera letra de cada palabra en mayúscula
y las demás en minúsculas

*/

//Solución

function PrimeraMayuscula(palabra) {
  let primeraLetra = palabra.slice(0, 1).toUpperCase();
  let demasLetras = palabra.slice(1, palabra.length).toLowerCase();
  return primeraLetra + demasLetras;
}

let texto = "gAmE oF tHrOnEs";
let textoAux = "";

let palabras = texto.split(" ");

for (var i = 0; i < palabras.length; i++) {
  textoAux += PrimeraMayuscula(palabras[i]) + " ";
}
console.log("Texto original:");
console.log(texto);
console.log("Texto esperado:");
console.log("Game Of Thrones");
console.log("Texto cambiado:");
console.log(textoAux);
