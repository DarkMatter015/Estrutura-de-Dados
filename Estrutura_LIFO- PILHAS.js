// Pilhas
class Pilha{
    constructor(){
        this.elementos= []
    }
    
    push(elementos){
        this.elementos.push(elementos)
    }

    pop(){
        this.elementos.pop()
    }
}
// Adicionando Elementos
const pilha= new Pilha()
pilha.push(1) // [1]
pilha.push(2) // [1,2]
pilha.push(3) // [1,2,3]
pilha.push(4) // [1,2,3,4]
pilha.push(5) // [1,2,3,4,5]
console.log(pilha)

// Removendo Eelementos
pilha.pop() // [1,2,3,4]
pilha.pop() // [1,2,3]
pilha.pop() // [1,2]
pilha.pop() // [1]
pilha.pop() // []
console.log(pilha)