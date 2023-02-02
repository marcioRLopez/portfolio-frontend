import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosRealizadosModalComponent } from './cursos-realizados-modal.component';

describe('CursosRealizadosModalComponent', () => {
  let component: CursosRealizadosModalComponent;
  let fixture: ComponentFixture<CursosRealizadosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosRealizadosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosRealizadosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
