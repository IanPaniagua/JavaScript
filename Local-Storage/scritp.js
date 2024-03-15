'use strict'

// Local Storage

// if(typeof(Storage) !== 'undefined'){
//     console.log("Works");
// }else{
//     console.log("Inconpatible Local Storage");

// }

// //Save data
// localStorage.setItem("title","value of the title");

// //recuperar elemento
// document.querySelector("#local").innerHTML = localStorage.getItem("title");

// // Guardar Objetos
//     var user = {
//         nombre: "Ian Paniagua",
//         email: "i@gamil.com",
//         web: "website.com"
//     };

//     // Hay que convertir el objeto de JavaScript a uno de JSON (JSON.stringify())
//     localStorage.setItem("user", JSON.stringify(user));

// //Recuperar Objetos
//     // Hay que convertir el objeto de JSON a JavaScript normal (JSON.stringify())
    
//     var userjs = JSON.parse(localStorage.getItem("user"));
//     document.querySelector("#object").append(" " + userjs.nombre);


// EJERCICIO

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    console.log("entra");


    var titulo = document.querySelector('#addpelicula').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }

});
var ul = document.querySelector('#peliculas__list')
for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof(localStorage[i] == 'string'))
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);

}

