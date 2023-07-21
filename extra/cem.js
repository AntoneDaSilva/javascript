const addNovo = (str) => {
    return str.indexOf('Nova!') == 0 ? str:`Nova! ${str}`
}
console.log(addNovo('Nova! 55% de desconto'))


// const formatDate = (date = new Date()) => {
//     const days = date.getDate() + 1 - 1;
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`
// }
// console.log(formatDate())

// const moveCharsForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')

// console.log(moveCharsForward('a, b,c, d, e, f ,g '))


// const getFilleExtensio = (str) => str.slice(str.lastIndexOf('.'))

// console.log(getFilleExtensio('indexx.html'))
// console.log(getFilleExtensio('webpack.config.js'))

// const cem = (a, b)=>{
//     if(a === 100 || b === 100 || (a + b)  == 100){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(cem(8, 100))
// console.log(cem(100, 0))
// console.log(cem(8, 4))
// console.log(cem(50, 50))
