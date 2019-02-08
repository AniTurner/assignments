var ask = require('readline-sync')

var player = {
    name: " ",
    health: 100
} 
function walk() {
    var chance = Math.ceil(Math.random() * 4)
        if (chance === 1) {
            console.log("Attack")

        } else {
            console.log("Nothing happened")
        }
}

player.name = ask.question("What is your name? ");
console.log("Welcome " + player.name + " to my super awesome game")

var options = ["Walk"]

while(player.health > 0) {
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0) {
        var chance = Math.ceil(Math.random() * 4)
        if (chance === 1) {
            walk()
        } else if (userChoise === 1)
    }
}
