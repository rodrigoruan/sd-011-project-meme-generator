// global variables
const para = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const file = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const imageBackGr = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const earth = document.getElementById('earth');
const water = document.getElementById('water');

// prints paragraph, called inline
inputText.addEventListener('keyup', (e) => {
  para.innerHTML = e.target.value;
});

file.addEventListener('change', () => {
  if (file.files && file.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(file.files[0]);
  }
});

fire.addEventListener('click', (e) => {
  const propBorder = window.getComputedStyle(fire, null).getPropertyValue('border');
  imageBackGr.style.border = propBorder;
});

earth.addEventListener('click', (e) => {
  const propBorder = window.getComputedStyle(earth, null).getPropertyValue('border');
  imageBackGr.style.border = propBorder;
});

water.addEventListener('click', (e) => {
  const propBorder = window.getComputedStyle(water, null).getPropertyValue('border');
  imageBackGr.style.border = propBorder;
});
