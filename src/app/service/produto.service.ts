import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Produto} from "../model/Produto";

@Injectable({
  providedIn: 'root'
})

export class ProdutoService extends BaseService<Produto>{

  constructor(protected http: HttpClient) {
    super(http, 'produto');
  }

}
