let input = document.querySelector('#text-input');
let button = document.querySelector('#benjaminButton');
let text = document.querySelector('#meme-text');
let newImage = document.querySelector('#meme-insert');
let localImage = document.querySelector('#meme-image');

function clickButton() {
  button.addEventListener('click', function() {
     text.innerText = input.value;
  })
};
clickButton();

function inputText() {
  input.addEventListener('keyup', function(event) {
      document.getElementById('benjaminButton').click();
  });
};
inputText();

function addImage() {
  newImage.addEventListener('change', function(event) {
    localImage.src = URL.createObjectURL(event.target.files[0]);
  })
}
addImage();