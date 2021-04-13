const caixaDeTexto = document.querySelector('#text-imput');
// const container = document.querySelector('#meme-image-container');
const textoMeme = document.querySelector('#meme-text');

caixaDeTexto.addEventListener('keyup', () => {
  textoMeme.innerHTML = caixaDeTexto.target.value;
});
