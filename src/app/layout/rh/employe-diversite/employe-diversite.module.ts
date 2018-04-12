import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmployeDiversiteRoutingModule } from './employe-diversite-routing.module';
import { EmployeDiversiteComponent } from './employe-diversite/employe-diversite.component';

import { EmpDiversiteService } from './employe-diversite.service';
import { HttpClientModule } from '@angular/common/http';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

import { BarchartComponent } from './shared/barchart/barchart.component';
//import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { DonutChartComponent } from './shared/donut-chart/donut-chart.component';

/////////////////

/* aka l mlawnin*/
import { StatModule } from '../../../shared';

////optimiser code//////
//import { DiscretBarChartComponent } from '../../charts/discret-bar-chart/discret-bar-chart.component';
//import { PieChartComponent } from '../../charts/pie-chart/pie-chart.component';
//import {StackedBarChartComponent}  from '../../charts/stacked-bar-chart/stacked-bar-chart.component';
import {ChartsModule} from '../../charts/charts.module';
////////////////
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../../bs-component/bs-component.module';
//import { NbEmpParCategorieComponent } from './shared/nb-emp-par-categorie/nb-emp-par-categorie.component';
import { NbEmpParGenreComponent } from './shared/nb-emp-par-genre/nb-emp-par-genre.component';
import { EmpDiversHistoryComponent } from './emp-divers-history/emp-divers-history.component';
import { EmpDiversVer2Component } from './emp-divers-ver2/emp-divers-ver2.component';
//import { AgeMoyenParCategorieComponent } from './shared/age-moyen-par-categorie/age-moyen-par-categorie.component';
//import { AncienneteParCategorieComponent } from './shared/anciennete-par-categorie/anciennete-par-categorie.component';
//import { NbEmpParStructureComponent } from './shared/nb-emp-par-structure/nb-emp-par-structure.component';
//import { NbEmpParGradeComponent } from './shared/nb-emp-par-grade/nb-emp-par-grade.component';
//import { NbEmpParPosteComponent } from './shared/nb-emp-par-poste/nb-emp-par-poste.component';
//import { NbEmpParFonctionComponent } from './shared/nb-emp-par-fonction/nb-emp-par-fonction.component';

/////////////

@NgModule({
  imports: [
    CommonModule,
    EmployeDiversiteRoutingModule,
	NvD3Module ,
	HttpClientModule,
	BsComponentModule,
//	NgbModule,
  StatModule,
  ChartsModule,
  NvD3Module
  ],
  declarations: [
    EmployeDiversiteComponent,
	BarchartComponent,
    //PieChartComponent,
    LineChartComponent,
    DonutChartComponent,
   // NbEmpParCategorieComponent,
    NbEmpParGenreComponent,
   EmpDiversHistoryComponent,
   EmpDiversVer2Component,
    //AgeMoyenParCategorieComponent,
    //AncienneteParCategorieComponent,
    //NbEmpParStructureComponent,
    //NbEmpParGradeComponent,
    //NbEmpParPosteComponent,
    //NbEmpParFonctionComponent,
   // DiscretBarChartComponent,
    //StackedBarChartComponent
	
  ],
  providers: [EmpDiversiteService],
})
export class EmployeDiversiteModule { 
                      
				  
  
/* @Output() myEvent = new EventEmitter();
  function2(){
    this.myEvent.emit(null)
  } <com1 #com1></com1><com2 (myEvent)="com1.function1()"></com2>`*/


}
