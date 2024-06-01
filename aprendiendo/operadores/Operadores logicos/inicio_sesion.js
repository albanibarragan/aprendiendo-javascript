/*
Escribe un código que pregunte por el inicio de sesión con propmt.

Si el visitante ingresa "Admin", entonces prompt(pregunta) por una contraseña, si la entrada es una linea vacía o Esc – muestra “Cancelado.”, si es otra cadena de texto – entonces muestra “No te conozco”.

La contraseña se comprueba de la siguiente manera:

Si es igual a “TheMaster”, entonces muestra “Bienvenido!”,
Si es otra cadena de texto – muetra “Contraseña incorrecta”,
Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”

*/

let userName = prompt("¿Quien es?");

if (userName == "Admin") {
  let password = prompt("Ingrese su contraseña");
  if (password == "TheMaster") {
    console.log("Bienvenido!");
  } else if (password == "" || password == null) {
    console.log("Cancelado");
  } else {
    console.log("Contraseña incorrecta");
  }
} else if (userName == "" || userName == null) {
  console.log("Cancelado");
} else {
  console.log("No te conozco");
}
