import {Component, NgModule} from '@angular/core';
import {ClienteService} from "../service/cliente.service";
import {Cliente} from "../model/cliente";
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {ListComponent} from "../component/list.component";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent extends ListComponent<Cliente>{

  constructor(private clienteService: ClienteService,
              private messageService: MessageService,
              private router: Router,
              private confirmationService: ConfirmationService) {
    super();
    this.columns = [{field: 'id', header: 'Codigo'}, {field: 'nome', header: 'Nome'}, {
      field: 'cpf',
      header: 'CPF'
    }, {field: 'telefone', header: 'Telefone'}];
  }

  carregarLista(): void {
    this.loading = true;
    this.clienteService.findAll().subscribe(res => {
      this.lista = res;
      this.loading = false;
    });
  }

  deleteById(id: number): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o cliente?',
      accept: () => this.delete(id),
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      header: 'Confirmação'
    });
  }

  private delete(id: number): void {
    this.clienteService.deleteById(id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Cliente Deletado com Sucesso'
      });
      this.carregarLista();
      this.router.navigateByUrl('cliente');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      })
    });
  }
}


