import {Component} from '@angular/core';
import {ProdutoService} from "../../service/produto.service";
import {Produto} from "../../model/Produto";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {

  produto: Produto;

  constructor(private produtoService: ProdutoService,
              private messageService: MessageService,
              private router: Router) { }

  save(): void{
    this.produtoService.save(this.produto).subscribe(res => {
      this.produto = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso'
      });

      this.router.navigateByUrl('produto');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      })
    });
    this.router.navigateByUrl('/produto');
  }

}
