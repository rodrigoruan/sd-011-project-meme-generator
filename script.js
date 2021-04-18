const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');

function inputToText() {
  textInput.addEventListener('blur', () => {
    const text = textInput.value;
    textMeme.innerText = text;
  });
}

inputToText();
