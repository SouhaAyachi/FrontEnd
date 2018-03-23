import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
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
} from './components';
import { PageHeaderModule } from '../../shared';

/////////////////////////////////


export {ButtonsComponent} from './components/buttons/buttons.component';
export {AlertComponent} from './components/alert/alert.component';
export {ModalComponent} from './components/modal/modal.component';
export {CollapseComponent} from './components/collapse/collapse.component';
export {DatePickerComponent} from './components/date-picker/date-picker.component';
export {DropdownComponent} from './components/dropdown/dropdown.component';
export {PaginationComponent} from './components/pagination/pagination.component';
export {PopOverComponent} from './components/pop-over/pop-over.component';
export {ProgressbarComponent} from './components/progressbar/progressbar.component';
export {TabsComponent} from './components/tabs/tabs.component';
export {RatingComponent} from './components/rating/rating.component';
export {TooltipComponent} from './components/tooltip/tooltip.component';
export {TimepickerComponent} from './components/timepicker/timepicker.component';


//////////////////////////////////

@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [
        BsComponentComponent,
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
        TimepickerComponent
    ],
	exports:[ButtonsComponent,AlertComponent,ModalComponent,CollapseComponent,DatePickerComponent,DropdownComponent,PaginationComponent,PopOverComponent,
	ProgressbarComponent,TabsComponent,RatingComponent,TooltipComponent,TimepickerComponent
	
	]
})
export class BsComponentModule {}
