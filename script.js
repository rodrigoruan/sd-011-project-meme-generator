const textInputs = [
  {
    field: document.getElementById('text-input'),
    target: document.getElementById('meme-text'),
  },
  {
    field: document.getElementById('text-input-bottom'),
    target: document.getElementById('meme-text-bottom'),
  },
];

for (let i = 0; i < textInputs.length; i += 1) {
  textInputs[i].field.addEventListener('input', () => {
    textInputs[i].target.innerHTML = textInputs[i].field.value;
  });
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
  if (memeFileInput.files[0]) {
    reader.readAsDataURL(memeFileInput.files[0]);
  }
});

const predefinedMemes = document.getElementsByClassName('mini');

for (let i = 0; i < predefinedMemes.length; i += 1) {
  predefinedMemes[i].addEventListener('click', () => {
    changeCurrentImage(predefinedMemes[i].src);
  });
}

const borderOptions = document.querySelectorAll('#border-options > button');
const memeContainer = document.getElementById('meme-image-container');
let currentBorderStyle = 'border-standard';

function changeBorderStyle(newStyle) {
  memeContainer.classList.remove(currentBorderStyle);

  memeContainer.classList.add(newStyle);
  currentBorderStyle = newStyle;
}

for (let i = 0; i < borderOptions.length; i += 1) {
  borderOptions[i].addEventListener('click', () => {
    changeBorderStyle(borderOptions[i].className);
  });
}
