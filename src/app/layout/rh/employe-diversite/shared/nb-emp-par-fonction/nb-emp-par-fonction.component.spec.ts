import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbEmpParFonctionComponent } from './nb-emp-par-fonction.component';

describe('NbEmpParFonctionComponent', () => {
  let component: NbEmpParFonctionComponent;
  let fixture: ComponentFixture<NbEmpParFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbEmpParFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbEmpParFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
