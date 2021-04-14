const inputText = document.getElementById('text-input');
const spanMemeText = document.getElementById('meme-text');

function setMemeText() {
  const text = inputText.value;
  spanMemeText.innerText = text;
}

function onLoad() {
  inputText.addEventListener('input', setMemeText);
}

window.onload = onLoad;
