let userName = "Juan";

function showMessage() {
  userName = "Bob"; // (1) Cambió la variable externa

  let message = "Hola, " + userName;
  console.log(message);
}

console.log(userName); // Juan antes de llamar la función

showMessage();

console.log(userName); // Bob, el valor fué modificado por la función
