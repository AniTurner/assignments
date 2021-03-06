var Reset = "\x1b[0m"
var Bright = "\x1b[1m"
var Dim = "\x1b[2m"
var Underscore = "\x1b[4m"
var Blink = "\x1b[5m"
var Reverse = "\x1b[7m"
var Hidden = "\x1b[8m"

var FgBlack = "\x1b[30m"
var FgRed = "\x1b[31m"
var FgGreen = "\x1b[32m"
var FgYellow = "\x1b[33m"
var FgBlue = "\x1b[34m"
var FgMagenta = "\x1b[35m"
var FgCyan = "\x1b[36m"
var FgWhite = "\x1b[37m"

var BgBlack = "\x1b[40m"
var BgRed = "\x1b[41m"
var BgGreen = "\x1b[42m"
var BgYellow = "\x1b[43m"
var BgBlue = "\x1b[44m"
var BgMagenta = "\x1b[45m"
var BgCyan = "\x1b[46m"
var BgWhite = "\x1b[47m"


var ask = require('readline-sync');
var sleep = require('sleep');


///////////////////Global variables
////////Choose a player////////////////////////////////////////
console.log(FgRed);
welcomeTitle();
console.log(Reset);
sleep.sleep(1);
console.log('\n')

console.log(FgBlack + BgWhite + "\n\nWelcome to the game of" + Reset + FgBlue + BgWhite + " ice" + Reset + FgBlack + BgWhite + " and " + Reset + FgRed + BgWhite + "fire.\n\n" + Reset)

console.log(BgBlack + FgRed + "\n\n\nWHEN YOU PLAY THE GAME OF THRONES, YOU WIN OR YOU DIE. \n\nClick enter to give us your favorite Game of Thrones character's name.\n\n" + Reset);
//////////////////////////
var player = {
    name: "",
    health: 100,
    inventory: [],
    score: 0
}
var printValue = []
var specialItem = ['Dragon', 'Dire wolf', 'Dragonglass']
var endGame = false
// var attackers = ["White Walkers", "a pack of wolfs", "Walder Frey"]

///////////////////Game Functions////////////////////////////
function walk() {
    walkingCharacter();
    sleep.sleep(1)
    ///////Random number between 1-4
    var chance = Math.ceil(Math.random() * 4)
    ///////If number is 1 --> attack!!
    if (chance === 1) {
        console.log(BgBlue + FgRed + "\n\nAttack! ATTAAAAACKKKK!!!\n\n" )
        attack();

    } else {
        console.log(BgRed + FgWhite + "\n\nThere is only one god, and his name is Death. And there is only one thing we say to Death: NOT TODAY.\n\n" +Reset )
        print();
    }
}

function print() {
    console.log(player)
}

function attack(enemy) {
    if (!enemy) {
        var enemy = generateEnemy()
    }
    console.log(enemy)
    console.log(enemy.health);
    if (player.health > 0 && enemy.health > 0) {
        var options = ['ATTACK THE ENEMY', 'Ruuuuuuun'];
        var fightRunQuestion = ask.keyInSelect(options, player.name + ", what would you like to do?\n");
        console.log(fightRunQuestion)

        if (fightRunQuestion === 0) {    
            attackingCharacter()
            sleep.sleep(1)

            attackEnemy(enemy)
            ////////////Attack
        } else if (fightRunQuestion === 1) {
            console.log(BgWhite + FgGreen + enemy.health + Reset)
            attackingCharacter()
            sleep.sleep(1)


            /////////Run 
            enemyAttack(enemy, null);
        } else {
            console.log("Anyone can be killed.")
        }
    }
}

function run() {
    var runRandom = Math.ceil(Math.random() * 2 + 1);
    if (runRandom === 1) {
        console.log(BgBlack + FgWhite + "\n\nNothing isn't better or worse than anything. Nothing is just nothing.\n\n" + Reset)
        // console.log(enemy)
        enemy.health = 0
    } else {
        console.log(BgBlack + FgWhite + "\n\nThe day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.\n\n" + Reset)
        enemyAttack();
        attack();
    }
}

function attackEnemy(existingEnemy) {
    var min = 5;
    var max = 40;
    var attackStrength = Math.ceil(Math.random() * max + min);
    console.log(FgBlack + BgWhite+ '\nYour attack strength is ' + attackStrength + Reset)
    console.log(FgBlack + BgRed + '\n\nAttaaaaaaaack!\n\n' +Reset)
    existingEnemy.health -= attackStrength
    enemyAttack(existingEnemy);
}

function enemyAttack(enemy) {
    var myEnemy;
    if (enemy) {
        myEnemy = enemy;
 
    var min = 5;
    var max = 30;
    var enemyAttackStrength = Math.ceil(Math.random() * max + min);
    console.log(FgRed + BgWhite + myEnemy.name + " just attacked you with " + enemyAttackStrength + " strength\n" + Reset)
    player.health -= enemyAttackStrength
    if (player.health <= 0) {
        return die()
    } else if (myEnemy.health <= 0) {
        console.log(FgWhite + BgBlack + myEnemy + Reset)
        return enemyDie()
    } else {
        attack(myEnemy);
    }
}
}

function die() {
    dracarys();
    return gameOver();
}

function enemyDie() {
    console.log("Dracarys!")
    player.health += 50;
    player.score += 20;
    if (player.score >= 50) {
        console.log(player.score)
        console.log(FgRed + BgWhite + "\n\nYOU WON THE GAME OF THRONES!\n\n" + Reset)
        return endGame1()
    } else {
        var randomItem = (Math.floor(Math.random() * specialItem.length))
        player.inventory.push(specialItem[randomItem])
        console.log(FgBlack + BgGreen + '\n\nHere is your current status\n\n' + player + Reset);
        walk();
    }
}

