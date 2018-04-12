import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { PageHeaderModule } from '../../shared';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { DiscretBarChartComponent } from './discret-bar-chart/discret-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { LineChart2Component } from './line-chart2/line-chart2.component';
import { GeneralLineChartComponent } from './general-line-chart/general-line-chart.component';

export { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
export {PieChartComponent } from './pie-chart/pie-chart.component';
export { DiscretBarChartComponent } from './discret-bar-chart/discret-bar-chart.component';
export{ NgbModule } from '@ng-bootstrap/ng-bootstrap';
//export { LineChart2Component } from './line-chart2/line-chart2.component';
export { GeneralLineChartComponent } from './general-line-chart/general-line-chart.component';

//modal pb//
//import{ EmbaucheParYearParFctnComponent } from '../rh/charts-with-data/embauche-par-year-par-fctn/embauche-par-year-par-fctn.component';


//modal service

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule,NvD3Module,NgbModule],
    declarations: [DiscretBarChartComponent, PieChartComponent, StackedBarChartComponent,  GeneralLineChartComponent],
	exports:[GeneralLineChartComponent,StackedBarChartComponent,PieChartComponent,DiscretBarChartComponent,NgbModule]
   , entryComponents:[]
})
export class ChartsModule {}
