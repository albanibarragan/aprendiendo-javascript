let finanzas = 1000;

function pagarImpuesto(pago = 100) {
  finanzas = finanzas - pago;
  return finanzas;
}

pagarImpuesto(500);
pagarImpuesto();
console.log(finanzas);
