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
  const [selectedImage] = memeImageInput.files;
  const memePaddingContainer = 'py-36';

  memeContainer.classList.remove(memePaddingContainer);
  memeImage.src = URL.createObjectURL(selectedImage);
});

const changeBorder = (borderStyle) => {
  const lastItem = memeContainer.classList.length - 1;
  const lastClass = memeContainer.classList[lastItem];
  memeContainer.className = memeContainer.className.replace(lastClass, borderStyle);
};

borderButtonsContainer.addEventListener('click', (event) => {
  const dataAttribute = event.target.dataset.js;

  switch (dataAttribute) {
  case 'fire-button':
    changeBorder('border-red-500');
    break;
  case 'water-button':
    changeBorder('border-blue-500');
    break;
  case 'earth-button':
    changeBorder('border-green-500');
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
