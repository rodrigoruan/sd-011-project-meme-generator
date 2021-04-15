// Escrever o texto recebido no input dentro do container
const input = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
input.addEventListener('keyup', (event) => {
  text.innerText = `${event.target.value}`;
});

// Fazendo o load da imagem
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function loadImage() {
  const loadedImage = document.querySelector('#meme-insert');
  loadedImage.addEventListener('change', (event) => {
    const output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  });
}
loadImage();

const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

const image = document.querySelector('#meme-image');

fireButton.addEventListener('click', () => {
  image.className = 'fire';
});

waterButton.addEventListener('click', () => {
  image.className = 'water';
});

earthButton.addEventListener('click', () => {
  image.className = 'earth';
});
