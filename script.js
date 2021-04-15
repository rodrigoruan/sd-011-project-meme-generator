const para = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
console.log(para, inputText);

// prints paragraph, called inline
function getParagraph() {
  console.log(inputText.value);
  para.innerHTML = inputText.value;
}
