const input = document.getElementById('text-input');
const container = document.getElementById('meme-image-container')
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

fire.addEventListener('click' , () => {
  container.style.border = 'dashed 3px red';
});

water.addEventListener('click', () => {
  container.style.border = 'double 5px blue';
});

earth.addEventListener('click', () => {
  container.style.border = 'groove 6px green';
});
