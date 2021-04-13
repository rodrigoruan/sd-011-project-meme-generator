const text = document.querySelector('#text-input');
const imageInput = document.querySelector('#meme-insert');
const newImg = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');
const btnsBorder = document.querySelector('#border-btns');
const memesProntos = document.querySelector('#memes-prontos').childNodes;
const memesSection = document.querySelector('#memes-prontos');

function showText() {
  const newP = document.querySelector('#meme-text');
  newP.innerText = text.value;
}

text.addEventListener('keyup', showText);

function showImage(event) {
  newImg.src = URL.createObjectURL(event.target.files[0]);
}

imageInput.addEventListener('change', showImage);

function addBorder(event) {
  const btn = event.target.id;
  if (btn === 'fire') {
    container.style.border = '3px dashed rgb(255 , 0 , 0)';
  }
  if (btn === 'water') {
    container.style.border = '5px double rgb(0 , 0 , 255)';
  }
  if (btn === 'earth') {
    container.style.border = '6px groove rgb(0 , 128 , 0)';
  }
}

btnsBorder.addEventListener('click', addBorder);

function showMiniatureImage(event) {
  newImg.src = event.target.src;
}

memesSection.addEventListener('click', showMiniatureImage);

function changeUrl() {
  for (let index = 0; index < memesProntos.length; index += 1) {
    memesProntos[index].src = `${memesProntos[index].src}`;
  }
}

changeUrl();
