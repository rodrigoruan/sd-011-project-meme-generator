const inputBox = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const outputImage = document.getElementById('meme-image');
const locateFileButton = document.getElementById('locateFile');
const memeTemplate = document.getElementsByClassName('meme-templates');

function textInBox() {
  memeText.innerText = inputBox.value;
}

inputBox.addEventListener('keyup', textInBox);

function imageInBox(event) {
  const x = outputImage;
  x.src = URL.createObjectURL(event.target.files[0]);
}

inputImage.addEventListener('change', imageInBox);

locateFileButton.addEventListener('click', () => {
  inputImage.click();
});

function useTemplate() {
  for (let i = 0; i < memeTemplate.length; i += 1) {
    memeTemplate[i].addEventListener('click', () => {
      const x = outputImage;
      x.setAttribute('src', memeTemplate[i].src);
    });
  }
}
useTemplate();
