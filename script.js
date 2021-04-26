// Exercício 1 - criar caixa input e mostrar texto input e 4
const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', () => {
  const showText = document.getElementById('meme-text');
  showText.innerText = textInput.value;
});

// Exercício 2
const input = document.getElementById('meme-insert');
const memeImage = 'meme-image';
input.addEventListener('input', () => {
  document.getElementById(memeImage).src = URL.createObjectURL(input.files[0]);
});

// Exercício 3
const containerImagem = document.getElementById('meme-image-container');
containerImagem.style.backgroundColor = 'white';
containerImagem.style.border = 'solid black 1px';
containerImagem.style.display = 'inline-block';

// Exercício 4 e 5
const showText2 = document.getElementById('meme-text');
showText2.style.textShadow = 'rgb(0, 0, 0) 5px 5px 5px';
showText2.style.fontSize = '30px';
showText2.style.color = 'rgb(255, 255, 255)';
showText2.style.position = 'absolute';
showText2.style.marginTop = '-145px';
showText2.style.marginLeft = '5px';

// Exercício 6
const fireButton = document.getElementById('fire');
fireButton.style.backgroundColor = 'rgb(255, 0, 0)';
fireButton.addEventListener('click', () => {
  containerImagem.style.border = 'dashed rgb(255, 0, 0) 3px';
});

const waterButton = document.getElementById('water');
waterButton.style.backgroundColor = 'rgb(0, 0, 255)';
waterButton.addEventListener('click', () => {
  containerImagem.style.border = 'double rgb(0, 0, 255) 5px';
});

const earthButton = document.getElementById('earth');
earthButton.style.backgroundColor = 'rgb(0, 128, 0)';
earthButton.addEventListener('click', () => {
  containerImagem.style.border = 'groove rgb(0, 128, 0) 6px';
});

// Exercício 6
const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', () => {
  document.getElementById(memeImage).src = 'imgs/meme1.png';
});

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', () => {
  document.getElementById(memeImage).src = 'imgs/meme2.png';
});

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', () => {
  document.getElementById(memeImage).src = 'imgs/meme3.png';
});

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', () => {
  document.getElementById(memeImage).src = 'imgs/meme4.png';
});
