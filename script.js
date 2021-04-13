// const inputMeme = document.querySelector('#text-input');

// function writeMeme() {
//   inputMeme.addEventListener('keyup', (e) => {
//     if (e.keyCode === 13) {
//       const textArea = document.querySelector('#meme-text');
//       textArea.innerText = inputMeme.value;
//       inputMeme.value = '';
//     }
//   });
// }

// writeMeme();

const memeImageContainer = document.querySelector('#meme-image-container');
const divText = document.querySelector('#div-text');
const textInput = document.querySelector('#text-input');

function writeMeme() {
  textInput.addEventListener('keyup', (e) => {
    if (e.keycode === 13) { 
      console.log('teste');
    }
  }) 
}

writeMeme();