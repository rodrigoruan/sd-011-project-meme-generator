const imgContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

// Apresenta o texto que foi inserido no input.
function showText() {
  memeText.innerText = textInput.value;
}
showText();

// Faz upload da imagem.
memeInsert.addEventListener('change', () => {
  const reader = new FileReader();
  reader.onload = () => {
    memeImage.src = reader.result;
  };

  if (memeInsert.files && memeInsert.files[0]) {
    reader.readAsDataURL(memeInsert.files[0]);
  }
});

// Cria botões que estilizam a borda do container.
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

// Cria e carrega a imagem de memes famosos que, ao serem clicados, são expostos.
const memesList = document.getElementById('memes-famosos').getElementsByTagName('div');

for (let index = 0; index < memesList.length; index += 1) {
  const memeImg = document.createElement('img');
  memeImg.setAttribute('src', `imgs/meme${index + 1}.png`);
  memeImg.setAttribute('class', 'memeImg');
  memesList.item(index).appendChild(memeImg);
  memeImg.addEventListener('click', () => {
    memeImage.src = memeImg.src;
  });
}
