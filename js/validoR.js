window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener('click',validar,false);
}
function validaNombre(){
    var elemento=document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}
function validaContraseña(){
    var elemento=document.getElementById("contraseña");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}
function validaFecha(){
    var elemento=document.getElementById("Fecha");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}
function validar(e){
    borrarError()
    if (validaNombre && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}
function error(elemento){
    document.getElementById("Mensaje").innerHTML=elemento.validationMessage;
    elemento.className="error";
    elemento.focus();
}

function borrarError(){
    var formulario=document.forms[0];
    for(var i=0; i<formulario.elements.length;i++){
        formulario.elements[i].className="";
    }
}