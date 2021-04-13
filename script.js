const chooseFile = document.querySelector('#meme-image');
const memeImageContainer = document.querySelector('#meme-image-container');

function addImage() {
  const uploadedImage = chooseFile.files;
  const createImage = document.createElement('img');
  createImage.id = 'image';
  createImage.src = URL.createObjectURL(uploadedImage[0]);

  memeImageContainer.removeChild(memeImageContainer.lastElementChild);

  memeImageContainer.appendChild(createImage);
}

chooseFile.addEventListener('change', addImage);
