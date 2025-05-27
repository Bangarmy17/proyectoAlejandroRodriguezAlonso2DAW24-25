import { PedidoDetail } from "./PedidoDetail";

export const PedidoGrid = ({ handlerRemove, pedidos = [] }) => {
  if (pedidos.length === 0) {
    return (
      <p className="text-center text-white-50">No hay pedidos para mostrar.</p>
    );
  }
  return (
    <div className="table-responsive admin-table-container rounded shadow">
      <table className="table table-dark table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>Productos (Cantidad - Subtotal)</th>
            <th>Precio Total</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <PedidoDetail
              key={pedido.idPedido || pedido.id}
              handlerRemove={handlerRemove}
              pedido={pedido}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
