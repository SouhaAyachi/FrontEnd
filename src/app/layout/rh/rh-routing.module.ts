import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'',
	children:[
	{path:'',loadChildren:'./employe-diversite/employe-diversite.module#EmployeDiversiteModule'}
	]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
