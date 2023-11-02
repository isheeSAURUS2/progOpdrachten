var nuTijd = new Date();
console.log(nuTijd.getHours());

if(nuTijd.getHours() >= 9 && nuTijd.getHours() < 16){
    console.log("moet je niet op school zijn??????");
}
if(nuTijd.getHours() >= 16){
    console.log("ga naar huis!!!!");
}