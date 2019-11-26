import {Component} from '@angular/core';
import {ListComponent} from "../component/list.component";
import {Pedido} from "../model/Pedido";
import {PedidoService} from "../service/pedido.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent extends ListComponent<Pedido>{

  pedido: Pedido;

  constructor(private pedidoService: PedidoService,
              private messageService: MessageService,
              private router: Router,
              private confirmationService: ConfirmationService) {
    super();
    this.columns = [{header: 'Codigo do Pedido'}, {header: 'Data de Emissao do Pedido'},{header: 'Total'}];
    pedidoService.findAll().subscribe(res => this.lista = res);
  }

  deleteById(id: number): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o produto?',
      accept: () => this.delete(id),
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      header: 'Confirmação'
    });
  }

  private delete(id: number): void {
    this.pedidoService.deleteById(id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Pedido Deletado com Sucesso'
      });
      this.carregarLista();
      this.router.navigateByUrl('pedido');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      })
    });
  }

  findById(id: number){
    this.pedidoService.findOne(id).subscribe( res => this.pedido = res);
  }

  carregarLista(): void {
    this.loading = true;
    this.pedidoService.findAll().subscribe(res => {
      this.lista = res;
      this.loading = false;
    });
  }
}
