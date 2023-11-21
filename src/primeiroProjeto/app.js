let botao = document.querySelector('button')
botao.addEventListener('click', somarUm)

function somarUm(){
    let elemH3 = document.querySelector('h3')
    let valor = elemH3.textContent
    let novoValor = parseInt(valor) + 1
    elemH3.textContent = novoValor

    if(novoValor < 3) {
        elemH3.style.color = 'red'
    } else {
        elemH3.style.color = 'blue'
    }
}