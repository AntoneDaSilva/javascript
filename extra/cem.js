const cem = (a, b)=>{
    if(a === 100 || b === 100 || (a + b)  == 100){
        return true
    }else{
        return false
    }
}
console.log(cem(8, 100))
console.log(cem(100, 0))
console.log(cem(8, 4))
console.log(cem(50, 50))
