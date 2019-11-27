import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {AccordionModule} from "primeng/accordion";
import {ClienteComponent} from './cliente/cliente.component';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ClienteFormComponent} from './cliente/cliente-form/cliente-form.component';
import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CalendarModule, DialogModule, DropdownModule, SidebarModule} from "primeng/primeng";
import {SideBarService} from "./service/side-bar.service";
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import {ProdutoFormComponent} from "./produto/produto-form/produto-form.component";
import { DetalhesPedidosComponent } from './detalhes-pedidos/detalhes-pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    ClienteFormComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    PedidoComponent,
    PedidoFormComponent,
    DetalhesPedidosComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    SidebarModule,
    DropdownModule,
    DialogModule,
    CalendarModule
  ],
  providers: [MessageService, ConfirmationService, SideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
