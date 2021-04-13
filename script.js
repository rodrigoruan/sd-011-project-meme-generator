const inputMeme = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');
const container = document.querySelector('#meme-image-container');

inputMeme.addEventListener('keyup', () => {
  const textArea = document.querySelector('#meme-text');
  textArea.innerText = inputMeme.value;
});

// 2
inputImg.addEventListener('change', (e1) => {
  const imgArea = document.querySelector('#meme-image'); // pai
  imgArea.innerHTML = '';
  const memeImg = document.createElement('img'); // cria tag
  memeImg.setAttribute('src', URL.createObjectURL(e1.target.files[0]));
  memeImg.classList.add('img');
  imgArea.appendChild(memeImg);
});

// 6

function apBorder(e) {
  if (e.target.id === 'fire') {
    container.style.border = '3px dashed red';
    console.log('teste');
  } else if (e.target.id === 'water') {
    container.style.border = 'double 5px blue';
    console.log('teste2');
  } else if (e.target.id === 'earth') {
    container.style.border = 'groove 6px green';
    console.log('teste3');
  }
}

function changeBorder() {
  const buttons = document.getElementById('buttons');
  buttons.addEventListener('click', apBorder);
}

changeBorder();
