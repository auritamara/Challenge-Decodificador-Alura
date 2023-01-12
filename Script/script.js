var botaoCriptografar = document.querySelector('.criptografar');
var botaoDescriptografar = document.querySelector('.descriptografar');
var botaoLimpaTexto = document.querySelector('.limpaTexto');
var botaoCopiaTexto = document.querySelector('.copiaTexto');

var caixaSemResposta = document.querySelector('.semResposta');
var caixaComResposta = document.querySelector('.comResposta');

var textoEscrito = document.querySelector('.textoEscrito');
var caixaTextoCodificado = document.querySelector('.textoCodificado');

function mostraCaixaResposta() {
    if (textoEscrito.value !== '') {
        caixaSemResposta.style.display = 'none'
        caixaComResposta.style.display = 'block'
    }
}

function criptografaTexto (){
    var mensagemTextoEscrito = textoEscrito.value; 
    var textoCriptografado = mensagemTextoEscrito
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    caixaTextoCodificado.textContent = textoCriptografado;
    mostraCaixaResposta()
}

function descriptografaTexto(){
    mensagemTextoEscrito = textoEscrito.value;
    var textoDescriptografado = mensagemTextoEscrito
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    caixaTextoCodificado.textContent = textoDescriptografado;
    mostraCaixaResposta()
}

function copiaTexto() {
    textoCopiado = caixaTextoCodificado;
    navigator.clipboard.writeText(textoCopiado.value);
    limpaTexto()
}
  function limpaTexto() {
    textoEscrito.value = ''
    caixaSemResposta.style.display = 'block'
    caixaComResposta.style.display = 'none'
}

botaoCriptografar.onclick = criptografaTexto
botaoDescriptografar.onclick = descriptografaTexto
botaoCopiaTexto.onclick = copiaTexto
botaoLimpaTexto.onclick = limpaTexto






