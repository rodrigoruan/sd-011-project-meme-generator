const chooseFile = document.querySelector('#meme-insert');
const memeImageContainer = document.querySelector('#meme-image-container');
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');

function addImage() {
  const uploadedImage = chooseFile.files;
  const createImage = document.querySelector('#meme-image');
  createImage.src = URL.createObjectURL(uploadedImage[0]);
}

chooseFile.addEventListener('change', addImage);

//

function addText() {
  const textValue = textInput.value;
  memeText.innerText = textValue;
}

textInput.addEventListener('keyup', addText);

//

function changeBorderFire() {
  memeImageContainer.style.border = '3px dashed red';
}

function changeBorderWater() {
  memeImageContainer.style.border = '5px double blue';
}

function changeBorderEarth() {
  memeImageContainer.style.border = '6px groove green';
}

document.querySelector('#fire').addEventListener('click', changeBorderFire);
document.querySelector('#water').addEventListener('click', changeBorderWater);
document.querySelector('#earth').addEventListener('click', changeBorderEarth);

//

function selectMeme(event) {
  const selectedImg = event.target.src;
  memeImage.src = selectedImg;
}

document.querySelector('#meme-1').addEventListener('click', selectMeme);
document.querySelector('#meme-2').addEventListener('click', selectMeme);
document.querySelector('#meme-3').addEventListener('click', selectMeme);
document.querySelector('#meme-4').addEventListener('click', selectMeme);
