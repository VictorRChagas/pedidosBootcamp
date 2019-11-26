import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPedidosComponent } from './detalhes-pedidos.component';

describe('DetalhesPedidosComponent', () => {
  let component: DetalhesPedidosComponent;
  let fixture: ComponentFixture<DetalhesPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
