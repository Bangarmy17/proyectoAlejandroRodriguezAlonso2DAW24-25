export const PedidoDetail = ({ handlerRemove, pedido = {} }) => (
  <tr>
    <td className="p-2">{pedido.idPedido}</td>
    <td className="p-2">
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {pedido.productos.map((producto, idx) => (
          <li key={producto.nombreProducto + idx}>
            {producto.nombreProducto} x {producto.cantidad} ={" "}
            {(producto.precioProducto * producto.cantidad).toFixed(2)} €
          </li>
        ))}
      </ul>
    </td>
    {/* con el toFixed formateo a dos decirmales */}
    <td className="p-2">{pedido.precioTotal?.toFixed(2)} €</td>
    <td>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => handlerRemove(pedido.idPedido)}
      >
        Borrar
      </button>
    </td>
  </tr>
);
