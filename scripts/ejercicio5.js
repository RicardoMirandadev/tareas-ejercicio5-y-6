/*------------------calculador de promedio y rendimiento-------------------*/

let nota1 = Number(prompt("Ingrese la primera nota:"));
let nota2 = Number(prompt("Ingrese la segunda nota:"));
let nota3 = Number(prompt("Ingrese la tercera nota:"));
let nota4 = Number(prompt("Ingrese la cuarta nota:"));

let promedio = (nota1 + nota2 + nota3 + nota4) / 4; 
if (promedio >= 90)  {
    alert("Excelente, tu promedio es: " + promedio);
} else if (promedio >= 75) {
    alert("tu promedio "+ promedio + " es bueno");
} else if (promedio >= 60) {
    alert("Bien tu promedio: " + promedio + " es regular, pero puedes mejorar");
} else {
    alert("Necesitas mejorar: " + promedio + " es insuficiente, debes esforzarte más");    
}


/*------------------calculador de tarifa -------------------*/



let edad = Number(prompt("Ingrese su edad:"));
let estudiante = prompt("¿Eres estudiante? (si/no)").toLowerCase();
let distancia = Number(prompt("Ingrese la distancia que viajaras en kilómetros:"));
const tarifaBase = 100;
let costo = tarifaBase;

if (estudiante === "si") {
    costo *= 0.75; 
}
if (edad < 18) {
    costo *= 0.5; 
} else if (edad > 60) {
    costo *= 0.60;
}
if (distancia > 30) {
    costo += (distancia + 30) * 0.1; 
}

alert("El costo total del viaje es: " + costo.toFixed(2) + " Quetzales.");   


/*------------------Conversion edades -------------------*/


let password = "1234";
let user = "pepe"

let studentName = prompt("Ingrese el nombre del estudiante:");
let studentpassword = prompt("Ingrese la contraseña del estudiante:");
let studentage = parseInt(prompt("Ingrese su edad:"));

if (studentName === user && studentpassword === password) {
 if (studentage >= 18) {
    alert("bienbenido al Sistema")
 } else {
    alert("Acceso Restringido para menores")
 }
} else {  
    alert ("Credenciales Incorrectas") 
}
/*------------------calculador sistema de descuento en tienda -------------------*/

let monto = parseFloat(prompt("Ingrese el monto de su compra:"));
let membership = prompt("¿Eres dueño de membresia premium? (S/N)").toLowerCase();

if (monto >= 300 && (membership === "si" || membership === "s")) {
    let descuento = monto * 0.30;
    let total = monto - descuento;
    alert("Subtotal: " + monto.toFixed(2) + " Quetzales." +
          "\nDescuento aplicado (30% miembro Premium): " + descuento.toFixed(2) + " Quetzales." +
          "\nTotal a pagar: " + total.toFixed(2) + " Quetzales.");
} else if (monto >= 100 && (membership === "si" || membership === "s")) {
    let descuento = monto * 0.20;
    let total = monto - descuento;
    alert("Subtotal: " + monto.toFixed(2) + " Quetzales." +
          "\nDescuento aplicado (20% miembro Premium): " + descuento.toFixed(2) + " Quetzales." +
          "\nTotal a pagar: " + total.toFixed(2) + " Quetzales.");
} else if (monto >= 100 && (membership === "no" || membership === "n")) {
    let descuento = monto * 0.10;
    let total = monto - descuento;
    alert("Subtotal: " + monto.toFixed(2) + " Quetzales." +
          "\nDescuento aplicado (10% visitante): " + descuento.toFixed(2) + " Quetzales." +
          "\nTotal a pagar: " + total.toFixed(2) + " Quetzales.");
} else if (membership === "si" || membership === "s") {
    alert("Subtotal: " + monto.toFixed(2) + " Quetzales." +
          "\nDescuento aplicado: ninguno (compra menor a 100 Q.)." +
          "\nTotal a pagar: " + monto.toFixed(2) + " Quetzales.");
} else {
    alert("Subtotal: " + monto.toFixed(2) + " Quetzales." +
          "\nDescuento aplicado: ninguno (compra menor a 100 Q.)." +
          "\nTotal a pagar: " + monto.toFixed(2) + " Quetzales.");
}


/*-------------------------- conversor de unidades----------------------------------*/

let opcion = prompt("Escribe el número de la opción (1, 2, 3 o 4):");

switch(opcion) {
    case "1":
        let celsius = prompt("Escribe los grados Celsius:");
        let fahrenheit = (celsius * 1.8) + 32;
        alert(celsius + "°C = " + fahrenheit + "°F");
        break;

    case "2":
        let fahrenheit2 = prompt("Escribe los grados Fahrenheit:");
        let celsius2 = (fahrenheit2 - 32) * 1.8;
        alert(fahrenheit2 + "°F = " + celsius2 + "°C");
        break;

    case "3":
        let metros = prompt("Escribe los metros:");
        let kilometros = metros / 1000;
        alert(metros + " m = " + kilometros + " km");
        break;

    case "4":
        let kilometros2 = prompt("Escribe los kilómetros:");
        let metros2 = kilometros2 * 1000;
        alert(kilometros2 + " km = " + metros2 + " m");
        break;

    default:
        alert("Opción no válida. Escribe 1, 2, 3 o 4.");
}