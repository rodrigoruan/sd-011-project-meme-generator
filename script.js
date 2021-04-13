let input = document.querySelector('#text-input');
let button = document.querySelector('#benjaminButton');
let text = document.querySelector('#meme-text');

function clickButton() {
  button.addEventListener('click', function() {
     text.innerText = input.value;
  })
};
clickButton();

function inputText() {
  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('benjaminButton').click();
    }
  });
};
inputText();


