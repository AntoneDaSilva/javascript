class Npc{
    constructor(energia){
        this.energia = energia
        this.alerta = false
    }
    info = () => {
        console.log(`Energia: ${this.energia}`)
        console.log(this.alerta ? 'Sim' : 'Não')
    }
} 

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

npc1.alerta = true
npc2.alerta = true
npc1.alerta = true

npc1.info()
npc2.info()
npc3.info()