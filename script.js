const getInputText = document.querySelector('#text-input');
const getP = document.querySelector('#meme-text');
const getInputImage = document.querySelector('#meme-insert')

function textInputKeyUp() {
  getInputText.addEventListener('keyup', () => {
    const getValue = getInputText.value;
    getP.innerHTML = getValue;
  });
}
textInputKeyUp();

var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
  var output = document.getElementById('meme-image');
  output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
/* FileReader = https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader */
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new */
