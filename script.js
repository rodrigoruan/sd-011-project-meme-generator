const textInput = document.querySelector('#text-input');
const btnFogo = document.querySelector('#fire');
const btnAgua = document.querySelector('#water');
const btnTerra = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');
const botaoInsereImagem = document.querySelector('#meme-insert');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');
const srcImg = document.querySelector('#meme-image');

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});

botaoInsereImagem.addEventListener('change', (event) => {
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

meme1.addEventListener('click', () => {
  srcImg.src = meme1.src;
});

meme2.addEventListener('click', () => {
  srcImg.src = meme2.src;
});

meme3.addEventListener('click', () => {
  srcImg.src = meme3.src;
});

meme4.addEventListener('click', () => {
  srcImg.src = meme4.src;
});
