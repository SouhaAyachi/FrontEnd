import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeDiversiteComponent } from './employe-diversite/employe-diversite.component';
import { EmpDiversHistoryComponent } from './emp-divers-history/emp-divers-history.component';
import { EmpDiversVer2Component } from './emp-divers-ver2/emp-divers-ver2.component';

const routes: Routes = [
  { path :'EmpDiv2' ,component:EmpDiversVer2Component},
{ path :'EmpDivDetaille' ,component:EmpDiversHistoryComponent},
  {path:'',component:EmployeDiversiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeDiversiteRoutingModule { }
