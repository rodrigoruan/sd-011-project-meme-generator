const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

[textInput].forEach((item) => {
  item.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
});
