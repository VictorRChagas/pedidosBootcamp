import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Cliente} from "../model/cliente";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<Cliente>{

  constructor(protected http: HttpClient) {
    super(http, 'cliente');
  }
}
