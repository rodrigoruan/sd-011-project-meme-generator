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
    wrapper.style.border = '3px dashed red';
  });

  btnWater.addEventListener('click', () => {
    wrapper.style.border = '5px double blue';
  });

  btnEarth.addEventListener('click', () => {
    wrapper.style.border = '6px groove green';
  });
};
