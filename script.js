const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const uploadImage = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeArea = document.getElementById('meme-image-container');
const clickImg1 = document.getElementById('meme-1');
const clickImg2 = document.getElementById('meme-2');
const clickImg3 = document.getElementById('meme-3');
const clickImg4 = document.getElementById('meme-4');

// Cria um parágrafo de texto e insere dentro da div da imagem
function createMemeText() {
  textInput.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
}
createMemeText();

// Cria uma imagem dentro da div parent
function loadFile() {
  uploadImage.addEventListener('change', (event) => {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  });
}
loadFile();

function fireBorder() {
  fireButton.addEventListener('click', () => {
    if (memeArea.className === 'fire') {
      memeArea.className = 'border';
    } else {
      memeArea.className = 'fire';
    }
  });
}
fireBorder();

function waterBorder() {
  waterButton.addEventListener('click', () => {
    if (memeArea.className === 'water') {
      memeArea.className = 'border';
    } else {
      memeArea.className = 'water';
    }
  });
}
waterBorder();

function earthBorder() {
  earthButton.addEventListener('click', () => {
    if (memeArea.className === 'earth') {
      memeArea.className = 'border';
    } else {
      memeArea.className = 'earth';
    }
  });
}
earthBorder();

function click() {
  clickImg1.addEventListener('click', () => {
    if (memeImage.src === 'imgs/meme1.png') {
      memeImage.src = '#';
    } else {
      memeImage.src = 'imgs/meme1.png';
    }
  });
  clickImg2.addEventListener('click', () => {
    if (memeImage.src === 'imgs/meme2.png') {
      memeImage.src = '#';
    } else {
      memeImage.src = 'imgs/meme2.png';
    }
  });
  clickImg3.addEventListener('click', () => {
    if (memeImage.src === 'imgs/meme3.png') {
      memeImage.src = '#';
    } else {
      memeImage.src = 'imgs/meme3.png';
    }
  });
  clickImg4.addEventListener('click', () => {
    if (memeImage.src === 'images/meme4.png') {
      memeImage.src = '#';
    } else {
      memeImage.src = 'imgs/meme4.png';
    }
  });
}
click();
