const imgContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

// Apresenta o texto que foi inserido no input.
function showText() {
  memeText.innerText = textInput.value;
}
showText();

// Cria o elemento imagem e estabelece atributos de largura e altura.
const imgInput = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

// Faz upload da imagem.
function showImage() {
  memeImg.src = imgInput.value;
}
showImage();

// Botões que estilizam a borda do container.
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

fireButton.addEventListener('click', () => {
  imgContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  imgContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  imgContainer.style.border = '6px groove green';
});

// Quatro memes famosos.

const memePlace1 = document.getElementById('meme-1');
const memeImg1 = document.createElement('img');
memeImg1.src = 'imgs/meme1.png';
memePlace1.appendChild(memeImg1);
memeImg1.setAttribute('height', '50px');

memeImg1.addEventListener('click', () => {
  memeImg.src = memeImg1.src;
});

const memePlace2 = document.getElementById('meme-2');
const memeImg2 = document.createElement('img');
memeImg2.src = 'imgs/meme2.png';
memePlace2.appendChild(memeImg2);
memeImg2.setAttribute('height', '50px');

memeImg2.addEventListener('click', () => {
  memeImg.src = memeImg2.src;
});

const memePlace3 = document.getElementById('meme-3');
const memeImg3 = document.createElement('img');
memeImg3.src = 'imgs/meme3.png';
memePlace3.appendChild(memeImg3);
memeImg3.setAttribute('height', '50px');

memeImg3.addEventListener('click', () => {
  memeImg.src = memeImg3.src;
});

const memePlace4 = document.getElementById('meme-4');
const memeImg4 = document.createElement('img');
memeImg4.src = 'imgs/meme4.png';
memePlace4.appendChild(memeImg4);
memeImg4.setAttribute('height', '50px');

memePlace4.addEventListener('click', () => {
  memeImg.src = memeImg4.src;
});
