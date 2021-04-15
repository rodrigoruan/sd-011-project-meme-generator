// Escrever o texto recebido no input dentro do container
const input = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
input.addEventListener('keyup', (event) => {
  text.innerText = `${event.target.value}`;
});

// Fazendo o load da imagem
// stackoverflow.com/questions/3814231/loading-an-image-to-a-img-from-input-file
function onFileSelected(event) {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  const imgtag = document.getElementById('meme-image');
  imgtag.title = selectedFile.name;

  reader.onload = function loadTheImage(eventinside) {
    imgtag.src = eventinside.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
onFileSelected();
