const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const imageMeme = document.querySelector('#meme-image');

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
