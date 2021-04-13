const txtInput = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeTxt = document.querySelector('#meme-text');

// 1
txtInput.addEventListener('keyup', function () {
  memeTxt.innerText = txtInput.value;
})
