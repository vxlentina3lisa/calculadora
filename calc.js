// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para pdoer usar prompt
// ejecutar por terminal: npm install prompt-sync


//var nombre; 
//var n1,n2, suma;


seguir = prompt("Bienvenido a la calculadora, quiere seguir? s/n: ");
if (seguir == "s") {
    opcion = prompt("1.- suma, 2.- resta 3.- Multiplicacion 4.- Division, que quiere hacer? ");
    if (opcion == 1) {
        console.log("esto es suma ")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 + n2;
        console.log(resultado);
    }
    else if (opcion == 2) {
    console.log(" Esto es resta")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 - n2;
    console.log(resultado)
    }
    else if (opcion == 3) {
    console.log(" Esto es Multiplicación ")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 * n2;
    console.log(resultado)
    }
    else 
    console.log(" Esto es division ")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 / n2;
    console.log(resultado)
}

/*
switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
*/

