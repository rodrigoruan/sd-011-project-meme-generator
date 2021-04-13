const inputBox = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function transferText(event) {
  memeText.innerText = event.target.value;
}
inputBox.addEventListener('keyup', transferText);
