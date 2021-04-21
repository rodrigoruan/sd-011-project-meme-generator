// Exercício 1 - criar caixa input e mostrar texto input
let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function(){
    let showText = document.getElementById('meme-text');
    showText.innerText=textInput.value;
    showText.style.position='absolute';
    showText.style.marginTop='-75px';
    showText.style.marginLeft='175px';
}); 

// Exercício 2
let input = document.getElementById('meme-insert');
input.addEventListener('input', function(){
    document.getElementById('meme-image').src = URL.createObjectURL(document.getElementById('meme-insert').files[0])
});

// Exercício 3
let containerImagem = document.getElementById('meme-image-container');
containerImagem.style.backgroundColor='white';
containerImagem.style.border = 'solid black 1px';
containerImagem.style.display='inline-block';

