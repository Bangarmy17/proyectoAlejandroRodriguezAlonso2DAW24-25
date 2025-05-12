export const PedidoDetail = ({ handlerRemove, pedido = {} }) => {
  console.log("Pedido detail: ", pedido);
  return (
    <tr>
      <td className="p-2">{pedido.id}</td>
      <td className="p-2">{pedido.precioTotal}</td>
      <td className="p-2">{pedido.nombre}</td>
      <td className="p-2">{pedido.apellidos}</td>
      <td className="p-2">{pedido.direccion}</td>
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
