'use strict'

window.addEventListener('load', function(){
    
    var time = setInterval(function(){
        console.log("Set interval executed every 3 seconds");
    

    var title = document.querySelector("#title-learning");
    if (title.style.fontSize == "50px"){
        title.style.fontSize = "40px";
    }else {
        title.style.fontSize = "50px";
    }
}, 3000);

    var onetime = setTimeout(function(){
        console.log("Executed just one time");

        var paragrafOnce = document.querySelector("#once");
        paragrafOnce.style.fontSize = "70px";
    }, 5000);


    
        var stop = document.querySelector("#stop");
    
        stop.addEventListener("click", function(){
        alert('You stoped the interval')
        clearInterval(time);
        });

});

