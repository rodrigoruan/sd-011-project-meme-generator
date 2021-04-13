const inputBox = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const outputImage = document.getElementById('meme-image');

function textInBox() {
  memeText.innerText = inputBox.value;
}

inputBox.addEventListener('keypress', textInBox);

function imageInBox(event) {
  const x = document.createElement('img');
  x.src = URL.createObjectURL(event.target.files[0]);
  outputImage.appendChild(x);
}

inputImage.addEventListener('change', imageInBox);
