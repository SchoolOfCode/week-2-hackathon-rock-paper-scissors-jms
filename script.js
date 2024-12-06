/* 
// Create all possible variables to initiate the game (playerName, playerChoice, computerChoice, currentScore and totalScore)
// Computer choice variables are stored in an array.
// ask players name using prompt method
// Create function to play one round of rock paper scissors
// Create variable that generates a random choice for the computer choice.
// We are using an array containing three items (options). Create a function to select a random item from the variable each time is called.
//created function with game logic for 1 round
Call the function to run the game, initializing variables.
Message: What’s your name? Store it in a variable and display it every round.
Message: Would you like to play the game? If yes ask next question.
Ask the player what is their choice using prompt().
Store a move choice from a user (rock, paper, or scissors) in a variable as a string
Randomly generate the computer's move and store that in a variable
Compare the two moves using the rock, paper, scissors rules
    Rock beats scissors
    Scissors beats paper
    Paper beats rock
Update the scores
Alert with message: ‘You chose R, computer chose P. You lose!’ with current score
Alert the winner about the instant result and current score. (W,D,L should be included)
Ask the player whether they want to play again
Use loop for rounds





*/


function getComputerChoice(){
    let pickIndex = Math.floor(Math.random() * computerChoice.length);
    let randomChoice = computerChoice[pickIndex];
    console.log(actualChoice = randomChoice);
}

let computerChoice = ["Rock", "Paper", "Scissors"];

let actualChoice = ""

let playerName = prompt("What is your name?");
let playerChoice = "";

let currentScore = 0;
let totalScore = 0;

let startQuestion = prompt(`Would you like to play a game ${playerName}, answer Yes or No`);
let numberRounds = "";

if (startQuestion === "Yes" || startQuestion === "yes"){
    console.log("Great, Good Luck");
    numberRounds = prompt(`How many rounds would you like to include in your game ${playerName}`);
    playGame()
    }else if(startQuestion === "No" || startQuestion === "no"){
    console.log("You are a chicken 🐔")
    }
    else{
    console.log("I don't understand what you are trying to say!");
}

function playRound(playerChoice, computerChoice){
    
    if (computerChoice === playerChoice){
        console.log("It a draw")
    }else if(playerChoice === 'Rock' && computerChoice === 'Scissors' ||
        playerChoice === 'Scissors' && computerChoice === 'Paper' ||
        playerChoice === 'Paper' && computerChoice === 'Rock') {
            console.log("You won!!!!!!!")
        }else if(computerChoice === 'Rock' && playerChoice === 'Scissors' ||
            computerChoice === 'Scissors' && playerChoice === 'Paper' ||
            computerChoice === 'Paper' && playerChoice === 'Rock'){
            console.log("You lost");
            }
    }


function playGame(playerChoice, computerChoice){

}
