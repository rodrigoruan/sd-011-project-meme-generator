const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' && textInput.value) {
    memeText.innerText = textInput.value;
  }
})
