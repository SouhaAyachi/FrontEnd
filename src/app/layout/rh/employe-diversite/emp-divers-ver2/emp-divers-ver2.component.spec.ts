import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDiversVer2Component } from './emp-divers-ver2.component';

describe('EmpDiversVer2Component', () => {
  let component: EmpDiversVer2Component;
  let fixture: ComponentFixture<EmpDiversVer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDiversVer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDiversVer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
