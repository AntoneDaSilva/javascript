const btn_soma = document.querySelector('#btn_soma')
const btn_subtração = document.querySelector('#btn_subtração')
const btn_multiplicação = document.querySelector('#btn_multiplicação')
const btn_divisão = document.querySelector('#btn_divisão')
const res = document.querySelector('#res')

const op = [
    ()=>{
        const val = [document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value = Number(val[0])+Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value = Number(val[0])-Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value = Number(val[0])*Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value = Number(val[0])/Number(val[1])
    }
]

btn_soma.addEventListener('click', op[0])
btn_subtração.addEventListener('click', op[1])
btn_multiplicação.addEventListener('click', op[2])
btn_divisão.addEventListener('click', op[3])