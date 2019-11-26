import {Cliente} from "./cliente";
import {PedidoItem} from "./PedidoItem";

export class Pedido {
  cliente: Cliente;
  dataEmissao: Date;
  total: number;
  pedidoItemList: PedidoItem[];
}
