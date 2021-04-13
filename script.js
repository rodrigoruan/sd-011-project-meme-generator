const text = document.querySelector('#text-input');
const imageInput = document.querySelector('#meme-insert');
const container = document.querySelector('#meme-image-container');
const btnsBorder = document.querySelector('#border-btns');

function showText() {
  const newP = document.querySelector('#meme-text');
  newP.innerText = text.value;
}

text.addEventListener('keyup', showText);

function showImage(event) {
  const newImg = document.querySelector('#meme-image');
  container.className = 'default-border';
  newImg.src = URL.createObjectURL(event.target.files[0]);
}

imageInput.addEventListener('change', showImage);

function addBorder(event) {
  const btn = event.target;
  container.className = btn.id;
}

btnsBorder.addEventListener('click', addBorder);
