const testInput = document.querySelector('#text-input');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const loadFile = document.querySelector('#meme-insert');
const getContainer = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const getMeme1 = document.querySelector('#meme-1');
const getMeme2 = document.querySelector('#meme-2');
const getMeme3 = document.querySelector('#meme-3');
const getMeme4 = document.querySelector('#meme-4');

// Fonte: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
loadFile.onchange = (event) => {
  const reader = new FileReader();
  reader.onload = () => {
    memeImage.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

testInput.addEventListener('keyup', () => {
  const getValue = testInput.value;
  memeText.innerHTML = getValue;
});

function border(style) {
  getContainer.style.border = style;
}
border('1px solid black');

fire.addEventListener('click', () => { border('3px dashed red'); });
water.addEventListener('click', () => { border('5px double blue'); });
earth.addEventListener('click', () => { border('6px groove green'); });

getMeme1.addEventListener('click', () => { memeImage.src = getMeme1.src; });
getMeme2.addEventListener('click', () => { memeImage.src = getMeme2.src; });
getMeme3.addEventListener('click', () => { memeImage.src = getMeme3.src; });
getMeme4.addEventListener('click', () => { memeImage.src = getMeme4.src; });
