const inputMeme = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');

function writeMeme() {
  inputMeme.addEventListener('keyup', () => {
    const textArea = document.querySelector('#meme-text');
    textArea.innerText = inputMeme.value;
  });
}

writeMeme();

inputImg.addEventListener('change', (e) => {
  const imgArea = document.querySelector('#meme-image'); // pai
  const memeImg = document.createElement('img'); // cria tag
  memeImg.setAttribute('src', e.target.value);
  memeImg.classList.add('img');
  imgArea.appendChild(memeImg);
});
