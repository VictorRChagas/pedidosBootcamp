import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../service/pedido.service";
import {Subscription} from "rxjs";
import {Pedido} from "../model/Pedido";
import {PedidoItem} from "../model/PedidoItem";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalhes-pedidos',
  templateUrl: './detalhes-pedidos.component.html',
  styleUrls: ['./detalhes-pedidos.component.scss']
})
export class DetalhesPedidosComponent implements OnInit{

  pedido: Pedido;
  listPedidoItem: PedidoItem[];
  columns: [{ header: string }, { header: string }, { header: string }, { header: string }];

  constructor(private pedidoService: PedidoService,
              private activatedRoute: ActivatedRoute) {
    this.columns = [{header: 'Produto'}, {header: 'Quantidade'}, {header: 'Desconto'}, {header: 'Preço Unitario'}];
  }

  findOne(id: number): Subscription{
    return this.pedidoService.findOne(id).subscribe( res => {
      this.pedido = res;
    });
  }

  carregaLista() {

  }

  deleteById(id: number) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.has('id')){
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.pedido = res;
        });
      }else{

      }
    });
  }


}
