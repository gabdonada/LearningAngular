import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [ //rotas a baixo; precisa criar links para trocar de page
  {path: '', redirectTo:'/home', pathMatch:'full'}, //rota padrão, sempre abre ela ao iniciar
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
