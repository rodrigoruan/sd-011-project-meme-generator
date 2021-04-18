const textInput = document.querySelector('#text-input');
const btnFogo = document.querySelector('#fire');
const btnAgua = document.querySelector('#water');
const btnTerra = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');
const botaoInsereImagem = document.querySelector('#meme-insert');

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});

botaoInsereImagem.addEventListener('change', (event) => {
  const srcImg = document.querySelector('#meme-image');
  srcImg.src = URL.createObjectURL(event.target.files[0]);
});

btnFogo.addEventListener('click', () => {
  memeImageContainer.className = 'fire';
});

btnAgua.addEventListener('click', () => {
  memeImageContainer.className = 'water';
});

btnTerra.addEventListener('click', () => {
  memeImageContainer.className = 'earth';
});
