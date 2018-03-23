import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmployeDiversiteRoutingModule } from './employe-diversite-routing.module';
import { Compo1Component } from './compo1/compo1.component';

import { EmpDiversiteService } from './employe-diversite.service';
import { HttpClientModule } from '@angular/common/http';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

import { BarchartComponent } from './shared/barchart/barchart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { DonutChartComponent } from './shared/donut-chart/donut-chart.component';




/////////////////

/* aka l mlawnin*/
import { StatModule } from '../../../shared';

//////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../../bs-component/bs-component.module';
//import {TabsComponent} from '../../bs-component/components/tabs/tabs.component';

/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentComponent } from '../../bs-component/bs-component.component';
import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
} from '../../bs-component/components';
import { PageHeaderModule } from '../../../shared';*/

////////////////

/*export * from '../../bs-component/components/buttons/buttons.component';
export * from '../../bs-component/components/alert/alert.component';
export * from '../../bs-component/components/modal/modal.component';
export * from '../../bs-component/components/collapse/collapse.component';
export * from '../../bs-component/components/date-picker/date-picker.component';
export * from '../../bs-component/components/dropdown/dropdown.component';
export * from '../../bs-component/components/pagination/pagination.component';
export * from '../../bs-component/components/pop-over/pop-over.component';
export * from '../../bs-component/components/progressbar/progressbar.component';
export * from '../../bs-component/components/tabs/tabs.component';
export * from '../../bs-component/components/rating/rating.component';
export * from '../../bs-component/components/tooltip/tooltip.component';
export * from '../../bs-component/components/timepicker/timepicker.component';*/

/////////////

@NgModule({
  imports: [
    CommonModule,
    EmployeDiversiteRoutingModule,
	NvD3Module ,
	HttpClientModule,
	//PageHeaderModule,
	BsComponentModule,
	NgbModule,
	StatModule
  ],
  declarations: [
    Compo1Component,
	BarchartComponent,
    PieChartComponent,
    LineChartComponent,
    DonutChartComponent,
	//TabsComponent
	
	//////////////
	/* BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent*/
	
  ],
  providers: [EmpDiversiteService],
})
export class EmployeDiversiteModule { 
                      
				  
  
/* @Output() myEvent = new EventEmitter();
  function2(){
    this.myEvent.emit(null)
  } <com1 #com1></com1><com2 (myEvent)="com1.function1()"></com2>`*/


}
