/**
 *  "Tenemos un producto en una tienda. Cuesta 1500 y tenemos un descuento del 25%. Tengo 1150€ en mi cartera. Escribe un código que me diga si puedo comprarlo. No uses paréntesis."
 */

let producto = 1500 ;
let cartera = 1150;

if(producto * 0.75 <= cartera ){
    console.log("Puedes comprarlo")
}
else {    console.log("no puedes comprarlo")
}
    