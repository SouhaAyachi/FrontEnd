import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbEmpParGenreComponent } from './nb-emp-par-genre.component';

describe('NbEmpParGenreComponent', () => {
  let component: NbEmpParGenreComponent;
  let fixture: ComponentFixture<NbEmpParGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbEmpParGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbEmpParGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
