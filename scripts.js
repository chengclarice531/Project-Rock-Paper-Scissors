/* Check if the js file is correctly linked*/
console.log("Hello World")

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
console.log("Computer chose: ", getComputerChoice())

/* Write a logic to get the human choice */
function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors: ").toLowerCase()
    return userInput
}
console.log("User chose: ", getHumanChoice())

/* Declare the players score variables */
var humanScore = 0
var computerScore = 0