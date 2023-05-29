
function encriptar(){
  var texto = document.getElementById("cajatexto").value.toLowerCase()
  //i es para que afecte mayusculas como minusculas
  //g es para toda la linea u oracion
  //m es para que afecte a multiples lineas o parrafos
  var encriptado = texto.replace(/e/igm,"enter");
  var encriptado = encriptado.replace(/o/igm,"ober");
  var encriptado = encriptado.replace(/i/igm,"imes");
  var encriptado = encriptado.replace(/a/igm,"ai");
  var encriptado = encriptado.replace(/u/igm,"ufat");


  document.getElementById("textoimagenderecha").style.display = "none";
  document.getElementById("cajatexto").style.display = "none";
  document.getElementById("textoarea").innerHTML = encriptado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {
  var texto = document.getElementById("cajatexto").value.toLowerCase()
  //i es para que afecte mayusculas como minusculas
  //g es para toda la linea u oracion
  //m es para que afecte a multiples lineas o parrafos
  var encriptado = texto.replace(/enter/igm, "e");
  var encriptado = encriptado.replace(/ober/igm, "o");
  var encriptado = encriptado.replace(/imes/igm, "i");
  var encriptado = encriptado.replace(/ai/igm, "a");
  var encriptado = encriptado.replace(/ufat/igm, "u");


  document.getElementById("textoimagenderecha").style.display = "none";
  document.getElementById("cajatexto").style.display = "none";
  document.getElementById("textoarea").innerHTML = encriptado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
  var contenido = document.querySelector("#textoarea");
  contenido.select();
  document.execCommand("copy");
}
