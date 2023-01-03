// Button to Start a Game
// Ask for the name of

// Store the users on Array
let users = new Array();

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

// formBook - Store elements of user name

const formUser = document.getElementById("formPlayers");

// Extract values inputed by the user. Submit event only when all required
// elements have been inputed by the user  (does not start the event otherwise)
formUser.addEventListener("submit", getPlayers);
