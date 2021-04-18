const input = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const text = document.getElementById('meme-text');
const imgInsert = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

input.onkeyup = () => {
  text.innerHTML = input.value;
};

imgInsert.addEventListener('change', (event) => {
  image.src = URL.createObjectURL(event.target.files[0]);
});

fire.addEventListener('click', () => {
  container.style.border = 'dashed 3px red';
});

water.addEventListener('click', () => {
  container.style.border = 'double 5px blue';
});

earth.addEventListener('click', () => {
  container.style.border = 'groove 6px green';
});

window.onload = () => {
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');  

  meme1.addEventListener('click', () => {
    image.src = meme1.src;
  });

  meme2.addEventListener('click', () => {
    image.src = meme2.src;
  });

  meme3.addEventListener('click', () => {
    image.src = meme3.src;
  });

  meme4.addEventListener('click', () => {
    image.src = meme4.src;
  });
}