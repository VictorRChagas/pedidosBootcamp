import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import {Cliente} from "../../model/cliente";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit{

  cliente: Cliente;

  constructor(private clienteService: ClienteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.has('id')){
        this.clienteService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.cliente = res;
        });
      }else{
        this.resetaForm();
      }
    });
  };

  private resetaForm(): void{
    this.cliente = new Cliente();
    this.cliente.nome = '';
    this.cliente.cpf = '';
    this.cliente.telefone = '';
  }

  salvar(): void {
    this.clienteService.save(this.cliente).subscribe(res => {
      this.cliente = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso'
      });

      this.router.navigateByUrl('cliente');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      })
    });
    this.router.navigateByUrl('/cliente');
  }
}
