import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosRealizadosComponent } from './cursos-realizados.component';

describe('CursosRealizadosComponent', () => {
  let component: CursosRealizadosComponent;
  let fixture: ComponentFixture<CursosRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosRealizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
