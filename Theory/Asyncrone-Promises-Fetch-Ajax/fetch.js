'use strict'


// we take the JSON file with all the data from a fake API rest. 
// https://jsonplaceholder.typicode.com/users or...
//reqres.in

// FETCH(ajax) y peticiones a servicios / apis rest



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data => data.json())
//     .then(data => {
//         usuarios = data;
//         console.log(usuarios);
//     });


var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
// var usuarios = [];
    
    getUsuarios()
    .then(data => data.json()) //capture data and convert to JSON
    .then(users => {
        // usuarios = users.data; //now we have an array of objects with users
        listadoUsuarios(users.data);

        return getInfo();

    })
    .then(data => {
        console.log(data);
        return getJanet();

    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

    });
 


function getUsuarios(){
    return fetch('https://reqres.in/api/users')  //petition to the API (promise)
}
function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}


function getInfo(){ var profesor= {
    nombre: 'Ian',
    apellidos: 'Paniagua',
    url: 'ian.com'

};
    return new Promise((resolve, reject) =>{

        var profesor_string =  '';

        setTimeout(function(){

        var profesor_string =  JSON.stringify(profesor);
        
        if(typeof profesor_string != 'string' || profesor_string =='') return reject('error');

        return resolve(profesor_string);

        }, 3000);
    
    });
   
}






//Adding and Displaying name

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');    
        // let email = document.createElement('p');

        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
        // email.innerHTML = "Email: " + user.email;

        div_usuarios.appendChild(nombre);
        // div_usuarios.appendChild(email);
    });
}




function mostrarJanet(user){
        let nombre = document.createElement('h4');    
        let avatar = document.createElement('img');


        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';


        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
}



