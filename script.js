const textInputElement = document.getElementById('text-input');
const memeTextElement = document.getElementById('meme-text');

function updateText() {
  memeTextElement.textContent = textInputElement.value;
}

textInputElement.addEventListener('keyup', updateText);
