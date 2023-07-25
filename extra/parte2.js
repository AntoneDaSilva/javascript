const closeTo100 = (a, b ) => (100 - a) < (100 - b) ? a : b

console.log(closeTo100(99, 1))
console.log(closeTo100(49, 51))
console.log(closeTo100(50, 50))
// const par = (a) => {
//     if(a % 2 == 0){
//         return a.toString().slice(0, 2)
//     }else{
//         return 'Harry Potter'
//     }
// }

// console.log(par(25))
// const partes = (str) => 
//      str.length < 3 ? str :  str.slice(0, 3) + str.slice(-3)


// console.log(partes('acbs'))
// console.log(partes('abcdfegh'))
// console.log(partes('abc173879374655376'))
// console.log(partes('ac'))
