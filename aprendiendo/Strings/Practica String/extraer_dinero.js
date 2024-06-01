function extractCurrencyValue() {
  return parseFloat("$188".slice(1)); //quiero remover el simbolo de $
}

console.log(extractCurrencyValue() === 188);
