import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPersonaComponent } from './skills-persona.component';

describe('SkillsPersonaComponent', () => {
  let component: SkillsPersonaComponent;
  let fixture: ComponentFixture<SkillsPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
