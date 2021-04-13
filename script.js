const caixaDeTexto = document.querySelector('#text-input');
// const container = document.querySelector('#meme-image-container');
const textoMeme = document.querySelector('#meme-text');

caixaDeTexto.addEventListener('keyup', () => {
  textoMeme.innerHTML = caixaDeTexto.value;
});
