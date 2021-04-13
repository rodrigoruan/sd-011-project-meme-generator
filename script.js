const inputMeme = document.querySelector('#text-input');
const memeInsert = document.querySelector('#meme-insert');
const photoDiv = document.querySelector('#meme-image-container');
const imageContainer = document.querySelector('#meme-image')

function writeMeme() {
  inputMeme.addEventListener('keyup', (event) => {    
      const divText = document.querySelector('#meme-text');
      divText.innerText = inputMeme.value;
  });
}

writeMeme();

memeInsert.addEventListener('change', (upPhoto) => {
  const imageMeme = document.createElement('img');
  const memeURL = upPhoto.target.value;
  imageMeme.setAttribute('src', memeURL)
  imageMeme.classList.add('meme-size')
  imageContainer.appendChild(imageMeme);
})

