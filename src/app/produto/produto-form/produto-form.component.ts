import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../service/produto.service";
import {Produto} from "../../model/Produto";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {ListComponent} from "../../component/list.component";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit{

  produto: Produto;

  constructor(private produtoService: ProdutoService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private router: Router) {
  }

  save(): void{
    this.produtoService.save(this.produto).subscribe(res => {
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

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.has('id')){
        this.produtoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.produto = res;
        });
      }else{
        this.newProduct();
      }
    });
  };

  private newProduct(): void{
    this.produto = new Produto();
  }

}
