const maiorPar = (arr) => 
    Math.max(...arr.filter(num => num % 2 === 0))

console.log(maiorPar([4, 7, 9, 10]));


// const par = (arr) => arr.filter(num => num % 2 === 0).length

// const atePares = (num) => {
//     const returnArray = []
//     for(let i = 1; i <= num; i += 1) {
//         returnArray.push(i)
//     }
//     return returnArray
// }

// console.log(par(atePares(6)))
