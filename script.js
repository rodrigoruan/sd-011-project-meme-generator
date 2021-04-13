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
  const memeImage = document.createElement('img');
  memeImage.innerHTML = '';
  memeImage.id = 'image';
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  divImage.appendChild(memeImage);
}

memeInsert.addEventListener('input', uploadImage);

const memeImageContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
fireButton.onclick = function () {
  memeImageContainer.style.border = '3px dashed red';
};

const waterButton = document.querySelector('#water');
waterButton.onclick = function () {
  memeImageContainer.style.border = '5px double blue';
};

const earthButton = document.querySelector('#earth');
earthButton.onclick = function () {
  memeImageContainer.style.border = '6px groove green';
};
