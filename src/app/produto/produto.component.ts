import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../service/produto.service";
import {Produto} from "../model/Produto";
import {Observable} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {ListComponent} from "../component/list.component";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent extends ListComponent<Produto>{

  constructor(private produtoService: ProdutoService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router) {
    super();
    this.columns = [{header: 'Nome Produto', field: 'descricao'}, {header: 'Valor do Produto', field: 'valorUnitario'}];
    produtoService.findAll().subscribe( res => this.lista = res);
  }

  carregarLista(): void {
    this.loading = true;
    this.produtoService.findAll().subscribe(res => {
      this.lista = res;
      this.loading = false;
    });
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
    this.produtoService.deleteById(id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Produto Deletado com Sucesso'
      });
      this.carregarLista();
      this.router.navigateByUrl('produto');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      })
    });
  }
}
