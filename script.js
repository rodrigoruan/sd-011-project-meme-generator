const textInput = document.querySelector('#text-input');
// const btnEnviar = document.querySelector('#enviar');

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});
