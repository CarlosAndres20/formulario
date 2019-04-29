'use strick'
// var dolarCol=3200;

var peso=0;
var count1=0;
// var inputVa;
function valorEuro(valNum){
    var col=document.getElementById("euro").value;
    if(valNum>=1){
        peso=valNum/3600;
    }
    document.querySelector("#EnviarEuro").innerHTML='<small>'+peso+' Euros</small>';   
}
function valorDolar(valNum){
    // inputVa=input.target.value;
    var col=document.getElementsByClassName("dolar").value=valNum;
    if(valNum>=1){
        peso=valNum/3200;
    }
    
    document.querySelector("#EnviarDolar").innerHTML='<small>'+peso+'</small>';   
}
// function valorColombia(valNum){
//     // inputVa=input.target.value;
//     var dolar=document.getElementById("dolar").value=valNum*3200;
// }