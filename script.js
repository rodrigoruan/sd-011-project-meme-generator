const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');

input.onkeyup = () => {
    text.innerHTML = input.value;
}