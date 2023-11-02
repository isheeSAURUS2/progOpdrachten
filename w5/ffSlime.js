const readlineSync = require('readline-Sync')
var playerName = readlineSync.question("please make a charather name\n")
var playerHealth = 21
var hasNotRun = true;
fightOrRun(playerHealth)

function fightOrRun(playerHealth) {
    while(playerHealth > 0 && hasNotRun){
        console.log(playerName,"has", playerHealth,"hp")
        let WTD = readlineSync.question("what will you do: \nfight\nrun\n")
        if(WTD.includes("run")){
            console.log(playerName, "escapes succesfully")
            console.log(playerName, "had", playerHealth, "hp")
            hasNotRun = false
        }else if (WTD.includes("fight")){
            var slimeATK = Math.floor(Math.random() * 3) + 1
            var playerATK = Math.floor(Math.random() * 11) + 1
            console.log(playerName, "slashes the slime with their sword and deals", playerATK, "damage\n" + playerName,"engages the slime and takes", slimeATK, "damage")
            playerHealth = playerHealth - slimeATK
        }
    }
    if (playerHealth <= 0){
        console.log(playerName,"perished in battle")
        var RP = readlineSync.question("type r to retry\n")
        if(RP.includes("r")){
            fightOrRun(playerHealth)
        }
    }

}
