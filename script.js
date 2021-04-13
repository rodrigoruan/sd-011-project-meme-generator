const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

// Font: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
memeInsert.addEventListener('input', (event) => {
  const output = memeImage;
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
});
