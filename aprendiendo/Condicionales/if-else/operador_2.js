/*let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}
*/
//pasar a operador ternario 
let login = 'Albani'
let message = (login == 'Empleado') ? 'Hola' : (login == 'Director') ? 'Felicidades' : (login == '') ? 'Sin sesión' : 'Incorrecto';

console.log(`Bienvenido, ${login}`)