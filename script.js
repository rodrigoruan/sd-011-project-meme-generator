const input = document.getElementById('text-input');
const divText = document.getElementById('meme-text');
const imageField = document.getElementById('meme-image');
const image = document.getElementById('meme-insert');

function inputText() {
  const element = document.createElement('div');
  const inputValue = input.value;
  element.innerText = inputValue;
  divText.appendChild(element);
}

function createImage(event) {
  const imagem = document.getElementById('image');
  // const createImage = document.createElement('img');
  imagem.src = URL.createObjectURL(event.target.files[0]);
  // createImage.appendChild(imageField);
}

function createEventListeners() {
  input.addEventListener('keyup', inputText)
  image.addEventListener('change', createImage);
}

function init() {
  createEventListeners();
}

window.onload = init;
