/**
 *  Este ejercicio te pide crear un programa que calcule el Índice de Masa Corporal (IMC) de una persona.

Objetivo: Ingresar el peso y la altura de una persona y calcular su IMC.
 */

let peso = +prompt("Ingrese su peso");
let altura = +prompt("Ingrese su altura");

let IMC = peso / (altura * altura)

alert("Su peso es de: " + IMC.toFixed(2))

