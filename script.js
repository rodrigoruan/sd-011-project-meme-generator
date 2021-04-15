const textInput = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');

function writeText(event) {
  memeText.innerText = event.target.value;
}

textInput.addEventListener('keypress', writeText);
