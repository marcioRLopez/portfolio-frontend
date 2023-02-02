import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftSkillsModalComponent } from './hard-soft-skills-modal.component';

describe('HardSoftSkillsModalComponent', () => {
  let component: HardSoftSkillsModalComponent;
  let fixture: ComponentFixture<HardSoftSkillsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoftSkillsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoftSkillsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
