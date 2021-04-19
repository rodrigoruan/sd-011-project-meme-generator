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
const memeImageContainer = document.getElementById('meme-image');
const memeFileInput = document.getElementById('meme-insert');

reader.addEventListener('load', () => {
  memeImageContainer.src = reader.result;
});

memeFileInput.addEventListener('change', () => {
  if(memeFileInput.files[0]) {
    reader.readAsDataURL(memeFileInput.files[0]);
  }
});
