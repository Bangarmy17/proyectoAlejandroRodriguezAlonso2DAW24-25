export const ProductoDetail = ({
  handlerUpdate,
  handlerRemove,
  producto = {},
}) => {
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>
        <small>{producto.descripcion}</small>
      </td>
      <td>{producto.precio?.toFixed(2)} €</td>
      <td>{producto.stock}</td>
      <td className="text-center">
        <button
          className="btn btn-sm btn-outline-warning me-1 px-2 py-1"
          onClick={() => handlerUpdate(producto)}
          title="Actualizar"
        >
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button
          className="btn btn-sm btn-outline-danger px-2 py-1"
          onClick={() => handlerRemove(producto.id)}
          title="Borrar"
        >
          <i className="bi bi-trash3-fill"></i>
        </button>
      </td>
    </tr>
  );
};
