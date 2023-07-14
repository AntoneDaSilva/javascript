const caixaCursos = document.getElementById('caixaCursos')
const btnCursosSelecionado = document.getElementById('btnCursosSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCurso = document.getElementById('btnAdicionarNovoCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const cursos = ['HTML', 'CSS', 'Python', 'MySQL', 'React']

cursos.map((el, chaves)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + chaves)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    novoElemento.addEventListener('click', (evt)=>{
        console.log(evt.target)
        remo
    })
    caixaCursos.appendChild(novoElemento)
})
