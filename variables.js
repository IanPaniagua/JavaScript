
'use strict'
// In use strict modus you have to define the variable

//VARIABLES
// A variable is a container of information 

//VAR
//var is a "global" variable
var pais = "Italia"
var continente = "Europa";
var paisContinente = pais + " " + continente;
console.log(pais);
console.log(paisContinente);
//LET
//let is a "local" variable. The changes are only in the place were you use the variable let. If you had a var with the same name, it does not change after user a new let!
var saludo = "Hola";
console.log(saludo);
if(true){
    let saludo = "Como va eso?";
    console.log(saludo);
}
console.log(saludo);


//CONSTANT
//A constant does not change
const ip = "192.88.0.12"