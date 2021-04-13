let memeText = document.getElementById('text-input');
let memeTextDiv = document.getElementById('meme-text');

function createMemeText() {
  const newP = document.createElement('p');
  memeText.addEventListener('keyup', () => {
    newP.innerText = memeText.value;
    memeTextDiv.appendChild(newP)
  });
}
createMemeText()
