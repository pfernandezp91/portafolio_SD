


function sistema_de_ecuaciones(a,b,c,d,f,e){
    var determinante;
    determinante=a*e-b*d;

    if (determinante !=0){
        x=(c*e-b*f)/determinante;
        y=(a*f-c*d)/determinante;
    return determinante;
    }
    else
        return 0;
}
console.log("Digite el valor para a,b,c,d,f:");
var a=5;
var b=6;
var c=20;

var d=3;
var f=8;
var e=34;

console.log(sistema_de_ecuaciones(a,b,c,d,f,e));
