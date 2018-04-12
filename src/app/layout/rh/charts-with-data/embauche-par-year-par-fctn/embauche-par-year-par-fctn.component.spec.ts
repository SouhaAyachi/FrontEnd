import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheParYearParFctnComponent } from './embauche-par-year-par-fctn.component';

describe('EmbaucheParYearParFctnComponent', () => {
  let component: EmbaucheParYearParFctnComponent;
  let fixture: ComponentFixture<EmbaucheParYearParFctnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbaucheParYearParFctnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbaucheParYearParFctnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
