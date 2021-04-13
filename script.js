const inputBox = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const outputImage = document.getElementById('meme-image');
const locateFileButton = document.getElementById('locateFile');
const memeTemplate = document.getElementsByClassName('meme-templates');
const memePNG = document.getElementById('meme-png');

function textInBox() {
  memeText.innerText = inputBox.value;
}

inputBox.addEventListener('keyup', textInBox);

function imageInBox(event) {
  const x = document.createElement('img');
  x.src = URL.createObjectURL(event.target.files[0]);
  outputImage.appendChild(x);
}

inputImage.addEventListener('change', imageInBox);

locateFileButton.addEventListener('click', () => {
  inputImage.click();
});

function useTemplate() {
  for (let i = 0; i < memeTemplate.length; i += 1) {
    memeTemplate[i].addEventListener('click', () => {
      memePNG.removeAttribute('hidden');
      const x = memePNG;
      x.src = memeTemplate[i].src;
    });
  }
}
useTemplate();
