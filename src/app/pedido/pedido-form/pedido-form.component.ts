import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../../service/pedido.service";
import {Pedido} from "../../model/Pedido";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Cliente} from "../../model/cliente";
import {ClienteService} from "../../service/cliente.service";
import {Produto} from "../../model/Produto";
import {ProdutoService} from "../../service/produto.service";
import {PedidoItem} from "../../model/PedidoItem";

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit{

  pedido: Pedido;
  clientesList: Cliente[];
  cliente: Cliente;
  produtosList: Produto[];
  produto: Produto;
  display: boolean = false;
  pedidoItem: PedidoItem;

  constructor(private pedidoService: PedidoService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private router: Router,
              private clienteService: ClienteService,
              private produtoService: ProdutoService) {
    clienteService.findAll().subscribe( res => this.clientesList = res);
    produtoService.findAll().subscribe( res => this.produtosList = res);
  }

  save(): void {
    this.pedidoService.save(this.pedido).subscribe(res => {
      this.pedido = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Pedido realizado com sucesso'
      });

      this.router.navigateByUrl('pedidos');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      })
    });
    this.router.navigateByUrl('/pedidos');
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.has('id')){
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.pedido = res;
        });
      }else{
        this.newPedido();
      }
    });
  }

  private newPedido() {
    this.pedido = new Pedido();
  }

  showDialog() {
    this.display = true;
  }
}
