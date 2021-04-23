function addText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
}

function addImage() {
  const image = document.querySelector('img');
  const file = document.getElementsByTagName('input[type=file]'.files[0]);
  img.src = window.URL.createObjectURL(file);
}
