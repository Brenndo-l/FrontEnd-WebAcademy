let botao = document.querySelector('button')
botao.onclick = () => {
    alert('Forma externa JS')
}

//manipulador de eventos

botao.addEventListener('click', mensagem)
botao.addEventListener('click', alteraTitulo)
function mensagem(){
    alert('forma com manipulador de evento JS');
}

function alteraTitulo(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Web Academy';
    titulo.style.color = 'red';
}