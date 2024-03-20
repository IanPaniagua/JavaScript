function startNewGame(){
    if (players[0].name === ''|| players[1].name === ''){
        alert('Please set custom player names for both players!!');
        return;  //to stop
    }
    activePlayerNameElement.textContent = players[activePlayer].name;

    gameArealement.style.display = 'block';

}




function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGamefield(event){
// avoid the click in the gap
    if (event.target.tagName !== 'LI') {
        return;
    }

    const selectedField = event.target;
      // updating the Fieldselected  //we are setting this in the html in columns and rows with the "data-"  atribut
      const selectedColumn = selectedField.dataset.col -1;  //if we ad "-1" it ist now a mathematical operation and there fore a number
      const selectedRow = selectedField.dataset.row -1;
  
        if(gameData[selectedRow][selectedColumn]>0){
            // alert('please select and empty field');
            return;
        }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

  
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerID = checkForGameOver();
    console.log(winnerID);

    currentRound++;
    switchPlayer();
}


function checkForGameOver() {
    // Checking the rows for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
    }
  
    // Checking the colums for equality
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[0][1];
      }
    }
  
    // Diagonal: Top left to bottom right
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
  
    // Diagonal: Top right to bottom left
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }
  
    if (currentRound === 9) {
      return -1;
    }
    return 0;
  }