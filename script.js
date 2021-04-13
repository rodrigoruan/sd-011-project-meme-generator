const memeImageContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const buttons = document.getElementById('buttons');

function createButtons() {
  const water = document.createElement('button');
  water.id = 'water';
  water.innerText = 'water';
  water.style.border = '5px double blue';

  const earth = document.createElement('button');
  earth.id = 'earth';
  earth.innerText = 'earth';
  earth.style.border = '6px groove green';

  const fire = document.createElement('button');
  fire.id = 'fire';
  fire.innerText = 'fire';
  fire.style.border = '3px dashed red';

  buttons.appendChild(water);
  buttons.appendChild(earth);
  buttons.appendChild(fire);
}
createButtons();

buttons.addEventListener('click', (event) => {
  let eTarget = event.target;
  if(eTarget.localName === 'button') {
    memeImageContainer.style.border = eTarget.style.border;
  }
});

textInput.addEventListener('keyup', () => {
  if (textInput.value.length <= 60) {
    memeText.innerText = textInput.value;
  }
});

memeInsert.addEventListener('click', () => {
  const imageMeme = document.createElement('img');
  imageMeme.src = 'img1.jpg';
  imageMeme.classList.add('memeSize');
  memeImage.appendChild(imageMeme);
});
