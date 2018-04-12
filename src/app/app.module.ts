import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { LineChart2Component } from './layout/charts/charts.module';
//import { BsComponentModule } from '../../bs-component/bs-component.module';

//import { RecrutementService } from './layout/rh/recrutement/recrutement.service';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        NgbModule.forRoot(),//ngb Tabset pb resolved by this Lhamdoullelleh wachokr lelleh //https://github.com/ng-bootstrap/ng-bootstrap/issues/1952
        AppRoutingModule,//.forRoot(RecrutementService),
       // NgbModule
		//BsComponentModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,NgbModule],
    bootstrap: [AppComponent],
    entryComponents:[]
})
export class AppModule {}
