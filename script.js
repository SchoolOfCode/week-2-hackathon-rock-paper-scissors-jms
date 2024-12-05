/* 
// Create all possible variables to initiate the game (playerName, playerChoice, computerChoice, currentScore and totalScore)
// Computer choice variables are stored in an array.
// ask players name using prompt method

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



let playerName = prompt("What is your name?");
let playerChoice = "";
let computerChoice = ["Rock", "Paper", "Scissors"];
let currentScore = 0;
let totalScore = 0;

let startQuestion = prompt(`Would you like to play a game ${playerName}, answer Yes or No`);
let numberRounds = prompt(`How many rounds would you like to include in your game ${playerName}`)

if (startQuestion === "Yes"){
    console.log("Great, Good Luck");
}else if(startQuestion !== "Yes" || startQuestion !== "No"){
    console.log("I dont undertand what you are trying to say!");
}else{
    console.log("You are a chicken 🐔")
}