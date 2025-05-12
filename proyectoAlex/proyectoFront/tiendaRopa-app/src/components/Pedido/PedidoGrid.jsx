import { PedidoDetail } from "./PedidoDetail";
export const PedidoGrid = ({ handlerRemove, pedidos = [] }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Precio Total</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Apellidos</th>
              <th className="p-2">Direccion</th>
              <th className="p-2">Productos</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => {
              return (
                <PedidoDetail
                  key={pedido.id}
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
