function insertText() {
  const textInput = document.getElementById('text-input');
  const imageText = document.getElementById('meme-text');
  imageText.innerText = textInput.value;
  window.setTimeout(insertText, 10);
}
insertText(); 



function insertImage() {
  const imagePath = document.getElementById('meme-insert');
  const imageContainer = document.getElementById('meme-image-container');
  imagePath.addEventListener('change', () => {
    const createImage = document.createElement('img');
    createImage.src = URL.createObjectURL(imagePath.files[0]);
    createImage.id = 'meme-image';
    imageContainer.appendChild(createImage);
  });
}
insertImage();
