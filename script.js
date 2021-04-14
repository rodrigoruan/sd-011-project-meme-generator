const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeUpload = document.querySelector('#meme-upload');

textInput.addEventListener('keyup', function () {
  memeText.innerText = textInput.value;
});

memeInsert.addEventListener('click', function () {
  let uploadedImage = memeUpload.files;
  memeImage.src = URL.createObjectURL(uploadedImage[0]);
});
