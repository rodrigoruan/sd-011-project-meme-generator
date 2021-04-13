const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const uploadImage = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const waterBtn = document.querySelector('#water');
const fireBtn = document.querySelector('#fire');
const earthBtn = document.querySelector('#earth');

inputText.addEventListener('keyup', () => {
  let text = inputText.value;
  memeText.innerText = text;
});

const loadFile = (event) => {
  const reader = new FileReader();
  reader.onload = () => {
    const output = document.getElementById('meme-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

earthBtn.addEventListener('click', () => {
  container.style.border = '6px groove green';
});

waterBtn.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

fireBtn.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});
