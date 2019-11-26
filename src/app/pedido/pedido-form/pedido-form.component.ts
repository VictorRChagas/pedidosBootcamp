import {Component} from '@angular/core';
import {PedidoService} from "../../service/pedido-service.service";
import {Pedido} from "../../model/Pedido";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {

  pedido: Pedido;

  constructor(private pedidoService: PedidoService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private router: Router) { }

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

}
