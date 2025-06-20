/* 
Check if the js file is correctly linked
console.log("Hello World")*/

/*Write a logic to get the computer choice */
function getComputerChoice() {
    let num = Math.random();
    if (num < 0.3) {
        return "rock";
    }
    else if (num >= 0.3 && num <= 0.6) {
        return "paper";
    }
    else if (num > 0.6) {
        return "scissors";
    }
}
/*
console.log("Computer chose: ", getComputerChoice())*/

/* Write a logic to get the human choice */
function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors: ").toLowerCase()
    return userInput
}
/*
console.log("User chose: ", getHumanChoice())*/

/* Declare the players score variables */
var humanScore = 0
var computerScore = 0

/* Write a logic to play a single round */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!!!")
    }
    else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        console.log("You win!", humanChoice, " beats ", computerChoice)
    }
    else if (computerChoice === "paper" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper"){
        computerScore += 1
        console.log("You lose! ", computerChoice, " beats ", humanChoice)
    }
}
/* 
const computerSelection = getComputerChoice()
console.log(computerSelection)
const humanSelection = getHumanChoice()
playRound(humanSelection, computerSelection) */

/* Write the logic to play the entire game */
function playGame() {
    for (let i = 1 ; i<=5 ; i++) {
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()
        playRound(humanSelection, computerSelection)
        if (humanScore === 3 || computerScore === 3) {
            i = 6;
        }
    }
}
/* Additional!! Write a logic to tell whether the user score higher or the computer, higher score = win */
function winOrLose() {
    console.log("Your score is ", humanScore)
    console.log("Computer's score is ", computerScore)
    if (humanScore > computerScore) {
        console.log("You win this game!")
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins the game!! HAHAHAHA!")
    }
    else {
        console.log("The game concluded with a tie")
    }
}
/* Main game site */
console.log("Welcome to the rock paper scissors game!!! You will be playing against the computer")
console.log("Rules of the game: ")
console.log("Rock crushes scissors.")
console.log("Scissors cut paper.")
console.log("Paper covers rock.")
console.log("The more rounds you win, the closer you are to victory. Best of luck! ")
console.log("First to 3 wins takes the game. Good luck!");
playGame()
winOrLose()