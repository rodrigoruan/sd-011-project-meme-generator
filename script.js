const getText = document.getElementById('text-input');
const printext = document.getElementById('meme-text');
const btnBorder = document.getElementById('btns');
const wrapper = document.getElementById('meme-image-container');

function setText() {
  const item = getText.value;
  printext.innerText = item;
}

function changeBorder(event) {
  const evento = event.target;
  if (evento.tagName === 'BUTTON') {
    switch (evento.id) {
    case 'fire':
      wrapper.style.border = '3px dashed red';
      break;
    case 'water':
      wrapper.style.border = '5px double blue';
      break;
    case 'earth':
      wrapper.style.border = '6px groove green';
      break;
    default:
      break;
    }
  }
}

window.onload = () => {
  getText.addEventListener('keyup', setText);
  btnBorder.addEventListener('click', changeBorder);
};
