import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscretBarChartComponent } from './discret-bar-chart.component';

describe('DiscretBarChartComponent', () => {
  let component: DiscretBarChartComponent;
  let fixture: ComponentFixture<DiscretBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscretBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscretBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
