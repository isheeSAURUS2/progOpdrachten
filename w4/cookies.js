var readlineSync = require("readline-Sync")
var cookies = 0
function click(){
input = readlineSync.question("wil je een cookie bakken y/n")
if (input.includes("y")){
    cookies++
    console.log("zoveel cookies", cookies)
    click()
} else if (input.includes("n")){
    console.log("zoveel cookies", cookies)
}
}
click()