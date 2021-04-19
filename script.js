const textInputs = [
  {
    field: document.getElementById('text-input'),
    target: document.getElementById('meme-text'),
  },
  {
    field: document.getElementById('text-input-bottom'),
    target: document.getElementById('meme-text-bottom'),
  }
]

function insertTextFromInput(inputElement, targetElement) {
  targetElement.innerText = inputElement.value;
}

for (let textInput of textInputs) {
  textInput.field.addEventListener('input', (e) => {
    insertTextFromInput(e.target, textInput.target);
  })
}

const reader = new FileReader();
const memeImage = document.getElementById('meme-image');
const memeFileInput = document.getElementById('meme-insert');

function changeCurrentImage(src) {
  memeImage.src = src;
}

reader.addEventListener('load', () => {
  changeCurrentImage(reader.result);
});

memeFileInput.addEventListener('change', () => {
  if(memeFileInput.files[0]) {
    reader.readAsDataURL(memeFileInput.files[0]);
  }
});

const predefinedMemes = document.getElementsByClassName('mini');

for (let predef of predefinedMemes) {
  predef.addEventListener('click', () => {
    changeCurrentImage(predef.src);
  })
}

const borderOptions = document.querySelectorAll('#border-options > button');
const memeContainer = document.getElementById('meme-image-container');
let currentBorderStyle = 'border-standard';

for (let opt of borderOptions) {
  opt.addEventListener('click', () => {
    memeContainer.classList.remove(currentBorderStyle);

    currentBorderStyle = opt.className;
    memeContainer.classList.add(currentBorderStyle);
  })
}