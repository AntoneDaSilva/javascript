const f_number = document.querySelectorAll('input[type=number]')
const f_radio = document.querySelectorAll('input[type=radio]')
const f_nome = document.getElementById('f_nome')
const carros = document.getElementById('carros')

let a_carros = []

f_radio[0].addEventListener('click', ()=>{
    f_number[1].removeAttribute('disabled')
    f_number[2].removeAttribute('disabled')
})
f_radio[1].addEventListener('click', ()=>{
    f_nome.value = ''
    f_number[0].value = 0
    f_number[1].value = 0
    f_number[2].value = 0
    f_number[1].setAttribute('disabled', 'disabled')
    f_number[2].setAttribute('disabled','disabled')
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((c)=>{
        
    })
}


class carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
    }

    getNome(){
        return this.nome
    }

    getPortas(){
        return this.portas
    }
}

class Militar extends carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }

    getBlindagem(){
        return this.blindagem
    }

    getMunicao(){
        return this.municao
    }
}