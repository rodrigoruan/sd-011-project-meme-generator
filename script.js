const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const uploadImage = document.getElementById('meme-insert');

// Cria um parágrafo de texto e insere dentro da div da imagem
function createMemeText() {
  textInput.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
}
createMemeText();

// Cria uma imagem dentro da div parent
function loadFile() {
  uploadImage.addEventListener('change', (event) => {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  });
}
loadFile()