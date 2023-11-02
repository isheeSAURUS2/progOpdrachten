var readlineSync = require("readline-Sync")
function ageCalc(birthYear, birthMonth, birthDay) {
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    var dateNow = new Date();
    var millisecondDifference = dateNow - birthDate;
    var dayDifference = millisecondDifference / (1000 * 60 * 60 * 24);
    var ageInYears = dayDifference / 365.25; 
    return Math.floor(ageInYears);
}
const birthYear = readlineSync.question("what is your birth year");
const birthMonth = readlineSync.question("what is your birth month");
const birthDay = readlineSync.question("what is the day of your birth");
const age = ageCalc(birthYear, birthMonth, birthDay);
console.log("your age is", age, "in years");