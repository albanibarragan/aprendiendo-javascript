// 1- Piedra 2. Papel 3. Tijera 
let usuario = parseInt(prompt(`Ingrese su usuario para jugar: 1. Piedra 2. Papel 3. Tijera `));

// numero random entre dos valores Math.random() * (max - min) + min;

//creando una funcion aleatorio 
function getRandom(min, max){
    return  Math.floor(Math.random() * (max-min)+min);
}
let computadora = getRandom(1,3);

if(usuario === 1){
    alert(`elegiste piedra`)
}else if (usuario === 2){
    alert(`elegiste papel `)
} else if (usuario === 3){
    alert(`Elegiste tijera `)
} else{
    alert(`Elegiste ser un bobo`)
}


/**Como gano?
 * piedra le gana a tijera
 * tijera le gana a papel
 * papel le gana a piedra
 */

switch(true){
    case (usuario == 1 && computadora == 3): alert(`Ganaste, elegiste ${usuario} y la computadora ${computadora}`);
    break;
    case (usuario == 2 && computadora ==1): alert(`Ganaste, elegiste ${usuario} y la computadora ${computadora}`)
    break;
    case (usuario == 3 && computadora ==2): alert(`Ganaste, elegiste ${usuario} y la computadora ${computadora}`)
    break;
    case (usuario === computadora): alert(`Empate, elegiste ${usuario} y la computadora ${computadora}`)
    break;
    default: alert(`perdiste, la computadora elegió la opcion ` + computadora)
    break;
}