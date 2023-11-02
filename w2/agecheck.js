var readlineSync = require('readline-Sync');
var age = readlineSync.question("hoe oud ben je?")

if (age => 18){
    var id = readlineSync.question("mag ik je id zien");
    if (id.includes("ja")){
        console.log("je mag naar binnen")
    }else{
        console.error("sorry je mag niet naar binnen");
    }
}else{
    console.error("sorry je mag niet naar binnen");
}