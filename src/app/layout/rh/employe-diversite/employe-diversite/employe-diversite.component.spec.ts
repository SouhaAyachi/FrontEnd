import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDiversiteComponent } from './employe-diversite.component';

describe('EmployeDiversiteComponent', () => {
  let component: EmployeDiversiteComponent;
  let fixture: ComponentFixture<EmployeDiversiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeDiversiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDiversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
