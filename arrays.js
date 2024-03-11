'user strict'

var nombre = "Ian Paniagua";

var ListaNombres = ["Pepe", "Luis", "Tomas", "ines"];



console.log(ListaNombres[2]);

//Recorrer ARRAY
// var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
// if(elemento >= ListaNombres.length){
//     alert("El numero debe ser menor que "+ ListaNombres.length);
// }else{
//     alert(ListaNombres[elemento]);
// }

// recorrer arrar con for()
var lenguajes = new Array("php", "js", "go", "java");

document.write("<h1>Lenguajes de programacion del 2024</h1>");
document.write("<p>using for()</p>");

document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+ lenguajes[i] + "</li>");
}

document.write("</ul>");


// recorrer arrar con forEach() y funcion CallBack
document.write("<h1>Lenguajes de programacion del 2024</h1>");
document.write("<p>using forEach()</p>");
document.write("<ul>");
lenguajes.forEach((elemento) => {
    document.write("<li>"+ elemento + "</li>");
});
document.write("</ul>");

// and index
document.write("<p>using forEach()  y ver el Indice</p>");
document.write("<ul>");
lenguajes.forEach((elemento, indice) => {
    document.write("<li>"+ indice + ". " + elemento + "</li>");
});
document.write("</ul>");

//For( in )
document.write("<p>using for(in)</p>");
document.write("<ul>");
 for(let lenguaje in lenguajes){
    document.write("<li>"+ lenguaje +". "+ lenguajes[lenguaje] + "</li>");
 };
 document.write("</ul>");


//ARRAY MULTIDIMENSIONAL
    var categories = ['action', 'Horror', 'Comedy'];
    var films = ['La verdad duele', 'La vida es bella', 'Sin ayer no hay maöana'];

    var cine = [categories, films];
    //all
    console.log(cine);
    //comedy
    console.log(cine[0][2]);
    //la vida es bella
    console.log(cine[1][1]);

//ADD elements to ARRAY
    films.push('Spiderman');
    console.log(films);

    //using a prompt
    var peliculaIntroducida = prompt('Introduce una pelicula: ')
    films.push(peliculaIntroducida);
    console.log(films);

//DELETE elemet of ARRAY
    var indice = films.indexOf('La vida es bella');

    if(indice > -1) {
        films.splice(indice, 1);
    }
    console.log(films);
    
//CONVERT ARRAY to STRING
    var filmText = films.join();
    console.log(filmText);

//CONVERT STRINK to ARRAY
    var cadena = "aText1, bText2, cText3";
    var cadena_array = cadena.split(", ");
    console.log(cadena_array);

//ORDENAR ARRAY 
    //.sort() alfabeticamente
    cadena_array.sort();
    console.log(cadena_array);
    
    //.revers()revertido
    cadena_array.reverse();
    console.log(cadena_array);

//SEARCHIN inside the ARRAY
    //2 options
    //option normal
    var searching = lenguajes.find(function(lenguaje){
        return lenguaje=="php";
    });
    console.log(searching);


    //option with Arrow (=>)
    var searching = lenguajes.find(lenguaje => lenguaje == "php");
    console.log(searching);

    //searching the index
    var searching = lenguajes.findIndex(lenguaje => lenguaje == "php");
    console.log(searching);

    //Searching if there are some  value that complete the condition
    var precios = [10, 20, 30, 40, 50];
    var searchmorethan40 = precios.some(precio => precio < 40);
    var serachingmorethan50= precios.some(precio => precio > 50);

    console.log(searchmorethan40);
    console.log(serachingmorethan50);
