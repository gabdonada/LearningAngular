import { Component } from '@angular/core';
import { Mock } from 'protractor/built/driverProviders';
import { empty } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms"




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Fist app';
  atualizacao: Date;

  constructor(){
    this.atualizacao = new Date();
  }

  atualizarData(): void{
    this.atualizacao = new Date();
  }
}
