import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperNewanagraficaComponent } from './stepper-newanagrafica.component';

describe('StepperNewanagraficaComponent', () => {
  let component: StepperNewanagraficaComponent;
  let fixture: ComponentFixture<StepperNewanagraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperNewanagraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperNewanagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
