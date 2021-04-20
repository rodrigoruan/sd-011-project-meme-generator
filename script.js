const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');
const memeInsert = document.getElementById('meme-insert');
const buttons = document.getElementById('buttons');

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

buttons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    let border = '';
    switch (event.target.className) {
      case 'fire':
        border = '3px dashed red';
        break;

      case 'water':
        border = '5px double blue';
        break;
        
      default:
        border = '6px groove green';          
        break;
    }
    memeContainer.style.border = border;
  }
});
