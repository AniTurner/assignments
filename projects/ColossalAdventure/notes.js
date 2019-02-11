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



function walk() {
    ///////Random number between 1-4
    var chance = Math.ceil(Math.random() * 4)
    ///////If number is 1 --> attack!!
        if (chance === 1) {
            console.log("Let us ATTAAAAACKKKK!!!")
                fight();

        } else {
            console.log("Oh, nothing happened. But you wait!")
        }
}

function run() {
    /////Random number between 1-2
    Math.ceil(Math.random() * 2)
    ///////if number is 1 --> could not escape!!
        if (chance === 1) {
            console.log("You got away")
        } else {
            console.log("You couldn't escape")
        }
}

function fight() {
    ////either defeats the enemy or gets killed
    attackEnemy()
}

function attackEnemy() {
    ////random damage amount
    die()
}

function die() {
    ///////Game over
}

function enemyDie() {
    //////if enemy dies, you get an item and HP

}

function enemyCreation() {

}

function playerCreation() {

}