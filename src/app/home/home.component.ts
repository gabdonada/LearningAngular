import { Component, OnInit } from '@angular/core';
import { Catalogo, Item } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

catalogo: Catalogo;

  constructor() {
    this.catalogo = new Catalogo();
    this.mock();
  }


  mock() {
    this.catalogo.itens.push(new Item({
      nome: 'O poderoso chefão',
      categoria: 'Livro',
    }));

    this.catalogo.itens.push(new Item({
      nome: 'Outro livro',
      categoria: 'Livro',
    }));

    this.catalogo.itens.push(new Item({
      nome: 'Hamburguer',
      categoria: 'comida',
    }));

    this.catalogo.itens.push(new Item({
      nome: 'Pizza',
      categoria: 'comida',
    }));
  }

  ngOnInit(): void {
    
  }

}
