const text = document.querySelector('#text-input');
const imageInput = document.querySelector('#meme-insert');

function showText() {
  const newP = document.querySelector('#meme-text');
  newP.innerText = text.value;
}

text.addEventListener('keyup', showText);

function showImage(event) {
  const newImg = document.querySelector('#meme-image');
  newImg.src = URL.createObjectURL(event.target.files[0]);
}

imageInput.addEventListener('change', showImage);
