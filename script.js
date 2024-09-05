const avanca = document.querySelectorAll('.bnt-proximo');

avanca.forEach(button =>{
    button.addEventListener('click' , function(){
        const atual = document.querySelectorAll('.ativo');
        const proximoPasso ='passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ative');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})