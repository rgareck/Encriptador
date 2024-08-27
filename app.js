let textoencriptad0 = false;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function encriptartexto() {
    const texto = document.getElementById("entradatexto").value;
    const textoencriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");   
    document.getElementById("salidatexto").textContent = textoencriptado;

    textoencriptad0 = textoencriptado !== "";

    if (textoencriptad0) {
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
function desencriptartexto(origen = 'salidatexto') {
    let texto;
    
    if (origen === 'entradatexto') {
        texto = document.getElementById("entradatexto").value;
    } else {
        texto = document.getElementById("salidatexto").textContent;
    }

    const textodesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("salidatexto").textContent = textodesencriptado;

    if (textodesencriptado !== "") {
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

function copiartexto() {
    let copiartexto = document.getElementById("salidatexto").textContent;
    navigator.clipboard.writeText(copiartexto).then(() => {
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
