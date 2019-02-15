class Character {
        constructor(setName, gotHit, gotPowerUp, totalCoins,status, hasStart, namePicked, gameActive,addCoin, print) {
            this.setName = setName
            this.gotHit = gotHit
            this.gotPowerUp = gotPowerUp
            this.totalCoins = totalCoins
            this.status = status
            this.hasStart = hasStart
            this.namePicked = namePicked
            this.gameActive = gameActive
            this.addCoin = addCoin
            this.print = print

        }
        setName(namePicked){
            randomName = Math.ceil(Math.random() * 2 + 1);
            if (randomName === 1) {
                console.log("Luigi")
            } else {
                console.log("Mario")
            }
        }
        gotHit() {
            console.log()
        }
}

const player = new Character()



player.setName("Mario")
player.totalCoins(10)
player.status("Powered Up", "Big", "Small", "Dead")
player.hasStart(true)
player.namePicked("Mario", "Luigi")
player.gameActive(true)
player.gotHit()
player.addCoin()

function randomRange() {
        //0-2
        0 - player.gotHit()
        1 - player.gotPowerUp()
        2 - player.addCoin()
        
        player.print()
}