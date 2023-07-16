class Pessoa{
    canal='CFB Cursos'
    constructor(pnome,pidade){
        this.nome = pnome
        this.idade = pidade

    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome=nome
    }
    setidade(idade){
        this.idade=idade
    }
    info(){
        console.log(`nome: ${this.nome} `)
        console.log(`idade: ${this.idade}`)
        console.log('----------------------')
    }
}
let pessoa = []

const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = ()=>{
    pessoa.map((p)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `nome: ${p.getNome()}<br>${p.getIdade()}` 
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', (evt)=>{
    const nome = document.querySelector('#f_name')
    const idade = document.querySelector('#f_idade')
    const personalList = new Pessoa(nome.value, idade.value)
    pessoa.push(personalList)
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})