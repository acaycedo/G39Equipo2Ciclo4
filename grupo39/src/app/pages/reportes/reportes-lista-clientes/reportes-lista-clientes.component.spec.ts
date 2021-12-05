import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesListaClientesComponent } from './reportes-lista-clientes.component';

describe('ReportesListaClientesComponent', () => {
  let component: ReportesListaClientesComponent;
  let fixture: ComponentFixture<ReportesListaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesListaClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
