const caixaDeTexto = document.querySelector('#text-imput');
const textoMeme = document.querySelector('#meme-text');

caixaDeTexto.addEventListener('keyup', () => {
  textoMeme.innerText = caixaDeTexto.value;
});
