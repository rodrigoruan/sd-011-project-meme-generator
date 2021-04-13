const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');


textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

memeInsert.addEventListener('click', () => {
  const imageMeme = document.createElement('img');
  imageMeme.src = 'img1.jpg';
  imageMeme.classList.add('memeSize');
  memeImage.appendChild(imageMeme);
});
