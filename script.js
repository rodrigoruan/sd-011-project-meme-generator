const txtInput = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeTxt = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const imgInput = document.querySelector('#meme-insert');

// 1
txtInput.addEventListener('keyup', function () {
  memeTxt.innerText = txtInput.value;
})

// 2
function setMemeImage() {
  const reader = new FileReader();
  const file = imgInput.files[0];

  reader.onloadend = () => {
    memeImg.src = reader.result;
  };

  if(file) reader.readAsDataURL(file);
  else memeImg.src = '';
}

function onLoad() {
  imgInput.addEventListener('change', setMemeImage);
}

window.onload = onLoad;

//6
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');

fireBtn.addEventListener('click', function () {
  container.style.border = '3px dashed red';
  fireBtn.style.backgroundColor = 'red';
});

waterBtn.addEventListener('click', function () {
  container.style.border = '5px double blue';
  waterBtn.style.backgroundColor = 'blue';
});

earthBtn.addEventListener('click', function () {
  container.style.border = '6px groove green';
  earthBtn.style.backgroundColor = 'green';
})