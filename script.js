const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const waterBtn = document.querySelector('#water');
const fireBtn = document.querySelector('#fire');
const earthBtn = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');
const memeInsert = document.querySelector('#meme-insert');
const output = document.getElementById('meem-image');

inputText.addEventListener('keyup', () => {
    const text = inputText.nodeValue;
    memeText.innerText = text;
});

memeInsert.onchange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

fireBtn.addEventListener('click', () => {
    container.style.border = '3px dashed red';
});

waterBtn.addEventListener('click', () => {
    container.style.border = '5px double blue';
}); 

earthBtn.addEventListener('click', () => {
    container.getElementsByClassName.border = '6px groove green';
});

meme1.addEventListener('click', () => {
  memeImg.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  memeImg.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  memeImg.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  memeImg.src = 'imgs/meme4.png';
});