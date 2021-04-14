const getInputBox = document.getElementById('text-input');
const getSpanDiv = document.getElementById('meme-text');
const getImgContainer = document.getElementById('meme-image-container');
const getInputButton = document.getElementById('button-input');

function inputText() {
  getInputButton.addEventListener('click', () => {
    const createTxt = document.createElement('p');
    if (getInputBox !== ''){
    createTxt.innerHTML = getInputBox.value;
    getImgContainer.appendChild(createTxt);
    } 
    if (getInputBox.value){
      getInputBox.value = '';
    }
  });
}
inputText()
