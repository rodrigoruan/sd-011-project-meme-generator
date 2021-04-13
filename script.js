const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.onkeyup = function createMemeText() {
  memeText.innerText = textInput.value;
};
