class ContaBancaria{
    constructor(numeroConta, nomeTitular, saldoInicial = 0){
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldoInicial;
    }

    depositar(valor){
        if(valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }else{
            console.log("Saldo insuficiente ou valor inválido para saque.");
    }
    }

    sacar(valor) {
        if(valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
        }else{
            console.log(`Saldo insuficiente ou valor inválido para saque.`)
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual da conta: R$${this.saldo}`);
    }
}


const minhaConta = new ContaBancaria("12345", "Fulano de tal", 1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo()
minhaConta.sacar(1500)

