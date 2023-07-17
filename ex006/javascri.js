const pessoa = {
    nome: '',
    idade: '',
    getNome:function(){
        return this.nome
    },
    getIdade:()=>{
        return this.idade
    },
    setNome:(nome)=>{
        return this.nome = nome
    },
    setIdade:(nome)=>{
        return this.idade = idade
    }
}
 let nom = pessoa.nome
 let idad = pessoa.idade
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = (el)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `nome: ${nom}<br>idade: ${idad}`
        res.appendChild(div)

}

btn_add.addEventListener('click', ()=>{
    const f_name = document.querySelector('#f_name').value
    const f_idade = document.querySelector('#f_idade').value
    nom = f_name
    idad = f_idade
    console.log(nom)
    addPessoa()
})


//  function Pessoa(pnome,pidade){
//         this.nome = pnome,
//         this.idade = pidade,

//     this.getNome = function(){
//         return this.nome
//     },
//     this.getIdade = function(){
//         return this.idade
//     },
//     this.setNome = function(nome){
//         this.nome=nome
//     },
//     this.setidade = function(idade){
//         this.idade=idade
//     },
//     this.info =  function(){
//         console.log(`nome: ${this.nome} `)
//         console.log(`idade: ${this.idade}`)
//         console.log('----------------------')
//     }
// }
// let pessoa = []

// const btn_add = document.querySelector('#btn_add')
// const res = document.querySelector('.res')

// const addPessoa = ()=>{
//     pessoa.map((p)=>{
//         const div = document.createElement('div')
//         div.setAttribute('class', 'pessoa')
//         div.innerHTML = `nome: ${p.getNome()}<br>idade: ${p.getIdade()}` 
//         res.appendChild(div)
//     })
// }

// btn_add.addEventListener('click', (evt)=>{
//     const nome = document.querySelector('#f_name')
//     const idade = document.querySelector('#f_idade')
//     const personalList = new Pessoa(nome.value, idade.value)
//     pessoa.push(personalList)
//     nome.value = ''
//     idade.value = ''
//     nome.focus()
//     addPessoa()
// })