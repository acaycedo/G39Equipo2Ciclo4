import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesVentasClienteComponent } from './reportes-ventas-cliente.component';

describe('ReportesVentasClienteComponent', () => {
  let component: ReportesVentasClienteComponent;
  let fixture: ComponentFixture<ReportesVentasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesVentasClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesVentasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
