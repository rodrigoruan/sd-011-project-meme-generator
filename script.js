const getText = document.getElementById('text-input');
const printext = document.getElementById('meme-text');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const wrapper = document.getElementById('meme-image-container');

function setText() {
  const item = getText.value;
  printext.innerText = item;
}

window.onload = () => {
  getText.addEventListener('keyup', setText);
  btnFire.addEventListener('click', () => {
    wrapper.style.border = '3px dashed rgb(255, 0, 0)';
  });

  btnWater.addEventListener('click', () => {
    wrapper.style.border = '5px double rgb(0, 0, 255)';
  });

  btnEarth.addEventListener('click', () => {
    wrapper.style.border = '6px groove rgb(0, 128, 0)';
  });
};
