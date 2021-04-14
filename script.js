const inputText = document.getElementById('text-input');
const inputFile = document.getElementById('meme-insert');
const imgMeme = document.getElementById('meme-image');
const spanMemeText = document.getElementById('meme-text');

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

function onLoad() {
  inputText.addEventListener('input', setMemeText);
  inputFile.addEventListener('change', setMemeImage);
}

window.onload = onLoad;
