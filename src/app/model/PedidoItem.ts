import {Pedido} from "./Pedido";
import {Produto} from "./Produto";

export class PedidoItem {
  pedido: Pedido;
  produto: Produto;
  valorUnitario: number;
  quantidade: number;
  desconto: number;
}
