const carro = {
    marca: 'Fiat',
    modelo: 'uno',
    motor: [1.6, 1.4, 1.0]
}




//convertendo de objeto para texto
// let texto = JSON.stringify(carro)

//adicionando o objeto convertido em texto ao nosso html
// document.getElementById('area').innerHTML = texto

//convertendo de texto para objeto
let obj = JSON.parse(texto)
//chamando o texto que foi convertido em objeto
// console.log(obj.motor[2])