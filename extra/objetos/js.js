class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

   apresentar(){
    return `Olá, meu nome é ${this.getNome()} e tenho ${this.getIdade()} anos`
   }

   static maiorIdade(){
    return idade >= 18
   }
}

class Aluno extends Pessoa{
    constructor(nome,idade, matricula){
        super(nome, idade)
        this.matricula = matricula

    }
    
    matriculaNumero(){
        return this.matricula
    }

    apresentar(){
        return `Olá, meu nome é ${this.getNome()} e tenho ${this.getIdade()} anos e minha matrícula é ${this.matriculaNumero()}`
    }
}

class Endereco{
    constructor(rua, numero, cidade, estado){
        this.rua = rua
        this.numero = numero 
        this.cidade = cidade
        this.estado = estado
    }

}





const endereco1 = new Endereco('Martin', 69, 'porto velho', 'Rondônia', )
const pessoa1 = new Pessoa('João', 25, endereco1)
console.log(pessoa1.apresentar())
const aluno1 = new Aluno('Maria', 20, "12345")

