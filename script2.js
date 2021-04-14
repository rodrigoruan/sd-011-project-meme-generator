const inputText = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('keydown', function () {
    console.log(inputText.value);
    memeText.innerText = inputText.value;
});