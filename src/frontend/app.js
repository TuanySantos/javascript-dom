let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'
let produtos = []

async function buscarProdutos() {
    let res = await fetch(endpoint)
    produtos = await res.json()
    exibirProdutos(produtos)
}
let elemento =  document.querySelector('.produtos__lista')
function exibirProdutos(produtos) {
    produtos.forEach(produto => {
        elemento.innerHTML += `
        <li class="produtos__item">
                    <div class="produtos__content">
                        <img src=${produto.img} alt=${produto.descricao}>
                        <div class="produtos__informacoes">
                            <h3>${produto.nome}</h3>
                            <p>${produto.descricao}</p>
                            <h4>R$ ${produto.valorSemDesconto}<s>R$ ${produto.valorComDesconto}</s></h4>
                            <p>${produto.tipoEntrega}</p>
                        </div>
                    </div>
                </li>
        `
        console.log(produto)
    })
    }

buscarProdutos();