function generateEnemy() {

    function Enemy(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    var whiteW = new Enemy("White Walkers", 60, "");
    var packW = new Enemy("Pack of Wolfs", 60, "");
    var walderF = new Enemy("Walder Frey", 60, "")


    var randomEnemies = Math.ceil(Math.random() * 2)
    if (randomEnemies === 0) {
        return whiteW
    } else if (randomEnemies === 1) {
        return packW
    } else {
        return walderF
    }
}

////////////////////Game Intro//////////////////////////////
player.name = ask.question(BgWhite + FgMagenta +"What is your game of thrones character name?\n\n " + Reset)
console.log(FgBlack + BgWhite + "\n\nLet's get started\n\n " + player.name + Reset)


var options = ["Walk", "Print"]
////////////////////Game Loop///////////////////////////////
while (player.health > 0 && !endGame) {
    var userChoice = ask.keyInSelect(options, "\n\nWhat would you like to do?\n\n ")
    if (userChoice === 0) {
        var chance = Math.ceil(Math.random() * 4)
        if (chance === 1) {
            walk();
        }
    } else if (userChoice === 'Print' || userChoice === 1) {
        console.log(`Select print to get a status:`)
        print();
    }
}

function endGame1(){
    endGame = true
    youWon()
    return "you won the game"
}
function welcomeTitle() {
    console.log("********       *      *      *   *******       *****   ******      ********* *      *  *******    *****   *     *  ******   *******");
    console.log("*             * *     * *  * *   *            *      * *               *     *      *  *      *  *     *  * *   *  *        *");
    console.log("*            *   *    *  **  *   *            *      * *****           *     ********  *******   *     *  *  *  *  *****    *");
    console.log("*    ***    *******   *      *   *****        *      * *               *     *      *  * *       *     *  *   * *  *        *******");
    console.log("*      *   *       *  *      *   *            *      * *               *     *      *  *   *     *     *  *    **  *              *");
    console.log("********  *         * *      *   ********      ******  *               *     *      *  *     *    *****   *     *  ******   *******");
};
function youWon(){
    console.log(" *      *   *****    *      *        *                *  *****    *     *    **"   )
    console.log( " *   *    *      *  *      *         *              *  *      *  * *   *    **"   )
    console.log( "   *      *      *  *      *          *      *     *   *      *  *  *  *    **"   )
    console.log( "   *      *      *  *      *           *    * *   *    *      *  *   * *    **"                                                )
    console.log("    *      *      *  *      *            *  *   * *     *      *  *    **"         )
    console.log( "   *       ******    ******              *      *       *****    *     *    **"   )


}

function gameOver() {
    console.log("********       *      *      *   *******       *****   *         *  ********  *******    **"   );
    console.log("*             * *     * *  * *   *            *      *  *       *   *         *      *   **"   );
    console.log("*            *   *    *  **  *   *            *      *   *     *    *****     *******    **"    );
    console.log("*    ***    *******   *      *   *****        *      *    *   *     *         * *        **"    );
    console.log("*      *   *       *  *      *   *            *      *     * *      *         *   *         "   );
    console.log("********  *         * *      *   ********      ******       *       ********  *     *    ** "   );
};

function walkingCharacter() {
    console.clear();
    console.log("-------------------------");
    console.log("O                   ");
    console.log("|\\                  ");
    console.log("/\\                     ");
    console.log("--------------------------");
    sleep.sleep(1);
    console.clear();
    console.log("-------------------------");
    console.log("       O                ");
    console.log("      /|\\               ");
    console.log("       /\\                  ");
    console.log("--------------------------");
    sleep.sleep(1);
    console.clear();
    console.log("-------------------------");
    console.log("                   O     ");
    console.log("                   |\\    ");
    console.log("                   /\\     ");
    console.log("--------------------------");
}

function attackingCharacter(){

console.clear();
console.log("------------------------------------");
console.log(" O                               O                   ");
console.log(" |\\-->                      <--/|                ");
console.log(" /\\                             /\\                    ");
console.log("-------------------------------------");
sleep.sleep(1);

console.clear();
console.log("------------------------------------");
console.log("       O                       O                   ");
console.log("       |\\-->              <--/|                ");
console.log("       /\\                     /\\                    ");
console.log("-------------------------------------");
sleep.sleep(1);

console.clear();
console.log("------------------------------------");
console.log("       O            O                   ");
console.log("       |\\-->   <--/|                ");
console.log("       /\\          /\\                    ");
console.log("-------------------------------------");
sleep.sleep(1);

console.clear();
console.log("------------------------------------");
console.log("       O      O                   ");
console.log("       |\\-->/|                ");
console.log("       /\\    /\\                    ");
console.log("-------------------------------------");
sleep.sleep(1);

console.clear();
console.log("------------------------------------");
console.log("          \\O/                  ");
console.log("           |                ");
console.log("           /\\                    ");
console.log("-------------------------------------");
}

function dracarys() {

console.log("-------------------------");
console.log("                  @                ");
console.log("                 /|\\               ");
console.log("                  /\\                  ");
console.log("--------------------------");
sleep.sleep(1);
console.clear();
console.log("------------------------------------");
console.log("           ||  //               ");
console.log("         @ ----       ");
console.log("                                    ");
console.log("-------------------------------------");
sleep.sleep(1);
console.clear();
console.log("------------------------------------");
console.log("                                     ");
console.log("        \\                               ");
console.log("      @ -- /_                              ");
console.log("-------------------------------------");

}