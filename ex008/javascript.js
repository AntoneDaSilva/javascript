const todosRadios = document.querySelectorAll('input[type=radio]')
const f_blindagem = document.getElementById('f_blindagem')
const f_munição = document.getElementById('f_munição')
const  f_nome = document.getElementById('f_nome')
const f_portas = document.getElementById('f_portas')
const carros = document.querySelector('#carros')
const btn_addCarro = document.getElementById('btn_addCarro')


let a_carros = []

const removerCarro = function(quem){
    a_carros = a_carros.filter((el)=>{
        return el.nome != quem
    })
}

todosRadios[0].addEventListener('click', ()=>{
    f_blindagem.removeAttribute('disabled')
    f_munição.removeAttribute('disabled')
    
})

todosRadios[1].addEventListener('click', ()=>{
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_munição.value = 0 
    f_blindagem.setAttribute('disabled', 'disabled')
    f_munição.setAttribute('disabled', 'disabled')
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((c)=>{
        const div = document.createElement('div')
        const btn = document.createElement('button')
        btn.innerHTML =  'remover'
        btn.setAttribute('class', 'c2')
        btn.addEventListener('click', (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros() 

        })
        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', c.nome)
        div.innerHTML = `Nome: ${c.nome}<br>`
        div.innerHTML += `Blindagem: ${c.portas}<br>`
        div.innerHTML += `Portas: ${c.blindagem}<br>`
        div.innerHTML += `Munição: ${c.municao}<br>`
        div.appendChild(btn)
        carros.appendChild(div)
    })
   
}

btn_addCarro.addEventListener('click', ()=>{
    if(todosRadios[1].checked){
        const c = new carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }else {
        const m = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_munição.value)
        a_carros.push(m)
    }
    gerenciarExibicaoCarros()
})




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
