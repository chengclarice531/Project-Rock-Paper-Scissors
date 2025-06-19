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
