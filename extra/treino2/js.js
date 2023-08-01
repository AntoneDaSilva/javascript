const f_nome = document.getElementById('f_nome')
const f_quantidade = document.getElementById('f_quantidade')
const btn_adicionar = document.getElementById('btn_adicionar')
const adicionar = document.getElementById('adicionar')

let compras = []

const removerDoCarrinho = function(quem){
    compras = compras.filter((el)=>{
        return el.nome != quem
    })
}

const adicionarAoCarrinho = () => {
    adicionar.innerHTML = ''
    compras.forEach((el)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        const btn = document.createElement('button')
        btn.innerHTML = 'Remover'
        btn.addEventListener('click', (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.index
            removerDoCarrinho(quemRemover)
            adicionarAoCarrinho() 

        })
        div.innerHTML = `Produto: ${el.produto}<br>`
        div.innerHTML += `Quantidade: ${el.quantidade}<br>`
        div.dataset.nome = el.produto;
        adicionar.appendChild(div)
        div.appendChild(btn)
    })
}

btn_adicionar.addEventListener('click', ()=>{
    const c = new carrinho(f_nome.value, f_quantidade.value)
    compras.push(c)
    adicionarAoCarrinho()
})

class carrinho{
    constructor(produto, quantidade){
        this.produto = produto
        this.quantidade = quantidade
    }
}