const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

[textInput].forEach((item) => {
  item.addEventListener('keyup', () => {
    memeText.innerHTML = textInput.value;
  });
});

const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

[memeInsert].forEach((item) => {
  item.addEventListener('change', () => {
    const uploadImage = memeInsert.files;
    memeImage.src = URL.createObjectURL(uploadImage[0]);
  });
});

const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');

[fireButton, waterButton, earthButton].forEach((item) => {
  item.addEventListener('click', () => {
    if (item === fireButton) {
      memeImageContainer.style.border = '3px dashed red';
    } else if (item === waterButton) {
      memeImageContainer.style.border = '5px double blue';
    } else if (item === earthButton) {
      memeImageContainer.style.border = '6px groove green';
    }
  });
});
