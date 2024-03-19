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

'use strict';

// Function to update the list of movies
function updateMovieList() {
    var ul = document.querySelector('#peliculas__list');
    ul.innerHTML = ""; // Clear the existing list

    for (var i in localStorage) {
        if (typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.textContent = localStorage[i];
            ul.appendChild(li);
        }
    }
}

// Event listener for adding a movie
var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var titulo = document.querySelector('#addpelicula').value;

    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
        updateMovieList(); // Update the list of movies
    }
});

// Event listener for deleting a movie
var formularioDel = document.querySelector("#formDelFilm");
formularioDel.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var titulo = document.querySelector('#delFilm').value;

    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
        updateMovieList(); // Update the list of movies
    }
});

// Initial update of the movie list on page load
updateMovieList();
