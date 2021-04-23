const imageContainer = document.getElementById('meme-image-container');
const imagePath = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const imageDisplay = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const imageText = document.getElementById('meme-text');

function insertText() {
  textInput.addEventListener('keyup', () => {
    imageText.innerHTML = textInput.value;
  });
  imageText.innerHTML = textInput.value;
}
insertText();

function insertImage() {
  imagePath.addEventListener('change', () => {
    imageDisplay.src = URL.createObjectURL(imagePath.files[0]);
  });
}
insertImage();

function fireStyle() {
  fireButton.addEventListener('click', () => {
    imageContainer.className = 'fire';
  });
}
fireStyle();

function waterStyle() {
  waterButton.addEventListener('click', () => {
    imageContainer.className = 'water';
  });
}
waterStyle();

function earthStyle() {
  earthButton.addEventListener('click', () => {
    imageContainer.className = 'earth';
  });
}
earthStyle();

function memeExample() {
  const memeOptions = document.getElementsByClassName('meme-example');
  for (let index = 0; index < memeOptions.length; index += 1) {
    memeOptions[index].addEventListener('click', () => {
      imageDisplay.src = memeOptions[index].src;
    });
  }
}
memeExample();
