class listDeTarefas {
    constructor(){
        this.tarefas = []
    }

    adicionarTarefa(novaTarefa){
        this.tarefas.push(novaTarefa)
    }

    removerTarefa(tarefa){
        const indice = this.tarefas.indexOf(tarefa)
        if(indice !== -1){
            this.tarefas.splice(indice, 1);
        }
    }
    
    marcarComoConcluida(tarefa){
        tarefa.concluida = true
    }

    exibirTarefas(){
        const lista = document.querySelector('#lista-tarefas');
        lista.innerHTML = '';
        
        this.tarefas.forEach((tarefa)=>{
            const li = document.createElement('li')
            li.textContent = tarefa.nome

            if(tarefa.concluida){
                li.classList.add('concluída')
            }

            const btnRemover = document.createElement('button');
            btnConcluída.textContent = 'Remover'
            btnRemover.addEventListener('click', ()=>{
                this.removerTarefa(tarefa)
                thid.exibirTarefas()
            });
            const btnConcluir = document.createElement('button')
            btnConcluir.textContent = 'Concuir'
            btnConcluir.addEventListener('click', ()=>{
                this.marcarComoConcluida(tarefa)
                this.exibirTarefas()
            });

            li.appendChild(btnRemover);
            li.appendChild(btnConcluir)
            lista.appendChild(li)
        });
    }

}

const lista = new listDeTarefas();

const form = document.querySelector('#form-tarefa')
form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const inputTarefa = document.querySelector('#input-tarefa')
    const nomeTarefa = inputTarefa.value;
     if(nomeTarefa.trim() !== ''){
        const novaTarefa = {none: nomeTarefa, concluida : false}
        lista.adicionarTarefa(novaTarefa);
        inputTarefa.value = '';
        lista.exibirTarefas()
     }
})

lista.exibirTarefas()