const inputText = document.getElementById('text-input');
const inputFile = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const imgMeme = document.getElementById('meme-image');
const spanMemeText = document.getElementById('meme-text');
const bordersContainer = document.getElementById('borders-container');
const miniatures = document.getElementById('miniatures');

function setMemeText() {
  const text = inputText.value;
  spanMemeText.innerText = text;
}

/*
  File Reader method taken from StackOverflow
  Source: https://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form
*/
function setMemeImage() {
  const reader = new FileReader();
  const file = inputFile.files[0];

  reader.onloadend = () => {
    imgMeme.src = reader.result;
  };

  if (file) reader.readAsDataURL(file);
  else imgMeme.src = '';
}

function changeBorder({ target }) {
  if (target.tagName === 'BUTTON') {
    switch (target.id) {
    case 'fire':
      container.style.border = '3px dashed red';
      break;
    case 'water':
      container.style.border = '5px double blue';
      break;
    case 'earth':
      container.style.border = '6px groove green';
      break;

    default:
      break;
    }
  }
}

function setMiniatureMemeImage({ target }) {
  if (target.tagName === 'IMG') imgMeme.src = target.src.slice(-15);
}

function onLoad() {
  inputText.addEventListener('input', setMemeText);
  inputFile.addEventListener('change', setMemeImage);
  bordersContainer.addEventListener('click', changeBorder);
  miniatures.addEventListener('click', setMiniatureMemeImage);
}

window.onload = onLoad;
