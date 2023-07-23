const pessoa = {
    nome:'Bruni',
    canal: 'CFB Cursos',
    curso: 'JavaScript',
    aulas:{
        aula01: 'introdução',
        aula02: 'Variáveis',
        aula03: 'Condicionais' 
    }
}
const obj = '{"nome":"Bruni","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"introdução","aula02":"Variáveis","aula03":"Condicionais"}}'

const obj_json = JSON.parse(obj)
const str_json = JSON.stringify(pessoa)
console.log(str_json)
console.log(obj_json)