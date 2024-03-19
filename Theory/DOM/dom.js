'use strict'

//DOM - Document Objet Model
    //Select element by ID
    var box = document.getElementById('my-box');
    console.log(box);

        //change text
        var editetBox =document.getElementById('my-box');
        editetBox.innerHTML ="This is the new text";
        editetBox.style.background = "Red";
        editetBox.style.padding ="20px";
        editetBox.style.width = "50px";
        editetBox.className = "box-edited";
        console.log(editetBox);

    //Select element by query Selector
    // var box2 = document.querySelector('#my-box');

    //Select elements by Tag
    var allDivs = document.getElementsByTagName('div');
    console.log(allDivs);



    var secondBox = allDivs[1];
    secondBox.innerHTML = "This is a edited in Second Box";


    console.log(secondBox);
    


    var valor;
    for(valor in allDivs){
        if(typeof allDivs[valor].textContent == 'string') {
            var parragraf = document.createElement("p");
            var text = document.createTextNode(allDivs[valor].textContent);
            parragraf.append(text);
            document.querySelector('#my-section').append(parragraf);
        }
    }



    