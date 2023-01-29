// Play everytime a button of the Board is pressed
function playRound(event) {
  // If Play Game has not been clicked display msg to players and do nothing
  let msg;
  if (users.length == 0) {
    msg = "Input Players Name or Press Play Game Button";
    document.getElementById("messages").textContent = msg;
    return;
  }
  // Get the value of the clicked div Board
  const value = Number(event.target.getAttribute("value"));

  let player;

  if ((boardPlayer1.length + boardPlayer2.length) % 2 == 0) {
    player = users[0];
  } else {
    player = users[1];
  }
  console.log(player);
  // Update the board and store elements
  if (
    !boardPlayer1.includes(value) &&
    !boardPlayer2.includes(value) &&
    stopTheGame == 0
  ) {
    if (player === users[0]) {
      boardPlayer1.push(value);
      this.textContent = player1Simbol;
    } else {
      boardPlayer2.push(value);
      this.textContent = player2Simbol;
    }
  }

  for (const combination of winGame) {
    //Variable to store message to be presented to the player - Variable = 1 if there is a winner

    if (combination.every((elem) => boardPlayer1.includes(elem))) {
      msg = `${users[0]} wins! Press Play Game to Restart`;
      stopTheGame = 1;
    }
    if (combination.every((elem) => boardPlayer2.includes(elem))) {
      msg = `${users[0]} wins! Press Play Game to Restart`;
      stopTheGame = 1;
    }
    if (boardPlayer1.length + board.length == 9) {
      msg = `${users[0]} wins! Press Play Game to Restart`;
      stopTheGame = 1;
    }
    document.getElementById("messages").textContent = msg;
  }
}

// Store the Name of the Players. Option to not require name. If Player do not insert name consider Player 1 and Player 2
function getPlayers(event) {
  // Prevent the page to reload itself when submit
  event.preventDefault();

  // Stores all elements of the user in variables and if not inputed default to Player 1 and Player2

  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  // Clear the data of the array that stores the users
  users = [];

  if (player1 == "") {
    users.push("Player 1");
  } else {
    users.push(player1);
  }

  if (player2 == "") {
    users.push("Player 2");
  } else {
    users.push(player2);
  }
  // Clear the display message
  document.getElementById("messages").textContent = "";
  // reset the user input after storing the array
  formUser.reset();
}

// Store the users on Array
let users = new Array();

// Store Array with all winning game
const winGame = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
// Store simbols for Players and variables to store plays of each player
const player1Simbol = "X";
const player2Simbol = "O";
let boardPlayer1 = [];
let boardPlayer2 = [];

// Variable to store if game is finished
let stopTheGame = 0;

const formUser = document.getElementById("formPlayers");

// Extract values inputed by the user or define default values for the user

formUser.addEventListener("submit", getPlayers);

// Get event listeners to the Board
const board = document.querySelectorAll(".square");

board.forEach((square) => {
  square.addEventListener("click", playRound);
});
