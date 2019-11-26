import {Cliente} from "./cliente";
import {PedidoItem} from "./PedidoItem";

export class Pedido {
  id: number;
  cliente: Cliente;
  dataEmissao: Date;
  total: number;
  pedidoItemList: PedidoItem[];
}
