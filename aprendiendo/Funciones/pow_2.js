function pow(x, n) {
  let resultado = x;
  for (let i = 1; i < n; i++) {
    resultado *= x;
  }
  return resultado;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
