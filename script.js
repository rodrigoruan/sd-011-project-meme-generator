const getInputBox = document.getElementById('text-input');
const getSpanDiv = document.getElementById('meme-text');

getInputBox.addEventListener('input', () => {
  getSpanDiv.innerText = getInputBox.value;
});
