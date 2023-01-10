// Store the users on Array
let users = new Array();

const PlayGame = (function () {
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

  let player = users[1];

  // Select Player 1 and store in variable of current player (Objet with Player and Value)

  // Function Turn Player
  function changePlayer(player) {
    const message = document.getElementById("messages");

    if (player == users[1]) {
      message.textContent = `${users[0]} turn`;
      return users[0];
    } else {
      message.textContent = `${users[1]} turn`;
      return users[1];
    }
  }

  function playRound(event) {
    // Get the value of the clicked ddiv Board
    const value = Number(event.target.getAttribute("value"));
    // Update the board and store elements
    if (!boardPlayer1.includes(value) && !boardPlayer1.includes(value)) {
      if (player === users[0]) {
        boardPlayer1.push[value];
        this.textContent = player1Simbol;
      } else {
        boardPlayer2.push[value];
        this.textContent = player2Simbol;
      }
    }
    player = playRound(player);
    let winner = "";

    for (const combination of winGame) {
      if (combination.every((elem) => boardPlayer1.includes(elem))) {
        console.log("Player 1 wins!");
      }
      if (combination.every((elem) => boardPlayer2.includes(elem))) {
        console.log("Player 2 wins!");
      }
      if (boardPlayer1.length + board.length == 9) {
        console.log("No winner");
      }
    }
  }
})();

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

  // reset the user input after storing the array
  formUser.reset();
  console.log(users);
}

// Change the Board with X when user inputs the value

// Function Winner
// Store the user input on array. Check if all values of array are on winning solution
// If winner
// Display the Name of Player that wins the Game
// Else Select Player 2
// Repeat Turn Player Function

// formBook - Store elements of user name

const formUser = document.getElementById("formPlayers");

// Extract values inputed by the user. Submit event only when all required
// elements have been inputed by the user  (does not start the event otherwise)
formUser.addEventListener("submit", getPlayers);

// Get event listeners to the Board
const board = document.querySelectorAll("square");
board.forEach((square) => {
  square.addEventListener("click", playRound);
});

PlayGame.playRound();

// const playersModule = (function () {
//   // Store the users on Array
//   let users = ["Player 1", "Player 2"];

//   // Store the Name of the Players. Option to not require name. If Player do not insert name consider Player 1 and Player 2
//   function getPlayers(event) {
//     // Prevent the page to reload itself when submit
//     event.preventDefault();

//     // Stores all elements of the user in variables and if not inputed default to Player 1 and Player2

//     let player1 = document.getElementById("player1").value;
//     let player2 = document.getElementById("player2").value;
//     // Clear the data of the array that stores the users
//     users = [];

//     if (player1 == "") {
//       users.push("Player 1");
//     } else {
//       users.push(player1);
//     }

//     if (player2 == "") {
//       users.push("Player 2");
//     } else {
//       users.push(player2);
//     }

//     // reset the user input after storing the array
//     formUser.reset();
//     console.log(users);
//   }

//   // formBook - Store elements of user name

//   const formUser = document.getElementById("formPlayers");

//   // Extract values inputed by the user. Submit event only when all required
//   // elements have been inputed by the user  (does not start the event otherwise)
//   formUser.addEventListener("submit", getPlayers);

//   // Get the current state of users
//   function getUsers() {
//     return users;
//   }

//   // return an object with the functions that we want to make available to other parts of the program
//   return {
//     getPlayers: getPlayers,
//     getUsers: getUsers,
//   };
// })();

// // // to use the getPlayers function from the playersModule, you can do the following:
// // playersModule.getPlayers();
// console.log(playersModule.getUsers());

// let x = playersModule.getUsers();
