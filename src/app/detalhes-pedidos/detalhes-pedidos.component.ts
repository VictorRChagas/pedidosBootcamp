import { Component, OnInit } from '@angular/core';
import {PedidoService} from "../service/pedido-service.service";
import {Observable, Subscription} from "rxjs";
import {Pedido} from "../model/Pedido";
import {ListComponent} from "../component/list.component";
import {PedidoItem} from "../model/PedidoItem";

@Component({
  selector: 'app-detalhes-pedidos',
  templateUrl: './detalhes-pedidos.component.html',
  styleUrls: ['./detalhes-pedidos.component.scss']
})
export class DetalhesPedidosComponent {

  pedido: Pedido;
  listPedidoItem: PedidoItem[];
  columns: [];

  constructor(private pedidoService: PedidoService) {
    this.columns[{header: 'Produto'}, {header: 'Valor Unitario'}, {header: 'Quantidade'}, {header: 'Desconto'} ];
  }

  findOne(id: number): Subscription{
    return this.pedidoService.findOne(id).subscribe( res => this.pedido = res);
  }

  carregaLista() {

  }

  deleteById(id: number) {

  }
}
