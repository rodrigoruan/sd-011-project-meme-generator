// Exercício 1 - criar caixa input e mostrar texto input e 4
let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function(){
    let showText = document.getElementById('meme-text');
    showText.innerText=textInput.value;
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

// Exercício 4 e 5
let showText2 = document.getElementById('meme-text');
showText2.style.textShadow = 'rgb(0, 0, 0) 5px 5px 5px';
showText2.style.fontSize='30px';
showText2.style.color='rgb(255, 255, 255)';
showText2.style.position='absolute';
showText2.style.marginTop='-145px';
showText2.style.marginLeft='5px';

// Exercício 6
let fireButton = document.getElementById('fire');
fireButton.addEventListener('click', function(){
    containerImagem.style.border = 'dashed red 3px';
});
let waterButton = document.getElementById('water');
waterButton.addEventListener('click', function(){
    containerImagem.style.border = 'double blue 5px';
});
let earthButton = document.getElementById('earth');
earthButton.addEventListener('click', function(){
    containerImagem.style.border = 'groove green 6px';
});



