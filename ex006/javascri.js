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
const btn_add = document.querySelector('#btn_add')