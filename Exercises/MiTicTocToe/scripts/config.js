function openPlayerConfig(event){
    // const selectedPlayerId = event.target.dataset.playerid; //we added in the html a data-atribut(data-playerid-1) and now we can call it value with "dataset" remember "event.tarjet" select the element where the event occur! the data will be diferent in the 2 buttons
    // const clickButton = event.target.dataset.[player-id]; //if we use a "-"
    // editedPlayer = selectedPlayerId;  //we don´t create a new one, we overwriting
    // the same that above without a new const "selectedPlayerId"
    editedPlayer = +event.target.dataset.playerid;  //symbol "+" before to change the value to number

    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = ''; //you can do ir be getbyElement, but is only to practice with DOM
}

function savePlayerConfig(event) {
    
    event.preventDefault(); //importante, para evitar que el browser maneje los datos por defecto
    // geting the data
    const formData = new FormData(event.target);   //instanciating an object  (blueprint function) It will read al the inputs which have a name atribut
    const enteredPlayername = formData.get('playername').trim(); //playername is the name atribut of the input that we want to save in a constant
    // trim() delet the spacer before and after the data, but not between

    // Extra validation
    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');  //selected with DOM traversal
        errorsOutputElement.textContent = 'Please enter a valid name!'
        return;  //to stop the next code.
    }

    const updatedPlayerDataElement  = document.getElementById('player-' + editedPlayer + '-data'); //1 or 2
    updatedPlayerDataElement.children[1].textContent = enteredPlayername; //the name input (display name)
    // option to do it:
    // if (editedPlayer === 1){
    //     players[0].name= enteredPlayername;
    // } else {
    //     player[1].name = enteredPlayername;
    // }

    // other option 
    players[editedPlayer - 1].name = enteredPlayername;    //editedplayer could be 1 or 2 and we need 0 or 1 in the array

    closePlayerConfig();
}