export const PedidoDetail = ({ handlerRemove, pedido = {} }) => {
  console.log("Pedido detail: ", pedido);
  return (
    <tr>
      <td className="p-2">{pedido.idPedido}</td>
      <td className="p-2">{pedido.precioTotal}</td>
      <td className="p-2">{pedido.nombreUsuario}</td>
      <td className="p-2">{pedido.apellidosUsuario}</td>
      <td className="p-2">{pedido.direccionUsuario}</td>
      <td className="p-2">
        {pedido.productos.map((producto) => {
          return (
            <div key={producto.id}>
              {producto.nombre} - {producto.cantidad}
            </div>
          );
        })}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            handlerRemove(pedido.id);
          }}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};
