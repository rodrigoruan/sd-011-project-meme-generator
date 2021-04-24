const textInput = document.getElementById('text-input');

function textShow() {
  document.getElementById('meme-text').innerHTML = textInput.value;
}

textInput.addEventListener('keyup', textShow);

// referencia: https://www.w3schools.com/jsref/event_onkeyup.asp

const imageShow = document.getElementById('meme-image');

function memeImage() {
 imageShow.src=URL.createObjectURL(event.target.files[0]);
}

// Referência: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
// https://www.w3schools.com/jsref/event_onchange.asp