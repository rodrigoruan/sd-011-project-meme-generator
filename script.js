const inputMeme = document.querySelector('#text-input');
const memeInsert = document.querySelector('#meme-insert');
const photoDiv = document.querySelector('#meme-image-container');
const imageContainer = document.querySelector('#meme-image')
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');

function writeMeme() {
  inputMeme.addEventListener('keyup', () => {    
      const divText = document.querySelector('#meme-text');
      divText.innerText = inputMeme.value;
  });
}

writeMeme();

function showImage(event2) {
  const imageMeme = document.createElement('img');
  imageMeme.classList.add('meme-size');
  imageMeme.src = URL.createObjectURL(event2.target.files[0]);
  imageContainer.appendChild(imageMeme);  
}

memeInsert.addEventListener('change', showImage);

btnFire.addEventListener('click', () => {
  photoDiv.style.border = '3px dashed red' 
})

btnWater.addEventListener('click', () => {
  photoDiv.style.border = '5px double blue' 
})
btnEarth.addEventListener('click', () => {
  photoDiv.style.border = '6px groove green' 
})




  





