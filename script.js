const textInputElement = document.getElementById('text-input');
const memeTextElement = document.getElementById('meme-text');
const memeInsertElement = document.getElementById('meme-insert');
const imageElement = document.getElementById('meme-image');

function updateText() {
  memeTextElement.textContent = textInputElement.value;
}

function loadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', (loadEvent) => {
    imageElement.src = loadEvent.target.result;
  });
  reader.readAsDataURL(file);
  memeTextElement.style.position = 'absolute';
  memeTextElement.style.bottom = '5%';
}

textInputElement.addEventListener('keyup', updateText);
memeInsertElement.addEventListener('change', loadImage);
