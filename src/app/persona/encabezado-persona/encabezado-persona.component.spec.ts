import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPersonaComponent } from './encabezado-persona.component';

describe('EncabezadoPersonaComponent', () => {
  let component: EncabezadoPersonaComponent;
  let fixture: ComponentFixture<EncabezadoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
