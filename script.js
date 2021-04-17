const getText = document.getElementById('text-input');
const printext = document.getElementById('meme-text');

function setText() {
  const item = getText.value;
  printext.innerText = item;
}

window.onload = () => {
  getText.addEventListener('keyup', setText);
};
