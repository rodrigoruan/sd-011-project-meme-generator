const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

function showText() {
  memeText.innerText = textInput.value;
}
