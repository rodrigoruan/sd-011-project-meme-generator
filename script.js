// global variables
const para = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const file = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');

// prints paragraph, called inline
inputText.addEventListener('keyup', (e) => {
  para.innerHTML = e.target.value;
});

file.addEventListener('change', () => {
  if (file.files && file.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.setAttribute('src', e.target.result);
      image.style.width = '500px';
      image.style.height = '500px';
    };
    reader.readAsDataURL(file.files[0]);
  }
});
