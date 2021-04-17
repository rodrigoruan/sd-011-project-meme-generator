const memeArea = document.getElementById('meme-image-container');
const getTextArea = document.getElementById('text-input');

function getText() {
    let item = document.createElement('h2');
    item.innerHTML = `${getTextArea.value}`
    memeArea.appendChild(texto)
}

