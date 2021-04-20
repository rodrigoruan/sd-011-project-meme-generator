let textInput = document.getElementById('text-input');
textInput.addEventListener('keydown', function(){
    let showText = document.getElementById('meme-text');
    showText.innerText=textInput.value;
});