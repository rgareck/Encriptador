function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function encriptartexto() {
    let texto = document.getElementById("entradatexto").value;
    let textoencriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");   
    document.getElementById("salidatexto").textContent = textoencriptado;
    if (textoencriptado !== "") {
        document.getElementById("botoncopiar").style.display = "block";
        document.getElementById("salidatexto").style.display = "block";
        document.getElementById("imageninicio").style.display = "none";
        document.getElementById('txtinicial1').style.display = "none";
        document.getElementById('txtinicial2').style.display = "none";
        
    } else {
        document.getElementById("botoncopiar").style.display = "none";
        document.getElementById("reiniciar").style.display = "none";
        
    }
}
function desencriptartexto() {
    let texto = document.getElementById("salidatexto").textContent;
    let decryptedText = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("salidatexto").textContent = decryptedText;
}
function copiartexto() {
    let textocopiar = document.getElementById("salidatexto").textContent;
    navigator.clipboard.writeText(textocopiar).then(() => {
        alert("Texto copiado al portapapeles");
    });
    condicionesIniciales();
    limpiarCaja();
    
}
function condicionesIniciales() {
    document.getElementById('txtinicial1').innerText = 'Ningún mensaje fue encontrado.';
    document.getElementById('txtinicial2').innerText = 'Ingresa el texto que desees encriptar o desencriptar.';
}
function limpiarCaja() {
    document.querySelector('#entradatexto').value = '';
    document.getElementById("botoncopiar").style.display = "none";
    document.getElementById("salidatexto").style.display = "none";
    document.getElementById('txtinicial1').style.display = "block";
    document.getElementById('txtinicial2').style.display = "block";
    document.getElementById("imageninicio").style.display = "block";
}

condicionesIniciales()