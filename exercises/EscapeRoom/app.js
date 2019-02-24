var ask = require('readline-sync')
var name = ask.question("What is your name?");

console.log("Hi " + name + " !")

var options = ["Put hand in hole", "Find the key", "Open the door"]
var gameOver = false
var findKey = false
var openDoor = false

while(!gameOver) {
    var userChoice = ask.keyInSelect(options, "Please select one of the following choices: ")
    if(userChoice === 0) {
        console.log("You put your hand in the hole and lost the game!! TOO BAD!")
        gameOver = true
    } else if (userChoice === 1) {
        console.log("You found the key! Now open the door!")
        findKey = true
    } else if (userChoice === 2 && findKey === false) {  
        console.log("You have to find the key first!")
        openDoor = false
        gameOver = true
    } else if (userChoice ===2 && findKey) {
        console.log("You opened the door and won the game, CONGRATS!")
    } else {
        console.log("No other option")
        break
    } 
    
}
