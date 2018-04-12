import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-routing.module';
import { EmbaucheParYearParFctnComponent } from './charts-with-data/embauche-par-year-par-fctn/embauche-par-year-par-fctn.component';
import { LineChartRetraiteComponent } from './charts-with-data/line-chart-retraite/line-chart-retraite.component';
import { NbRetraitParPosteBarChartComponent } from './charts-with-data/nb-retrait-par-poste-bar-chart/nb-retrait-par-poste-bar-chart.component';

//import { NbEmpParGenreComponent } from './employe-diversite/shared/nb-emp-par-genre/nb-emp-par-genre.component';
//import { Compo1Component } from './compo1/compo1.component';


@NgModule({
  imports: [
    CommonModule,
    RhRoutingModule,
  //  RecrutementModule,
    //EmployeDiversiteModule
  ],
  declarations: [ EmbaucheParYearParFctnComponent, LineChartRetraiteComponent, NbRetraitParPosteBarChartComponent]//Compo1Component //app-nb-emp-par-genre
})
export class RhModule { }
