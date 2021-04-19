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
