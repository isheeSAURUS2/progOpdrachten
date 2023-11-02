function add(a, b){
    var ADD = a+b;
    console.log(a);
    return ADD;
}
add(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
function multiply(c, d){
    var MULTIPLY = c*d
    console.log(c*d);
    return MULTIPLY;
}
multiply(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
function subtract(e, f){
    console.log(e - f);
    return;
}
subtract(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
function devide(g, h){
    var DEVIDE = g/h;
    console.log(g / h);
    return;
}
devide(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));

var awnser = multiply(add(88, 59), devide(400, 2));
console.log(awnser);