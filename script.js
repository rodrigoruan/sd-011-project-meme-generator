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
  newImage.src = URL.createObjectURL(uploadedImage[0]);
  memeImageContainer.appendChild(newImage);
  memeImageContainer.classList.add('default');
}

function changeImgBorder(borderStyle) {
    if (borderStyle === fireBtn) {
      memeImageContainer.classList.remove('default', 'water', 'earth');
      memeImageContainer.classList.add('fire');
    } else if (borderStyle === waterBtn) {
      memeImageContainer.classList.remove('default', 'fire', 'earth');
      memeImageContainer.classList.add('water');
    } else if (borderStyle === earthBtn) {
      memeImageContainer.classList.remove('default', 'water', 'fire');
      memeImageContainer.classList.add('earth');
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
