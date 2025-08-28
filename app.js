/*let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

 console.log(intentos); 
if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
} else {
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    }
    else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++; 
}
 return;   

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}
 
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 10!');
*/

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;


function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
    return promedio;
}

function verificarAprobacion(promedio){
    return promedio >= 5 ? "Aprobado" : "Reprobado";
}

