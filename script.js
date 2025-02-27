const textos = document.querySelectorAll('.home-texto-digitado');

function digitaTexto(elemento) {
    elemento.forEach(texto => {
        const textArray = texto.innerHTML.split('');
        texto.innerHTML = ''
        textArray.forEach((letra, i) => {
            setTimeout(() => {
                texto.innerHTML += letra;
            }, 75 * i);
        });
    });
}

function iconesTec(elemento, img) {
    imgOriginal = elemento.src;
    elemento.src = img;
    elemento.addEventListener('mouseout', ()=>{
        elemento.src = imgOriginal;
    })
}