const container = document.querySelector('#meme-image-container');
const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
// const imageMeme = document.querySelector('#meme-image');
const imageMeme = document.createElement('img');
imageMeme.id = 'meme-image';
container.appendChild(imageMeme);
const borderBtns = document.getElementsByClassName('border-buttons');

function inputToText() {
  textInput.addEventListener('keyup', () => {
    const text = textInput.value;
    textMeme.innerText = text;
  });
}

inputToText();

function inputToImage() {
  imageInput.addEventListener('change', () => {
    const image = imageInput.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      imageMeme.src = fileReader.result;
    };
    fileReader.readAsDataURL(image);
  });
}

inputToImage();

function changeBorders() {
  for (let index = 0; index < borderBtns.length; index += 1) {
    const button = borderBtns[index];
    button.addEventListener('click', () => {
      console.log(container);
      container.className = button.id;
    });
  }
}

changeBorders();
