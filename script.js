// 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.

const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.onkeyup = function createMemeText() {
  memeText.innerText = textInput.value;
};

// 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.

const memeInsert = document.querySelector('#meme-insert');
const divImage = document.querySelector('#meme-image');

function uploadImage(event) {
  divImage.innerHTML = '';
  const memeImage = document.createElement('img');
  memeImage.id = 'image';
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  divImage.appendChild(memeImage);
}

memeInsert.addEventListener('input', uploadImage);

const memeImageContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
fireButton.onclick = function redBorder() {
  memeImageContainer.style.border = '3px dashed red';
};

const waterButton = document.querySelector('#water');
waterButton.onclick = function blueBorder() {
  memeImageContainer.style.border = '5px double blue';
};

const earthButton = document.querySelector('#earth');
earthButton.onclick = function greenBorder() {
  memeImageContainer.style.border = '6px groove green';
};

const miniatura = document.querySelector('#miniatura');
miniatura.onclick = function pegarMiniatura(event) {
  divImage.innerHTML = '';
  const memeImage = document.createElement('img');
  memeImage.id = 'image';
  memeImage.src = event.target.src;
  divImage.appendChild(memeImage);
};
