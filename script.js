const memeImageContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const buttons = document.getElementById('buttons');
const preMemeContainer = document.getElementById('pre-meme-container');

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
  const eTarget = event.target;
  if (eTarget.localName === 'button') {
    memeImageContainer.style.border = eTarget.style.border;
  }
});

textInput.addEventListener('keyup', () => {
  if (textInput.value.length <= 60) {
    memeText.innerText = textInput.value;
  }
});

memeInsert.addEventListener('click', () => {
  if (memeImage.firstChild) {
    memeImage.removeChild(memeImage.firstChild);
  }
  const imageMeme = document.createElement('img');
  imageMeme.src = 'img1.jpg';
  imageMeme.classList.add('meme-size');
  memeImage.appendChild(imageMeme);
});

for (let index = 1; index < 5; index += 1) {
  const meme = document.createElement('img');
  meme.id = `meme-${index}`;
  meme.className = 'min-meme';
  meme.src = `./imgs/meme${index}.png`;
  preMemeContainer.appendChild(meme);
}

preMemeContainer.addEventListener('click', (event) => {
  const clickImg = event.target;
  console.log(clickImg.parentElement);
  if (event.target.className === 'min-meme') {
    if (memeImage.firstElementChild) {
      memeImage.firstElementChild.className = 'min-meme';
      preMemeContainer.appendChild(memeImage.firstElementChild);
    }
    clickImg.className = 'meme-size';
    memeImage.appendChild(clickImg);
  }
});

// 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
// O elemento que mostra as miniaturas dos memes deve ser identificado um um id denominado meme-1 para o primeiro meme, meme-2 para o segundo, meme-3 para o terceiro e meme-4 para o quarto.
// As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado imgs com os respectivos nomes meme1.png, meme2.png, meme3.png e meme4.png. Atenção também para o formato das imagens! warning
// As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.

// O que será verificado:

// Será validado se as imagens prontas apresentam o comportamente esperado.
