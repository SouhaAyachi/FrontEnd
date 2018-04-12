import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLineChartComponent } from './general-line-chart.component';

describe('GeneralLineChartComponent', () => {
  let component: GeneralLineChartComponent;
  let fixture: ComponentFixture<GeneralLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
