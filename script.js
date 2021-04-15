// global variables
const para = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const file = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const imageBackGr = document.getElementById('meme-image-container');
const btns = document.getElementById('btns-container');
const memes = document.getElementById('memes-wraper');

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

btns.addEventListener('click', (e) => {
  const propBorder = window.getComputedStyle(e.target, null).getPropertyValue('border');
  imageBackGr.style.border = propBorder;
});

memes.addEventListener('click', (e) => {
  image.src = e.target.src;
});
