// Árvore
class Arvore{
    constructor(){
        this.nos= {}
    }

    inserir(arvore, valor){
        if(arvore.valor){
            if(valor > arvore.valor){
                this.inserir(arvore.right, valor)
            }else{
                this.inserir(arvore.left, valor)
            }
        }else{
            arvore.valor= valor
            arvore.right= {}
            arvore.left= {}
        }
    }
}

// Estrutura da Arvore
const NovaArvore= new Arvore()
NovaArvore.inserir(NovaArvore.nos, 23)
NovaArvore.inserir(NovaArvore.nos, 12)
NovaArvore.inserir(NovaArvore.nos, 4)
NovaArvore.inserir(NovaArvore.nos, 18)
NovaArvore.inserir(NovaArvore.nos, 1)
NovaArvore.inserir(NovaArvore.nos, 27)
NovaArvore.inserir(NovaArvore.nos, 25)

console.log(NovaArvore.nos)