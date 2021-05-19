export interface Produto{
    id?: String;
    nome: String;
    categoria: String;
}
  
export class Item{
    produto: Produto;
    quantidade: number;
    
    constructor(p: Produto){
      this.produto = p;
      this.quantidade = 1;
    }
}

export class Catalogo {
    itens: Item[];

    constructor(){
        this.itens = [];
    }
}