const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');

[textInput].forEach((item) => {
  item.addEventListener('keyup', () => {
    memeText.innerHTML = textInput.value;
  });
});

[memeInsert].forEach((item) => {
  item.addEventListener('change', () => {
    const uploadImage = memeInsert.files;
    memeImage.style.backgroundImage = `url(${URL.createObjectURL(uploadImage[0])})`;
  });
});
