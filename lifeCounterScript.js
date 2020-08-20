//Constants and variables

const startButton = document.querySelector("#startGame");
const resetButton = document.querySelector("#reset");

//containers displaying color selectors
const settings = document.getElementsByClassName("colorToggle");

//Amount of life for each player
var stringLife = [document.getElementById("lifeP1"), document.getElementById("lifeP2"),
    document.getElementById("lifeP3"), document.getElementById("lifeP4"),  document.getElementById("lifeP5"),
   document.getElementById("lifeP6")];

//Each Player's counter for display purposes only
var stringCounters = [document.getElementById("player1Counter"), document.getElementById("player2Counter"),
       document.getElementById("player3Counter"), document.getElementById("player4Counter"),  document.getElementById("player5Counter"),
      document.getElementById("player6Counter")];

//Function to display page when it loads. AKA hide the life counters
window.onload = function(){
  for(var i=0; i < stringCounters.length; i++){
      stringCounters[i].style.display = "none";
  }
  document.getElementById("reset").style.display = "none";

  }



//Function to select number of Players

function numberOfPlayers(p) {
  players = p;
  }
//Function to select life Total for each player
function totalLife (startingLife) {
  life = startingLife;
  }



//Formatting the "Number of Players" & "Starting Life" Buttons into an array
var numberOfPlayersButtons = document.getElementById("numberOfPlayers").getElementsByClassName("player");
var startingLife = document.getElementById("selectLifeTotal").getElementsByClassName("lifeTotal");

//function to highlight the Number of Players selected
for (var i = 0; i < numberOfPlayersButtons.length; i++) {
  numberOfPlayersButtons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("playerSelected");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" playerSelected", "");
    }

    // Add the active class to the current/clicked button
    this.className += " playerSelected";
  });
}

//Function to highlight the Starting Life stelected:
for (var i = 0; i <startingLife.length; i++) {
  startingLife[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("lifeTotalSelected");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" lifeTotalSelected", "");
    }

    // Add the active class to the current/clicked button
    this.className += " lifeTotalSelected";
  });
}




//Function to start Match

function startMatch() {
  //Code to hide the initial screen, with the exception of the reset button
document.getElementById("startingScreen").style.display = "none";
document.getElementById("startGame").style.display = "none";
document.getElementById("header").style.display = "none";
document.getElementById("reset").style.display = "block";
document.getElementById("version").style.display = "none";
//Code to display the amount of life counters and to hide color options
for(var i=0; i < players; i++){
  stringCounters[i].style.display = "block";
  settings[i].style.display = "none";
  stringLife[i].innerHTML = life;

  }
}

//To display options for background Colors

function displaySettings(player) {
  if (settings[player].style.display === "none") {
    settings[player].style.display = "block";
  } else {
    settings[player].style.display = "none";
  }
  }


//To lose or Gain life

//Setting variables, putting each plus and minus button into the appropriate array

var minus = document.getElementById("playerCounters").getElementsByClassName("minus");
var plus = document.getElementById("playerCounters").getElementsByClassName("plus");


function loseLife(player) {
    stringLife[player-1].innerHTML = parseInt(stringLife[player-1].innerHTML) -1;

  }

  function gainLife(player) {
      stringLife[player-1].innerHTML = parseInt(stringLife[player-1].innerHTML) +1;
    }


//Functions to change background color for each counters
const settingsButton = document.getElementsByClassName("settings");
const plains = "#FFEBD6";
const island = "#22577A";
const mountain = "#861D16";
const swamp = "#281528";
const forest = "#285336";

function playerColor(player, mana) {
    stringCounters[player-1].style.backgroundColor = mana;

    if (mana === plains) {
    stringLife[player-1].style.color = island;
    settingsButton[player-1].style.color = island;
    plus[player-1].style.color = island;
    minus[player-1].style.color = island;
    } else
        { stringLife[player-1].style.color = plains;
          settingsButton[player-1].style.color = "#ede7e3";
          plus[player-1].style.color = plains;
          minus[player-1].style.color = plains;
}
}



//Function to reset page. Note: add function to turn off highlighting
function reset() {
  for(var i=0; i < stringCounters.length; i++){
    stringCounters[i].style.display = "none";
}
  document.getElementById("startingScreen").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("startGame").style.display = "block";
  document.getElementById("reset").style.display = "none";
  document.getElementById("version").style.display = "block";

  //Function to turn off highlighted Buttons
  for (var i = 0; i <startingLife.length; i++) {
    startingLife[i].className = "lifeTotal";
        }
  for (var i = 0; i < numberOfPlayersButtons.length; i++) {
    numberOfPlayersButtons[i].className = "player";
  }
//reset the number of players and starting life to default values. i.e. zero or nothing
  players = null;
  life = null;

}


//Event listeners for click input

startButton.addEventListener("click", startMatch, false);
resetButton.addEventListener("click", reset, false);

//Starts match
//startMatch.addEventListener("click", start, false);

//Resets page
//resetButton.addEventListner("click", reset, false);
