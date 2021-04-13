const getInputText = document.querySelector('#text-input');
const getP = document.querySelector('#meme-text');
const getContainer = document.querySelector('#meme-image-container');
const getFire = document.querySelector('#fire');
const getWater = document.querySelector('#water');
const getEarth = document.querySelector('#earth');

function textInputKeyUp() {
  getInputText.addEventListener('keyup', () => {
    const getValue = getInputText.value;
    getP.innerHTML = getValue;
  });
}
textInputKeyUp();

function border(style) {
  getContainer.style.border = style;
}
border('1px solid black');

loadFile = (event) => {
  const reader = new FileReader();
  reader.onload = () => {
    const output = document.getElementById('meme-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
/* resolver o exercício = https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded */
/* FileReader = https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader */
/* operator new = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new */
/* readAsDataURL = https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL */

function addBorderButtons() {
  getFire.addEventListener('click', () => {
    border('3px dashed red');
  });
  getWater.addEventListener('click', () => {
    border('5px double blue');
  });
  getEarth.addEventListener('click', () => {
    border('6px groove green');
  });
}
addBorderButtons();
