// Text e input text
const text = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

// Img e input file
const img = document.querySelector('#meme-image');
const imgInput = document.querySelector('#meme-insert');

// Requisito 1
textInput.addEventListener('keyup', () => {
  text.innerText = textInput.value;
});

// Requisito 2
imgInput.addEventListener('change', () => {
  const file = imgInput.files[0]; // Armazena dentro de "file" o arquivo na posição [0] do imgInput

  if (file) {
    const fileReader = new FileReader(); // Lê o arquivo na variavel "file" como um arquivo DATAURL, podemos definir o source

    fileReader.addEventListener('load', () => {
      img.src = fileReader.result;
    });
    fileReader.readAsDataURL(file);
  }
});
