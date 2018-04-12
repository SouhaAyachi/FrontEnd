import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecrutementComponent } from './recrutement/recrutement.component';

const routes: Routes = [
  {path:'', component:RecrutementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecrutementRoutingModule { }
