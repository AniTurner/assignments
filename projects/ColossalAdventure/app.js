var ask = require('readline-sync'),

///////////////////Global variables
////////Choose a player////////////////////////////////////////
intro = ask.question("Welcome to the game of ice and fire. WHEN YOU PLAY THE GAME OF THRONES, YOU WIN OR YOU DIE. Click enter to give us your favorite Game of Thrones character's name.");
//////////////////////////
var player = {
    name: "",
    health: 100,
    inventory: []
} 
var printValue = []
var item = ['dragon', 'dire wolf', 'black ice sword']
var attackers = ["White Walkers", "a pack of wolfs", "Walder Frey"]

///////////////////Game Functions////////////////////////////
function walk() {
    ///////input 'w' for walk
    var enterW = ask.keyIn('Enter w to talk')
    console.log(`Let's go!`);
    ///////Random number between 1-4
    var chance = Math.ceil(Math.random() * 4)
    ///////If number is 1 --> attack!!
        if (chance === 1) {
            console.log("Let us ATTAAAAACKKKK!!!")
            fight();

        } else {
            console.log("Oh, nothing happened. But you wait!")
            print();
            walk();
        }
}

function print() {
    if (printValue == 'Print')
    console.log(player) 
}

function fight() {
    while(player.health > 0) {
        options = ['fight', 'run'];
        var fightRunQuestion = ask.keyInSelect(options, player.name + "What would you like to do?");
        if (fightRunQuestion === 1) {
            ////////////RUN
            run();
        } else if (fightRunQuestion === 0) {
            /////////FIGHT
            /////////ATTACK THE ENEMY
            attackEnemy();
            enemyAttack();
        } else {
            console.log("Don't be a baby, fight like a warrior")
        }

    }
}

function run() {
    var runRandom = Math.ceil(Math.random() * 2 + 1) ;
    if (runRandom === 1) {
        console.log('You barely got away')
    } else {
        console.log('You cannot run')
        attackEnemy();
    }
}

function attackEnemy() {
    var min = 5;
    var max = 100;
    var attackStrength = Math.ceil(Math.random() * max + min);
    console.log('Your attack strength is ' + attackStrength)
    console.log('Attaaaaaaaack!')
    enemyAttack();
}

function enemyAttack() {
    var enemyName = attackers;
    var min = 5;
    var max = 100;
    var enemyAttackStrength = Math.ceil(Math.random() * max + min);
    console.log(enemyName + " just attacked you with " + enemyAttackStrength + " strength") 
}

function die() {
    console.log('you died')
}

function enemyDie() {
        console.log("You defeated the enemy")
        player.health += 50;
        var randomItem = (Math.ceil(Math.random() * specialItem.length))
        player.inventory.push(specialItem[randomItem])
        console.log('Here is your current status' + player);
}
 function enemyCreatio() {
     var enemies = ['White Walkers', 'pack of wolfs', 'walder frey']
     var randomEnemies = Math.ceil(Math.random() * enemies.length)
     var attackers = enemies[randomEnemies];
     return attackers 
 }

////////////////////Game Intro//////////////////////////////
player.name = ask.question("What is your game of thrones character name? ")
console.log("Let's get started " + player.name)


var options = ["Walk", "run", "attack"]
////////////////////Game Loop///////////////////////////////
while(player.health > 0) {
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0) {
        var chance = Math.ceil(Math.random() * 4)
        if (chance === 1) {
            walk();
        } else if (userChoice === 1)
            console.log("You are getting attacked by " + attackers.Math.random())
            
    }
}
