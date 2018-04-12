import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDiversHistoryComponent } from './emp-divers-history.component';

describe('EmpDiversHistoryComponent', () => {
  let component: EmpDiversHistoryComponent;
  let fixture: ComponentFixture<EmpDiversHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDiversHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDiversHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
