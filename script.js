const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeUploadBtn = document.querySelector('#meme-upload');
const memeInsertBtn = document.querySelector('#meme-insert');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');

function insertImage() {
  const uploadedImage = memeUploadBtn.files;
  const newImage = document.createElement('img');
  newImage.alt = 'Imagem recebida por upload para fazer memes';
  newImage.id = 'meme-image';
  newImage.classList.add('default');
  newImage.src = URL.createObjectURL(uploadedImage[0]);
  memeImageContainer.appendChild(newImage);
}

function changeImgBorder(borderStyle) {
  const memeImage = document.querySelector('#meme-image');
  if (memeImage !== null) {
    if (borderStyle === fireBtn) {
      memeImage.classList.remove('default', 'water', 'earth');
      memeImage.classList.add('fire');
    } else if (borderStyle === waterBtn) {
      memeImage.classList.remove('default', 'fire', 'earth');
      memeImage.classList.add('water');
    } else if (borderStyle === earthBtn) {
      memeImage.classList.remove('default', 'water', 'fire');
      memeImage.classList.add('earth');
    }
  }
}

[memeInsertBtn, fireBtn, waterBtn, earthBtn].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item === memeInsertBtn) {
      insertImage();
    } else if (item === fireBtn) {
      changeImgBorder(fireBtn);
    } else if (item === waterBtn) {
      changeImgBorder(waterBtn);
    } else if (item === earthBtn) {
      changeImgBorder(earthBtn);
    }
  });
});

textInput.addEventListener('keyup', function () {
  memeText.innerText = textInput.value;
});
