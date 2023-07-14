const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'javascript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 1000)
mapa.set('jake', 'finn')

mapa.delete(1)

console.log(mapa)
let pes = 1
let res = ''
if(mapa.has(pes)){
    res =  'A chave existe  na coleção com o valor: ' + mapa.get(pes)
}else{
   res = 'A chave NÃO existe  na coleção' 
}
res += '<br> O tamanho da coleção é ' + mapa.size
caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})