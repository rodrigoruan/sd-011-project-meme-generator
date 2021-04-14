// shows text
function printText() {
  const p = document.getElementById('meme-text');
  const input = document.getElementById('text-input');

  input.addEventListener('keyup', () => {
    console.log(input.value);
    p.innerText = input.value;
  });

}
printText();