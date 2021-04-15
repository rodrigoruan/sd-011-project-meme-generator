// Seta algumas variáveis que são recorrentes durante as funções
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
    const text = textInput.value;
    memeText.innerText = text;
  });
}

// Cria uma imagem dentro da div parent
function loadFile() {
  uploadImage.addEventListener('change', (event) => {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  });
}

// Cria uma borda de fogo no container da imagem
function fireBorder() {
  fireButton.addEventListener('click', () => {
    if (memeArea.className === 'fire') {
      memeArea.className = 'border';
    } else {
      memeArea.className = 'fire';
    }
  });
}

// Cria uma borda de água no container da imagem
function waterBorder() {
  waterButton.addEventListener('click', () => {
    if (memeArea.className === 'water') {
      memeArea.className = 'border';
    } else {
      memeArea.className = 'water';
    }
  });
}

// Cria uma borda de terra no container da imagem
function earthBorder() {
  earthButton.addEventListener('click', () => {
    if (memeArea.className === 'earth') {
      memeArea.className = 'border';
    } else {
      memeArea.className = 'earth';
    }
  });
}

function setPreImagesMeme() {
  clickImg1.addEventListener('click', () => {
    memeImage.src = 'imgs/meme1.png';
  });
  clickImg2.addEventListener('click', () => {
    memeImage.src = 'imgs/meme2.png';
  });
  clickImg3.addEventListener('click', () => {
    memeImage.src = 'imgs/meme3.png';
  });
  clickImg4.addEventListener('click', () => {
    memeImage.src = 'imgs/meme4.png';
  });
}

function onLoad() {
  createMemeText();
  loadFile();
  fireBorder();
  waterBorder();
  earthBorder();
  setPreImagesMeme();
}

// Ao carregar todo o site, inicia uma função que possui todas as funções reunidas
window.onload = onLoad;
