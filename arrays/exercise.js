'use strict'
// option 1
    // var numerosArray = new Array(6);

    // for(var i = 0; i < 5; i++) {
    //     numerosArray[i] = parseInt(prompt("Introduce un número diferente 6 veces: ", 0))
    // }
    // console.log(numerosArray);




//option 2
    var numerosArray = [];

    for(var i = 0; i <= 5; i++) {
        numerosArray.push(parseInt(prompt("Introduce a number(you have 6 times): ", 0)));
    }

//FUNCION to Display Array (textoCustom is a optional parameter)
function displayArray(elements, textoCustom = "") {
    document.write("<h1>You choose this numbers" + textoCustom + "</h1>");
    numerosArray.forEach((element,index) => {
    document.write("<p>"+ index +". "+element+"</p><br/>");
 });
}    console.log(numerosArray);





//Display content
displayArray(numerosArray);

 //order revert
 numerosArray.reverse();
 console.log(numerosArray);
displayArray(numerosArray, " Reversed order");


 //order
 numerosArray.sort();
 console.log(numerosArray);
displayArray(numerosArray, " ordered");
 


//count Elements

document.write("<p>This array hat " +numerosArray.length+ " elements</p>");

//Search for a number

var searchNumber = parseInt(prompt("Search number: ", 0 ));

var position = numerosArray.findIndex(number => number == searchNumber)

if(position && position != -1){
    document.write("<h1>Number findet</h1>");
    document.write("<p>Position of the number: "+ position + "</p>");
}else{
    document.write("<h1>Number NOT findet</h1>");
}

