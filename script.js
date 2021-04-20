// Exercício 1 - criar caixa input e mostrar texto input
let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function(){
    let showText = document.getElementById('meme-text');
    showText.innerText=textInput.value;
    console.log(textInput.value);
});

// Exercício 2 - 