const text = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

textInput.addEventListener('keyup', () => {
  text.innerText = textInput.value;
});