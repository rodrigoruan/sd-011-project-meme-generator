const textInput = document.getElementById('text-input').value;

function textShow() {
  document.getElementById('meme-text').innerHTML = textInput;
}

textInput.addEventListener('keyup', textShow);

// referencia: https://www.w3schools.com/jsref/event_onkeyup.asp
