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
