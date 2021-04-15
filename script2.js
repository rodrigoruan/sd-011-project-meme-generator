const inputText = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImageInput = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const colossiTemplate = document.getElementById('meme-1');
const diasTemplate = document.getElementById('meme-2');
const johnTemplate = document.getElementById('meme-3');
const rinaldiTemplate = document.getElementById('meme-4');

console.log(colossiTemplate);

// retorna texto inserido em text-input
inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});

// converte file em url
function convertImageToUrl() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      imageContainer.setAttribute('src', this.result);
    });

    reader.readAsDataURL(file);
  }
}

// retorna imagem inserida
memeImageInput.addEventListener('change', convertImageToUrl);

// altera propriedades botões fire water earth
fireButton.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green';
});

// aplica imagem selecionada ao fundo
colossiTemplate.addEventListener('click', () => {
  imageContainer.setAttribute('src', 'imgs/meme1.png');
});

diasTemplate.addEventListener('click', () => {
  imageContainer.setAttribute('src', 'imgs/meme2.png');
});

johnTemplate.addEventListener('click', () => {
  imageContainer.setAttribute('src', 'imgs/meme3.png');
});

rinaldiTemplate.addEventListener('click', () => {
  imageContainer.setAttribute('src', 'imgs/meme4.png');
});
