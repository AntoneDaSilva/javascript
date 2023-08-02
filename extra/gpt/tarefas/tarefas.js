const tarefas = document.getElementById('tarefas');
const  btn_adicionar = document.getElementById('btn_adicionar');
const adicionar = document.getElementById('adicionar');

let t_tarefa = []
console.log(t_tarefa)

const removerTarefa = (quem) => {
    const index = t_tarefa.findIndex((el) => el.tarefa.trim() === quem);
    if (index !== -1) 
        t_tarefa.splice(index, 1)
    // t_tarefa = t_tarefa.filter((el)=>{
    //     console.log(el)
    //     return el.tarefa.remove
        
}


//adiciona as tarefas em adicionar
const gerenciarTarefas = ()=>{
    tarefas.innerHTML = ''
    t_tarefa.forEach((c)=>{
        const div = document.createElement('div')
        const btn_remover = document.createElement('button')
        div.setAttribute('class', 'ad')
        btn_remover.innerHTML = 'Remover'

        btn_remover.addEventListener('click', (evt)=>{

            const quemRemover = evt.target.parentNode.getAttribute('data-tarefa');
            console.log(quemRemover)

            removerTarefa(quemRemover)
            div.remove()
            gerenciarTarefas() 
    })
        div.innerHTML = `tarefa: ${c.tarefa}`
        div.setAttribute('data-tarefa', c.tarefa.trim());


        //div.setAttribute('data-tarefa', c.tarefa);

        adicionar.appendChild(div)
        div.appendChild(btn_remover)
    })
  
}
   


btn_adicionar.addEventListener('click', () => {
    const novaTarefa = tarefas.value.trim();
    const tarefaExistente = t_tarefa.find((tarefa) => tarefa.tarefa.trim() === novaTarefa);
    if (novaTarefa !== '' && !tarefaExistente) {
        const L = new ListaTarefas(novaTarefa)
    t_tarefa.push(L)
    gerenciarTarefas()
    }
    
})

class ListaTarefas{
    constructor(tarefa){
        this.tarefa = tarefa
    }
}
