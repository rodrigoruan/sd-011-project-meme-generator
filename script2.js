const inputText = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImageInput = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image');

// retorna texto inserido em text-input
inputText.addEventListener('keyup', function () {
    memeText.innerText = inputText.value;
});

// retorna imagem inserida
memeImageInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            imageContainer.setAttribute('src', this.result);
        })

        reader.readAsDataURL(file);
    }
})