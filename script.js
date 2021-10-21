const memeTextInput = document.querySelector('[data-js="text-input"]');
const memeImageInput = document.querySelector('[data-js="image-input"]');
const memeContainer = document.querySelector('[data-js="meme-container"]');
const memeImage = document.querySelector('[data-js="meme-image"]');
const memeText = document.querySelector('[data-js="meme-text"]');
const borderButtonsContainer = document.querySelector('[data-js="border-buttons-container"]');
const memesImagesContainer = document.querySelector('[data-js="memes-images"]');

memeTextInput.addEventListener('input', (event) => {
  const memeTextValue = event.target.value;
  memeText.textContent = memeTextValue;
});

memeImageInput.addEventListener('change', () => {
  console.log('estou aqui');
  const [selectedImage] = memeImageInput.files;
  const memePaddingContainer = 'py-36';

  memeContainer.classList.remove(memePaddingContainer);
  memeImage.src = URL.createObjectURL(selectedImage);
});

const addBorderStyle = (borderStyle) => {
  // memeContainer.classList.remove('border-black');
  console.log(memeContainer.className.includes('border-black'));
  console.log(memeContainer.className);
  memeContainer.classList.toggle(borderStyle);
  console.log(memeContainer.className);
};

borderButtonsContainer.addEventListener('click', (event) => {
  const dataAttribute = event.target.dataset.js;
  console.log(dataAttribute);

  switch (dataAttribute) {
  case 'fire-button':
    addBorderStyle('border-red-600');
    break;
  case 'water-button':
    addBorderStyle('border-blue-600');
    break;
  case 'earth-button':
    addBorderStyle('border-green-600');
    break;
  default:
    break;
  }
});

memesImagesContainer.addEventListener('click', (event) => {
  const memePaddingContainer = 'py-36';
  const srcMemeImage = event.target.src;

  if (srcMemeImage) {
    memeContainer.classList.remove(memePaddingContainer);
    memeImage.src = srcMemeImage;
  }
});
