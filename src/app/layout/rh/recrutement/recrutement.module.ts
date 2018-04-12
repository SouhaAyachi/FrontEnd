import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecrutementRoutingModule } from './recrutement-routing.module';
import { RecrutementComponent } from './recrutement/recrutement.component';

//Na3rach lezem service lina ou pas
import { RecrutementService } from './recrutement.service';

//nvd3
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

/* html css bootstrap compo */
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../../bs-component/bs-component.module';
/*********************** */

/* Child Component */
//import {StackedBarChartComponent}  from '../../charts/stacked-bar-chart/stacked-bar-chart.component';
import {ChartsModule} from '../../charts/charts.module';
//import {DiscretBarChartComponent} from '../../charts/charts.module';
/****************** */
import {EmbaucheParYearParFctnComponent} from '../charts-with-data/embauche-par-year-par-fctn/embauche-par-year-par-fctn.component';
import{ LineChart2Component } from '../charts-with-data/line-chart2/line-chart2.component';
import{ LineChartRetraiteComponent } from '../charts-with-data/line-chart-retraite/line-chart-retraite.component';
import {NbRetraitParPosteBarChartComponent}  from '../charts-with-data/nb-retrait-par-poste-bar-chart/nb-retrait-par-poste-bar-chart.component';
import { DataTablesModule } from 'angular-datatables';
import { DataTable1Component } from './shared/data-table1/data-table1.component';

//import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RecrutementRoutingModule,
    NvD3Module,
   //NgbModule ,
    ChartsModule,
    DataTablesModule,
  ],
  declarations: [NbRetraitParPosteBarChartComponent,LineChartRetraiteComponent,RecrutementComponent,EmbaucheParYearParFctnComponent,LineChart2Component,DataTable1Component],//StackedBarChartComponent
  providers:[RecrutementService],
  bootstrap: [ DataTable1Component],
  entryComponents:[],
})
export class RecrutementModule { }
