var a = 1
var b = 0
while(a <= 50){
    b++
    console.log(a,"*",b, "=", a * b)
    if(b >= 50){
        a++
        b = 0
    }
}