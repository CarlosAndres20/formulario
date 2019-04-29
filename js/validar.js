'use strick'
//llamamos a todas los input
/* var nombre=document.querySelectorAll('input.validar');*/
var msj=document.querySelector("small.Mensaje");
var propForm={ 
    entradas: document.querySelectorAll("input.validar"),
    valor:null,
    expresionregular:null,
    validaciones:new Array()
}

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

var even = {
    inicioFormulario: function()
    {
        for(var i=0; i< propForm.entradas.length;i++)
        {
            propForm.entradas[i].addEventListener("focus",even.dentrofoco);
            propForm.entradas[i].addEventListener("blur",even.FueraFoco);
            propForm.entradas[i].addEventListener("change",even.cambioInput);
        }
    },
    dentrofoco: function(input) 
    {
        propForm.valor=input.target.value;

        if (propForm=="") 
        {
            document.querySelector("#"+input.target.id).style.background="rgb(92,89,253)";
            document.querySelector("#"+input.target.id).style.borderBottom="3px solid greenyellow";
            document.querySelector("[for="+input.target.id+"].Mensaje").style.display='block';    
        } 

        document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class","error")
    },
    // input.style.borderBottom="3px solid red" ;
    // if ( nombre=="") 
    // {
    // msj.style.display="block";
    // }
    // }

    FueraFoco: function(input)
    {
        console.log("fuera foco"+input.target.id);
        document.querySelector("#"+input.target.id).style.background="white";

        document.querySelector("[for="+input.target.id+"].Mensaje").style.display="none";


    },
    cambioInput: function(input)
    {
        console.log("Estoy cambiando"+input.target.id);

        let validar=false;

        propForm.valor=input.target.value;
        var tipo=input.target.type;
        console.log(input.target.id+"Es de tipo "+input.target.type);

        switch(tipo){
            case "text":
            if (propForm.valor!="") 
            {
                propForm.expresionRegular= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                validar=valForm.valExpRegular(propForm.expresionRegular,propForm.valor,document.querySelector("[for="+input.target.id+"].error"),input.target.placeholder);
                console.log(validar);
                propForm.validaciones["nombre"]=validar;
                console.table(propForm.validaciones);
            } else {
                document.querySelector("[for="+input.target.id+"].Mensaje").parentNode.removeChild(document.querySelector("[for="+input.target.id+"].Mensaje"))
            }
            break;  
            case "password":
            if (propForm !="") 
            {
                propForm.expresionRegular= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
                validar=valForm.valExpRegular(propForm.expresionRegular,propForm.valor,document.querySelector("[for="+input.target.id+"].error"),input.target.plaeholder)
                console.log(validar);
                propForm.validaciones["password"]=validar;    
            } else {
                document.querySelector("[for="+input.target.id+"].error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"].error"))
            }
            break;
            case "date":
            if (propForm.valor!="") 
            {
            var fecha=new Date(propForm.valor);
            console.log(fecha);
                if (fecha) 
                {
                console.log("fecha correcta");
                var y = fecha.getUTCFullYear();
                var m = fecha.getUTCMonth()+1;
                var d = fecha.getUTCDate();

                var diaActual = new Date().getUTCDate();
                console.log(diaActual);
                console.log("año"+y,"mes"+m,"dia"+d);
                var resultado=m>=0 && m<=12 && y >1900 && y<3000 && d>0 && d<=diaActual;
                propForm.validaciones["fechaIng"]=resultado;
                if (resultado) {
                    document.querySelector("[for="+input.target.id+"].Error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"].error")) 
                } else {
                    document.querySelector("[for="+input.target.id+"].error").innerHTML='<small style="color:blue;">*Error al ingresar los datos: El formato correcto es dd/mm/yyyy la fecha no puede ser superior a la actual </small>';   
                }    
                
                }
                else{
                    document.querySelector("[for"+input.target.id+"].error").innerHTML='<small style="color:blue;">*Error al ingresar los datos: El formato correcto es dd/mm/yyyy </small>';
                    propForm.validaciones["fechaIng"]=false;
                }
                
            }
                break;
        }
    },
    validaTotal:function(arreglo)
    {
        let resVal=false;
        for(var clave in arreglo)
        {
            if (arreglo[clave]==false) {
                resVal=true;
                return resVal;
            }
        }
        return resVal;
    },
    valFormCompleto:function(){
        console.table(propForm.validaciones);
        var valida=propForm.validaciones;
        console.table(valida);
        let resultValidacion=false;
        if(valida.length <=0)
        {
            resultValidacion=true;
        }else
        {
            console.log(metFormulario.validaTotal(valida));
            resultValidacion=metFormulario.validaTotal(valida);
        }
        if (resultValidacion) 
        {
            resultado.style.display="none"
            document.querySelector("#labelEnviar").innerHTML='<small style="color:blue">¡*Tiene errores en los datos que ha ingresado,favor revisar de nuevo.</small>';    
        }
    }
}
even.inicioFormulario();

// //Condiciones   
// function fueraFoco(x) {
//     x.style.borderBottom ="3px solid blue" ;
// }

// if (nombre.onfocus) {
    
// }
// //Funciones
// function letras(e){
//     texto=/^[a-zA-Z]+$/;
// }
// function  inpuType(input) {
    
// }
// let validar=false;
// var tipo=input.target.type;
// //confirmaciones por consola
// console.log(input.target.id + "es de tipo" + input.target.type);
// console.log(nombre);