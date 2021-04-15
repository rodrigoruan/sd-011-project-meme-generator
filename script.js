const inputText = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');

inputText.addEventListener('keyup', () => {
  textMeme.innerText = inputText.value;
});