export const PedidoDetail = ({ handlerRemove, pedido = {} }) => {
  //console.log("Pedido detail: ", pedido);
  return (
    <tr>
      <td className="p-2">{pedido.idPedido}</td>
      <td className="p-2">{pedido.precioTotal}</td>
      <td className="p-2">{pedido.nombreUsuario}</td>
      <td className="p-2">{pedido.apellidosUsuario}</td>
      <td className="p-2">{pedido.direccionUsuario}</td>
      <td className="p-2">
        {pedido.productos.map(
          (
            producto,
            idx //idx es el indice del array
          ) => (
            //si no hay id en el producto, se usa el indice como key y
            // asi no sale el warning en la consola
            <div key={producto.id ?? idx}>
              {producto.nombre} - {producto.cantidad}
            </div>
          )
        )}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            handlerRemove(pedido.idPedido);
          }}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};
