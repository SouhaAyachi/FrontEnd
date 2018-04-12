import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbRetraitParPosteBarChartComponent } from './nb-retrait-par-poste-bar-chart.component';

describe('NbRetraitParPosteBarChartComponent', () => {
  let component: NbRetraitParPosteBarChartComponent;
  let fixture: ComponentFixture<NbRetraitParPosteBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbRetraitParPosteBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbRetraitParPosteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
