// Filas
class Fila{
    constructor(){
        this.elemento= []
    }
    // Enfileirar
    enqueue(elemento){
        this.elemento.push(elemento)
    }
    // Desenfileirar
    dequeue(){
        this.elemento.shift()
    }
}
// Enfileirar
const fila= new Fila()
fila.enqueue('Lukas')
fila.enqueue('Matheus')
fila.enqueue('Camargo')
console.log(fila.elemento)

// Desenfileirar
fila.dequeue() // Lukas Removido
fila.dequeue() // Matheus Removido
fila.dequeue() // camargo Removido
console.log(fila.elemento)