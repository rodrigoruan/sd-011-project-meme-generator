const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const imageMeme = document.querySelector('#meme-image');

function inputToText() {
  textInput.addEventListener('blur', () => {
    const text = textInput.value;
    textMeme.innerText = text;
  });
}

inputToText();

function inputToImage() {
  imageInput.addEventListener('input', () => {
    const image = URL.createObjectURL(imageInput.files[0]);
    imageMeme.src = image;
  });
}

inputToImage();
