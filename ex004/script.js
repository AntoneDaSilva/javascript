const caixaCursos = document.getElementById('caixaCursos')
const btnCursosSelecionado = document.getElementById('btnCursosSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCurso = document.getElementById('btnAdicionarNovoCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const cursos = ['HTML', 'CSS', 'Python', 'MySQL', 'React']

cursos.map((el, chaves)=>{
    const novoElemento =  document.createElement('div')
    novoElemento.setAttribute('id', 'c' + chaves)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    caixaCursos.appendChild(novoElemento)

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
})
