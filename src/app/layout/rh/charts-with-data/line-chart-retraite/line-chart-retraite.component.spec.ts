import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartRetraiteComponent } from './line-chart-retraite.component';

describe('LineChartRetraiteComponent', () => {
  let component: LineChartRetraiteComponent;
  let fixture: ComponentFixture<LineChartRetraiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartRetraiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
