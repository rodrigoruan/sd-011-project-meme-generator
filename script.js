// Escrever o texto recebido no input dentro do container
const input = document.querySelector("#text-input");
const text = document.querySelector("#meme-text")
input.addEventListener('keyup', (event) => {
  text.innerText = `${event.target.value}`;
});

