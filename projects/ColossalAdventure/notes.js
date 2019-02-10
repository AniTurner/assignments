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