class carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = (cor)=>{
        this.cor = cor
    }
}

class Militar extends carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
    atirar = ()=>{
        if(this.municao > 0){
            this.municao--
        }
    }
}

class utilidario extends carro{
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares
    }
}

const c1 = new carro("Normar", 4)
c1.ligar()
c1.setCor('preto')

const c2 = new Militar("lutador", 1, 100, 50)
c2.setCor('azul')
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()


console.log(`nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`ligado: ${c1.ligado?"Sim":"Não"}`)
console.log(`vel: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log(`cor: ${c1.lugsre}`)
console.log(`------------------------`)


console.log(`nome: ${c2.nome}`)
console.log(`portas: ${c2.portas}`)
console.log(`ligado: ${c2.ligado?"Sim":"Não"}`)
console.log(`vel: ${c2.vel}`)
console.log(`blindagem: ${c2.blindagem}`)
console.log(`municao: ${c2.municao}`)
console.log(`cor: ${c2.cor}`)
console.log(`------------------------`)
