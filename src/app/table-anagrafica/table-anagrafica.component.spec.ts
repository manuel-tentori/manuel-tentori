import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnagraficaComponent } from './table-anagrafica.component';

describe('TableAnagraficaComponent', () => {
  let component: TableAnagraficaComponent;
  let fixture: ComponentFixture<TableAnagraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnagraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
