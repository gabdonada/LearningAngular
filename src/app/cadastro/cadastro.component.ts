import { Component, Input, OnInit } from '@angular/core';
import { Catalogo, Item } from '../model/model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  prd: String;
  qtd: number;
  categoria: String;

  @Input() catalogo: Catalogo; //receberá por parametro da home.ts

  constructor() { 
    this.prd = '';
    this.qtd = 0;
    this.categoria = '';
    this.catalogo = new Catalogo();
  }

  ngOnInit(): void {
  }

  salvar(){
    for (let index = 0; index < this.catalogo.itens.length; index++) {
      const element = this.catalogo.itens[index];
      if(element.produto.nome === this.prd){
        element.quantidade = this.qtd;
        element.produto.categoria = this.categoria;
        return;
      }
    }
    let item: Item = new Item({ nome: this.prd, categoria: this.categoria})
    item.quantidade = this.qtd;
    this.catalogo.itens.push(item);
  }

}
