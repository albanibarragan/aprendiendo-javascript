function getRandomNumber() {
  //generar el numero aleatorio
  let num = Math.random();
  // hacer que el numero este entre 0 y 10
  num *= 10;
  //redondear
  // redondeamos hacia abajo para que esté entre 0 y 9
  let redondear = Math.floor(num);
  // le sumamos uno para que esté entre 1 y 10
  return redondear + 1;
}

console.log(getRandomNumber());
