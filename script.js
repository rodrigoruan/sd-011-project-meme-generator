const idMeme = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeReady = document.getElementById('memes-ready');
const fireButton = document.getElementById('fire');
const earthButton = document.getElementById('earth');
const waterButton = document.getElementById('water');
const memeImageContainer = document.getElementById('meme-image-container');

textInput.oninput = () => {
  if (textInput.value.length < 62) {
    memeText.innerText = textInput.value;
  } else {
    alert('too much characteres');
  }
}

idMeme.addEventListener('change', (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = () => {
    URL.revokeObjectURL(memeImage.src);
  };
});

memeReady.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log(eventTarget);
  if (eventTarget.className === 'ready') {
    memeImage.src = (eventTarget.src);
  }
});

fireButton.addEventListener('click', () => {
  memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

waterButton.addEventListener('click', () => {
  memeImageContainer.style.border = '5px double  rgb(0, 0, 255)';
});

earthButton.addEventListener('click', () => {
  memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
});
