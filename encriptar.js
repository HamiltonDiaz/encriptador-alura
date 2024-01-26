function encriptar(texto) {
    let textoEncriptado="";
    let letra="";
    for (let i = 0; i < texto.length; i++){
        letra=texto[i]
        if (letra=="a"){
            letra="ai"
        }
        if (letra=="e"){
            letra='enter'
        }
        
        if (letra=="i"){
            letra='imes'
        }
        if (letra=="o"){
            letra='ober'
        }
        if (letra=="U"){
            letra='ufat'
        }
        textoEncriptado= textoEncriptado + letra
    }    
    return textoEncriptado;
}

function desencriptar(texto) {    
    let textoDesencriptado=texto.replaceAll("ufat","u").replaceAll("ober","o").replaceAll("imes","i").replaceAll("enter","e").replaceAll("ai","a");
    return textoDesencriptado;
}


function ocultarElementos() {
    document.getElementById("contenido-encriptacion").removeAttribute("class")
    document.getElementById("seccion-mostrar").removeAttribute("class")
    document.getElementById("seccion-mostrar").setAttribute("class","ocultar-informacion seccion-mostrar")
}

function encriptarTexto() {
    let inputText = document.getElementById("texto-encriptar").value;
    

    if (inputText==""){
        alert("¡El texto no puede estar vacío!")
    }else{
        inputText =inputText.toLowerCase();
        ocultarElementos();
        var encryptedText = encriptar(inputText);
        document.getElementById("mostrar-encriptacion").value=  encryptedText;
    }
    
}


function dencriptarTexto() {
    let inputText = document.getElementById("texto-encriptar").value;
    if (inputText==""){
        alert("¡El texto no puede estar vacío!")
    }else{
        ocultarElementos();
        inputText =inputText.toLowerCase();
        let decryptedText = desencriptar(inputText);
        document.getElementById("mostrar-encriptacion").value =  decryptedText;
    }
  
}

function copiarTexto(){
    var inputText = document.getElementById("mostrar-encriptacion");
    inputText.select();
    document.execCommand("copy");


}