/* 
// Create all possible variables to initiate the game (playerName, playerChoice, computerChoice, currentScore and totalScore)
// Computer choice variables are stored in an array.
// ask players name using prompt method
// Create function to play one round of rock paper scissors
// Create variable that generates a random choice for the computer choice.
// We are using an array containing three items (options). Create a function to select a random item from the variable each time is called.
// created function with game logic for 1 round
// play game function
// created for loop to repeat rounds
// Display total score at the end of the game.
// Create counter for rounds and display message "this is round ....."
// created split for how many wins, losts and draw
//


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

//Keep track of how many games have been played, as well as the number of wins, losses, and draws.

//This will be deemed as complete when this information is displayed after each round.




*/
let playerName = prompt("What is your name?");
let currentScore = 0;
let totalScore = 0;
let computerChoice = ["Rock", "Paper", "Scissors"];
let actualChoice = ""
let playerChoice = "";
let startQuestion = prompt(`Would you like to play a game ${playerName}, answer Yes or No`);
// FIX PROBLEM TAKING NULL FOR A NAME;
let numberRounds = "";
let roundCounter = 0;
let drawCounter = 0;
let winCounter = 0;
let lostCounter = 0;

    function getComputerChoice(){
        let pickIndex = Math.floor(Math.random() * computerChoice.length);
        let randomChoice = computerChoice[pickIndex];
        console.log(actualChoice = randomChoice);
        }

    function playRound(playerChoice, actualChoice){
        roundCounter +=1;
        console.log(`This is round ${roundCounter}`)
        if(playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors" ){ 
                    if (actualChoice === playerChoice){
            console.log(`It a draw        Your current score is ${currentScore}`)
            drawCounter += 1;
            console.log(`Total split: Win: ${winCounter}    Lost: ${lostCounter}   Draw: ${drawCounter}`);
        }else if(playerChoice === 'Rock' && actualChoice === 'Scissors' ||
            playerChoice === 'Scissors' && actualChoice === 'Paper' ||
            playerChoice === 'Paper' && actualChoice === 'Rock') {
                currentScore++
                console.log(`You won!!!!!!!"      Your current score is ${currentScore}`)
                winCounter += 1;
                console.log(`Total split: Win: ${winCounter}    Lost: ${lostCounter}   Draw: ${drawCounter}`);
            }else if(actualChoice === 'Rock' && playerChoice === 'Scissors' ||
                actualChoice === 'Scissors' && playerChoice === 'Paper' ||
                actualChoice === 'Paper' && playerChoice === 'Rock'){
                console.log(`You lost         Your current score is ${currentScore}`)
                lostCounter += 1;
                console.log(`Total split: Win: ${winCounter}    Lost: ${lostCounter}   Draw: ${drawCounter}`)
                }
        }else{
            console.log("Its not a valid option. You loose this round due to incorrect writing");
        }
    }
    function playGame(){
        playerChoice = prompt('Rock, Paper or Scissors?');
        getComputerChoice();
        playRound(playerChoice, actualChoice);
    
}

if (startQuestion === "Yes" || startQuestion === "yes"){
    console.log("Great, Good Luck");
    numberRounds = prompt(`How many rounds would you like to include in your game ${playerName}`);
    for(let i = 1; i <= numberRounds; i++){
        playGame();
        }
    }else if(startQuestion === "No" || startQuestion === "no"){
    console.log("You are a chicken 🐔")
    }
    else{
    console.log("I don't understand what you are trying to say!");
}
totalScore = currentScore;
console.log(`Your total score is ${totalScore}`);
