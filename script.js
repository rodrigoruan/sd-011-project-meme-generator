const input = document.getElementById('text-input');
const divText = document.getElementById('meme-text');
const image = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const eartButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

function inputText() {
  const inputValue = input.value;
  divText.innerHTML = inputValue;
}

function createImage(event) {
  const imagem = document.getElementById('image');
  imagem.src = URL.createObjectURL(event.target.files[0]);
}

function createEventListeners() {
  input.addEventListener('keyup', inputText);
  image.addEventListener('change', createImage);
  fireButton.addEventListener('click', () => {
    memeContainer.style.border = '3px dashed red';
  });
  waterButton.addEventListener('click', () => {
    memeContainer.style.border = '5px double blue';
  });
  eartButton.addEventListener('click', () => {
    memeContainer.style.border = '6px groove rgb(0, 128, 0)';
  });
}

function init() {
  createEventListeners();
}

window.onload = init;
