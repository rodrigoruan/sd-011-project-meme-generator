const textInput = document.querySelector('#text-input');

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});

const botaoInsereImagem = document.querySelector('#meme-insert');

botaoInsereImagem.addEventListener('change', (event) => {
  const srcImg = document.querySelector('#meme-image');
  srcImg.src = URL.createObjectURL(event.target.files[0]);
});
