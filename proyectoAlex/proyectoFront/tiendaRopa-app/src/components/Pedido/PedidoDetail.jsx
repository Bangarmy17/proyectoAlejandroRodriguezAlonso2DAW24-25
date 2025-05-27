export const PedidoDetail = ({ handlerRemove, pedido = {} }) => (
  <tr>
    <td>#{pedido.idPedido || pedido.id}</td>
    <td>
      {pedido.productos && pedido.productos.length > 0 ? (
        <ul className="list-unstyled mb-0 small">
          {pedido.productos.map((item, idx) => (
            <li key={idx}>
              {item.nombreProducto} (x{item.cantidad}) -{" "}
              <strong>
                {(item.precioProducto * item.cantidad).toFixed(2)}€
              </strong>
            </li>
          ))}
        </ul>
      ) : (
        <span className="text-white-50">Sin detalles de productos</span>
      )}
    </td>
    <td className="fw-bold">{pedido.precioTotal?.toFixed(2)} €</td>
    <td className="text-center">
      <button
        className="btn btn-sm btn-outline-danger px-2 py-1"
        onClick={() => handlerRemove(pedido.idPedido || pedido.id)}
        title="Borrar Pedido"
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </td>
  </tr>
);
