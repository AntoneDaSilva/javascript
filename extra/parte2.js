const par = (a) => {
    if(a % 2 == 0){
        return a.toString().slice(0, 2)
    }
}

console.log(par(100))
// const partes = (str) => 
//      str.length < 3 ? str :  str.slice(0, 3) + str.slice(-3)


// console.log(partes('acbs'))
// console.log(partes('abcdfegh'))
// console.log(partes('abc173879374655376'))
// console.log(partes('ac'))
