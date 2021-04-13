const inputText = document.querySelector('#text-input');
const memeContainerText = document.querySelector('#meme-text');

inputText.addEventListener('keyup', () => {
  memeContainerText.innerText = inputText.value;
});
