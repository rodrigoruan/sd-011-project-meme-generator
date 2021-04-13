const inputText = document.querySelector('#text-input');
const inputFile = document.querySelector('#meme-insert');
const memeContainerText = document.querySelector('#meme-text');
const memeContainerImg = document.querySelector('#meme-image');

inputText.addEventListener('keyup', () => {
  memeContainerText.innerText = inputText.value;
});

inputFile.addEventListener('input', () => {
  const urlImage = URL.createObjectURL(inputFile.files[0]);
  memeContainerImg.setAttribute('src', urlImage);
});
