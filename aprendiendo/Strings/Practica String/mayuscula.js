/**
 *
 *
 */
let palabra = "hola MuNdO";

function mayusculaCaracter(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(mayusculaCaracter(palabra));
