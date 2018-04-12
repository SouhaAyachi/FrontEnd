import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable1Component } from './data-table1.component';

describe('DataTable1Component', () => {
  let component: DataTable1Component;
  let fixture: ComponentFixture<DataTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
