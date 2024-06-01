let opcion = 2;
let computadora = 3;


if(opcion === 1){
    console.log("elegiste piedra")
}else if (opcion === 2){
    console.log("elegiste papel ")
} else if (opcion === 3){
    console.log("Elegiste tijera")
} else{
    console.loh("Elegiste ser un bobo")
}

// ¿Como gano?
/**
 * piedra le gana a tijera
 * tijera le gana a papel
 * papel le gana a piedra
 */

switch(true){
    case (opcion == 1 && computadora == 3): console.log("Ganaste");
    break;
    case (opcion == 2 && computadora ==1): console.log("Ganaste")
    break;
    case (opcion == 3 && computadora ==2): console.log("Ganaste")
    break;
    case (opcion === computadora): console.log("Empate")
    break;
    default: console.log("perdiste, la computadora elegió la opcion " + computadora)
    break;
}