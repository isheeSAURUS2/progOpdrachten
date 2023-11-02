var readlineSync = require("readline-sync")
raaddenummerpls();
function raaddenummerpls(){
    var randomnummer = Math.floor(Math.random() * 100)
    var nummer
    var score
    while (nummer != randomnummer){
        nummer = readlineSync.question("wat is de nummer ouwe")
        console.log(nummer)
        if(nummer < randomnummer && nummer != randomnummer){
            console.log("meer")
            score++
        }else if(nummer > randomnummer && nummer != randomnummer){
            console.log("minder")
            score++
        }
    }
    if (nummer == randomnummer){
        score++
        console.log("おめでとうごさいます！！")
        console.log("je hebt", score, "keer geraden")
        if (score => 10){
            console.log("je bent tering noob ouwe")
        }
    }
}