const container = document.querySelector('#meme-image-container');

function writeInput() {
  const input = document.querySelector('#text-input');
  const textArea = document.querySelector('#meme-text');

  input.onkeyup = () => {
    textArea.innerText = input.value;
  };
}

function imageFile() {
  const imgInsert = document.querySelector('#meme-insert');
  const image = document.querySelector('#meme-image');

  imgInsert.addEventListener('change', (e) => {
    image.src = URL.createObjectURL(e.target.files[0]);
  });
}

function fireBorder() {
  const fire = document.querySelector('#fire');

  fire.addEventListener('click', () => {
    container.style.border = '3px dashed red';
  });
}

function waterBorder() {
  const water = document.querySelector('#water');

  water.addEventListener('click', () => {
    container.style.border = '5px double blue';
  });
}

function earthBorder() {
  const earth = document.querySelector('#earth');

  earth.addEventListener('click', () => {
    container.style.border = '6px groove green';
  });
}

function preMeme(meme) {
  const image = document.querySelector('#meme-image');

  meme.addEventListener('click', () => {
    image.src = meme.src;
  });
}

window.onload = () => {
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');

  writeInput();
  imageFile();
  fireBorder();
  waterBorder();
  earthBorder();
  waterBorder();
  preMeme(meme1);
  preMeme(meme2);
  preMeme(meme3);
  preMeme(meme4);
};
