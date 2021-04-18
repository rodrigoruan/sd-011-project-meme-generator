const imgContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

// Apresenta o texto que foi inserido no input.
function showText() {
  memeText.innerText = textInput.value;
}
showText();

// Faz upload da imagem.
function showImage() {
  const imgInput = document.getElementById('meme-insert');
  const memeImg = document.getElementById('meme-image');
  const img = document.createElement('img');
  img.src = imgInput.value;
  memeImg.appendChild(img);
  img.setAttribute('width', '250px');
  img.setAttribute('height', '300px');
}
showImage();

// Botões que estilizam a borda do container.
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

fireButton.addEventListener('click', () => {
  imgContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  imgContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  imgContainer.style.border = '6px groove green';
});
