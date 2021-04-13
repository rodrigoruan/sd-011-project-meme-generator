const inputText = document.querySelector('#text-input');
const inputFile = document.querySelector('#meme-insert');
const memeContainerText = document.querySelector('#meme-text');
const memeContainerImg = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const imgMeme = document.querySelector('#img-memes');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const lintChato = 'meme-image-container';

inputText.addEventListener('keyup', () => {
  memeContainerText.innerText = inputText.value;
});

inputFile.addEventListener('input', () => {
  const urlImage = URL.createObjectURL(inputFile.files[0]);
  memeContainerImg.setAttribute('src', urlImage);
});

btnFire.addEventListener('click', () => {
  if (memeContainer.classList !== null) memeContainer.removeAttribute('class');
  memeContainer.classList.add('fire', lintChato);
});

btnWater.addEventListener('click', () => {
  if (memeContainer.classList !== null) memeContainer.removeAttribute('class');
  memeContainer.classList.add('water', lintChato);
});

btnEarth.addEventListener('click', () => {
  if (memeContainer.classList !== null) memeContainer.removeAttribute('class');
  memeContainer.classList.add('earth', lintChato);
});

function indexOfNode(element) {
  const index = [].indexOf.call(element.parentNode.childNodes, element);
  return index;
}

function setMeme(event) {
  const elementMeme = event.target;
  const elementIndex = indexOfNode(elementMeme);
  const urlMeme = elementMeme.parentNode.childNodes[elementIndex].getAttribute(
    'src',
  );
  console.log(urlMeme);
  memeContainerImg.setAttribute('src', urlMeme);
}

imgMeme.addEventListener('click', setMeme);
