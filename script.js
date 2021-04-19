const input = document.getElementById('text-input');
const divText = document.getElementById('meme-text');
const image = document.getElementById('meme-insert');

function inputText() {
  const element = document.createElement('div');
  const inputValue = input.value;
  element.innerText = inputValue;
  divText.appendChild(element);
}

function createImage(event) {
  const imagem = document.getElementById('image');
  imagem.src = URL.createObjectURL(event.target.files[0]);
}

function createEventListeners() {
  input.addEventListener('keyup', inputText);
  image.addEventListener('change', createImage);
}

function init() {
  createEventListeners();
}

window.onload = init;
