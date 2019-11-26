import {Component} from '@angular/core';
import {ListComponent} from "../component/list.component";
import {Pedido} from "../model/Pedido";
import {PedidoService} from "../service/pedido-service.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent extends ListComponent<Pedido>{

  pedido: Pedido;

  constructor(private pedidoService: PedidoService) {
    super();
    this.columns = [{header: 'Codigo do Pedido'}, {header: 'Data de Emissao do Pedido'},{header: 'Total'}];
    pedidoService.findAll().subscribe(res => this.lista = res);
  }

  deleteById(id: number): void{
    this.pedidoService.deleteById(id).subscribe();
  }

  findById(id: number){
    this.pedidoService.findOne(id).subscribe( res => this.pedido = res);
  }


  carregaLista() {

  }
}
