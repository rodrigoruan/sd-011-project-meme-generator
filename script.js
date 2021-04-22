function addText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
}

function addImage() {
  let image = document.querySelector('img');
  let file = document.querySelector('input[type=file]'.files[0]);
  img.src = window.URL.createObjectURL(file);
}
window.load = function addEvents() {

};
