var ask = require('readline-sync'),

///////////////////Global variables
////////Choose a player////////////////////////////////////////
intro = ask.question("Welcome to the game of ice and fire. WHEN YOU PLAY THE GAME OF THRONES, YOU WIN OR YOU DIE. Click enter to give us your favorite Game of Thrones character's name.");

// players = ["Jon Snow", "Daenerys Targaryen", "Cersei Lannister", "Aria Stark", "Jorah Mormont"],


// character = ask.keyInSelect(players, 'Which character would you like to be?' )


/////////////////Jon Snow/////////////////////////
// if (character === 0) {
//     console.log("Welcome to House Stark. WINTER IS COMING! ")
// }

/////////////////Daenerys//////////////////////////
// if (character === 1) {
//     console.log("Welcome to House Targaryen, Daenerys Stormborn of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons. ")
// }
//////////////////Cersei///////////////////
// if (character === 2) {
//     console.log("Welcome to House Lannister, HEAR ME ROAR")
// }
//////////////////Aria///////////////////////////
// if (character === 3) {
//     console.log("Welcome to House Stark, youngest daughter of Lady Catelyn and Lord Eddard Stark")
// }
////////////////////Jorah////////////////////////
// if (character === 4) {
//     console.log("Welcome to House Mormont, courageous knight!")
// }
//////////////////////////
var player = {
    name: "",
    health: 100,
    inventory: []
} 

var attackers = ["White Walkers", "a pack of wolfs", "Walder Frey"]
///////////////////Game Functions////////////////////////////
function walk() {
    ///////Random number between 1-4
    var chance = Math.ceil(Math.random() * 4)
    ///////If number is 1 --> attack!!
        if (chance === 1) {
            console.log("Let us ATTAAAAACKKKK!!!")

        } else {
            console.log("Oh, nothing happened. But you wait!")
        }
}
////////////////////Game Intro//////////////////////////////
console.log("Let's get started " + player)

var options = ["Walk"]
////////////////////Game Loop///////////////////////////////
while(player.health > 0) {
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0) {
        var chance = Math.ceil(Math.random() * 4)
        if (chance === 1) {
            walk()
        } else if (userChoise === 1)
            console.log("You are getting attacked by " + attackers.Math.random())
    }
}
