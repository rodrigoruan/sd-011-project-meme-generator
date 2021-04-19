const title = document.getElementById('title');
const inputTextMeme = document.getElementById('text-input');
const buttonTextMeme = document.getElementById('insert-text');
const textMeme = document.getElementById('meme-text');
// const imgMeme = document.getElementById('meme-img');
// const inputImgMeme = document.getElementById('img-input');
// const buttonImgMeme = document.getElementById('insert-img');
// const memeContainer = document.getElementById('meme-image-container');

title.innerText = 'Meme Generator';
buttonTextMeme.innerText = 'Inserir texto';
inputTextMeme.maxLength = '60';
// buttonImgMeme.innerText = 'Inserir imagem';

// inputImgMeme.style = 'display'

function insertText() {
  textMeme.innerText = inputTextMeme.value;
}

// function insertImage(event) {

//   // uploadImage.src = inputImgMeme.innerText
//   imgMeme.src = URL.createObjectURL(event.target.inputImgMeme.value)
//   im

// }

const loadFile = function (event) {
  const output = document.getElementById('meme-img');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};

buttonTextMeme.addEventListener('click', insertText);
// inputImgMeme.addEventListener('change', insertImage)
