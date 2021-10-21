const memeTextInput = document.querySelector('[data-js="text-input"]');
const memeImageInput = document.querySelector('[data-js="image-input"]');
const memeContainer = document.querySelector('[data-js="meme-container"]');
const memeImage = document.querySelector('[data-js="meme-image"]');
const memeText = document.querySelector('[data-js="meme-text"]');

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
