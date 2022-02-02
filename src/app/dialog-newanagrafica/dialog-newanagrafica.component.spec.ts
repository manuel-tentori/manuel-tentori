import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewanagraficaComponent } from './dialog-newanagrafica.component';

describe('DialogNewanagraficaComponent', () => {
  let component: DialogNewanagraficaComponent;
  let fixture: ComponentFixture<DialogNewanagraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewanagraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewanagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
