const text = document.querySelector('#text-input');
const textInput = document.querySelector('#meme-image-container');
const textBtn = document.querySelector('#text-btn');

function showText() {
  const newP = document.createElement('p');
  newP.innerText = text.value;
  newP.id = 'meme-text';
  textInput.appendChild(newP);
}

function showTextOnEnter(event) {
  if (event.keyCode === 13) {
    showText();
  }
}

textBtn.addEventListener('click', showText);
text.addEventListener('keyup', showTextOnEnter);
