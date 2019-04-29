'use strick'

//Definicion de variables del dom

var allVar={
    //variable input text, date and password --datos--
    Usuario:document.getElementById("Usuario").value,
    //variable input radio --opcion--
    opcion:document.querySelectorAll("input.Opcion"),
    //Variable de acepta terminos y condiciones
    opAcepta:document.querySelector("input.Opcion1"),
    valor:null,
    expresion:null,
    valor1:null,
    validaciones:new Array()
}
//Definicion de varibles js
//ValForm
var valForm={

    valTex: function(min,max,propVal,inpVal,menError,expresionregular)
    {
        if(propVal.length<min || propVal.length>max ||!expresionregular.test(propVal))
        {
            inpVal.innerHTML='<small style="color:darkblue">*Error al ingresar los datos:'+menError+'</small>';
            return false;
        }else{
            inpVal.parentNode.removeChild(inpVal);
            return true;
        }

    },
    valExpRegular:function(expresionregular,propFormVal,inpVal,menError)
    {
        if (!expresionregular.test(propFormVal)) 
        {
            inpVal.innerHTML='<small style="color:darkblue">*Error al ingresar los datos:'+menError+'</small>';
            return false;
        } else {
            inpVal.parentNode.removeChild(inpVal);
            return true;
        }
    }
} 
//
function dentro(x){
    let validar=false;
    valor=allVar.Usuario;
    document.querySelector("#Usuario").style.borderBottom ='4px solid red';
    document.querySelector("#valUsuario").innerHTML='<small> *Campo Obligatorio</small>';
    document.querySelector("#valUsuario").innerHTML='<small>' +valor+'*Campo Obligatorio</small>';
    Console.console.log(valor);
    
 if (valor!=="") {
        allVar.expresion= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        validar=valForm.valExpRegular(allVar.expresion,allVar.valor1,document.querySelector("[for="+input.target.id+"].error"),input.target.placeholder);
        console.log(validar);
         allVar.validaciones["nombre"]=validar;
         console.table(allVar.validaciones);
        validar=false;
 } else {
        validar=true;
 }
// if (valor!="Carlos") {
//     document.querySelector("#valUsuario").innerHTML='<span>*Error al ingresar los datos:  </span>';
// }else{
//     document.querySelector("#valUsuario").innerHTML='<span>*ingresar los datos:  </span>';
// }
 }




// var jsvar={
//     //variable de valor
    
// }
// for (var i = 0; i < allVar.datos.length; i++) {
//     console.log("datos"+allVar.datos[i]); 
//     if (allVar.datos[i].value=="") {
//         alert("Porfavor ingrese datos");
//     }else{
//         alert("datos correctos");
//     }
//     } 
// var metFormulario = {
//     inicioFormulario: function () {

        
//     },
//     inpfunciona: function(input){
//         allVar.valor = input.target.value;
//     }

// }
// metFormulario.inicioFormulario();
// console.log(all.valor)//
var login={
    nombreL:document.getElementById("Nombre").value
}
while (login.nombreL=="Carlos") {
    
}
function nombreF(n){
    if (login.nombreL!=="Carlos") {
        alert("error e los datos");
    } else {
        alert("Welcome to "+login.nombreL);
    }
    
}
