const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const imgInsert = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');

input.onkeyup = () => {
  text.innerHTML = input.value;
};

imgInsert.addEventListener('change', (event) => {
  image.src = URL.createObjectURL(event.target.files[0]);
});