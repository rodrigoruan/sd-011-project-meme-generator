const textInput = document.getElementById('text-input');

function textShow() {
  document.getElementById('meme-text').innerHTML = textInput.value;
}

textInput.addEventListener('keyup', textShow);

// referencia: https://www.w3schools.com/jsref/event_onkeyup.asp
