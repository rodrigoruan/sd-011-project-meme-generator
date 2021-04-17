const getText = document.getElementById('text-input');
const printext = document.getElementById('meme-text');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const wrapper = document.getElementById('meme-image-container');
const view = document.getElementById('meme-image');
const memeIgmSet = document.getElementById('meme-insert');
const minImg = document.getElementById('miniaturas');

function setText() {
  const item = getText.value;
  printext.innerText = item;
}

// Fonte stackoverflow
function setImage() {
  const fileUpload = document.getElementById('meme-insert').files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    view.src = reader.result;
  };
  if (fileUpload) {
    reader.readAsDataURL(fileUpload);
  } else {
    view.src = '';
  }
}

window.onload = () => {
  getText.addEventListener('keyup', setText);
  memeIgmSet.addEventListener('change', setImage);
  btnFire.addEventListener('click', () => {
    wrapper.style.border = '3px dashed rgb(255, 0, 0)';
  });
  btnWater.addEventListener('click', () => {
    wrapper.style.border = '5px double rgb(0, 0, 255)';
  });
  btnEarth.addEventListener('click', () => {
    wrapper.style.border = '6px groove rgb(0, 128, 0)';
  });
  minImg.addEventListener('click', (event) => {
    let srcUr = '';
    const eve = event.target;
    srcUr = eve.src;
    view.src = srcUr;
  });
};
