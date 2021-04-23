const imageContainer = document.getElementById('meme-image-container');

function insertText() {
  const textInput = document.getElementById('text-input');
  const imageText = document.getElementById('meme-text');
  imageText.innerText = textInput.value;
  window.setTimeout(insertText, 10);
}
insertText();

function insertImage() {
  const imagePath = document.getElementById('meme-insert');
  imagePath.addEventListener('change', () => {
    const createImage = document.createElement('img');
    createImage.src = URL.createObjectURL(imagePath.files[0]);
    createImage.id = 'meme-image';
    imageContainer.appendChild(createImage);
  });
}
insertImage();

function fireStyle() {
  const fireButton = document.getElementById('fire');
  fireButton.addEventListener('click', () => {
    imageContainer.style.border = '3px dashed red';
  });
}
fireStyle();

function waterStyle() {
  const waterButton = document.getElementById('water');
  waterButton.addEventListener('click', () => {
    imageContainer.style.border = '5px double blue';
  });
}
waterStyle();

function earthStyle() {
  const earthButton = document.getElementById('earth');
  earthButton.addEventListener('click', () => {
    imageContainer.style.border = '6px groove green';
  });
}
earthStyle();

function memeExample() {
  const memeTemplate = document.querySelector('.meme-template').children;
  for (let index = 0; index < memeTemplate.length; index += 1) {
    memeTemplate[index].addEventListener('click', (event) => {
      if (imageContainer.children.length > 1) {
        imageContainer.removeChild(imageContainer.lastElementChild);
      }
      const selectedMeme = event.target.cloneNode(true);
      selectedMeme.id = 'meme-image';
      imageContainer.appendChild(selectedMeme);
    });
  }
}
memeExample();
