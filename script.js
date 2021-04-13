const loadFile = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const textInput = document.querySelector('#text-input');
// const memeText = document.querySelector('#meme-text');
// const memeReady = document.querySelector('#memes-ready');
// const fireButton = document.querySelector('#fire');
// const earthButton = document.querySelector('#earth');
// const waterButton = document.querySelector('#water');
// const memeImageContainer = document.querySelector('#meme-image-container');

textInput.addEventListener('keyup', () => {
  const textArea = document.querySelector('#meme-text');
  textArea.innerText = textInput.value;
});

loadFile.addEventListener('change', (e) => {
  const img = document.createElement('img');
  img.setAttribute('src', e.target.value);
  img.classList.add('img');
  memeImage.appendChild(img);
});
