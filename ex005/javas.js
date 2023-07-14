const caixa = document.getElementById('caixa')

let musicas = new Set(['Musica1', 'Musica Boa', 'Musica10'])

musicas.add('musica1')
musicas.delete('musica1')
musicas.clear()
console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML += el + '<br/>'
// })

for(let m of musicas){
    caixa.innerHTML += m + '<br>'
}