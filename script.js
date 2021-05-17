const input = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const buttonSendText = document.querySelector('#send-text');

buttonSendText.addEventListener('click', () => {
  memeText.innerText = input.value;
});
