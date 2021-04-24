const textInput = document.getElementById('text-input');

function textShow() {
  document.getElementById('meme-text').innerHTML = textInput.value;
}

textInput.addEventListener('keyup', textShow);

// referencia: https://www.w3schools.com/jsref/event_onkeyup.asp

const imageShow = document.getElementById('meme-image');

function memeImage() {
  imageShow.src = URL.createObjectURL(event.target.files[0]);
}

// Referência: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
// https://www.w3schools.com/jsref/event_onchange.asp

const memeContainer = document.getElementById('meme-image-container');

function borderRed() {
  memeContainer.style.border = '3px dashed red';
}

const buttonRed = document.getElementById('fire');

buttonRed.addEventListener('click', borderRed);

function borderBlue() {
  memeContainer.style.border = '5px double blue';
}

const buttonBlue = document.getElementById('water');

buttonBlue.addEventListener('click', borderBlue);

function borderGreen() {
  memeContainer.style.border = '6px groove green';
}

const buttonGreen = document.getElementById('earth');

buttonGreen.addEventListener('click', borderGreen);

function meme1() {
  const buttonMeme1 = document.getElementById('meme-1');
  imageShow.src = buttonMeme1.src;
}

function meme2() {
  const buttonMeme2 = document.getElementById('meme-2');
  imageShow.src = buttonMeme2.src;
}

function meme3() {
  const buttonMeme3 = document.getElementById('meme-3');
  imageShow.src = buttonMeme3.src;
}

function meme4() {
  const buttonMeme4 = document.getElementById('meme-4');
  imageShow.src = buttonMeme4.src;
}
