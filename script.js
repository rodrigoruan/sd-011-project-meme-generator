function insertText() {
  const textInput = document.getElementById('text-input');
  const imageText = document.getElementById('meme-text');
  imageText.innerText = textInput.value;
  window.setTimeout(insertText, 10);
}
insertText();
