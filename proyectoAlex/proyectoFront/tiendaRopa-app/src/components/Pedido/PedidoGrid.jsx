import { PedidoDetail } from "./PedidoDetail";
export const PedidoGrid = ({ handlerRemove, pedidos = [] }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Productos</th>
              <th className="p-2">Precio Total</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => {
              return (
                <PedidoDetail
                  key={pedido.idPedido}
                  handlerRemove={handlerRemove}
                  pedido={pedido}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
