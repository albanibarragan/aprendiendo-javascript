let cuentaAtras = 10;

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1;

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue; // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras);
}
