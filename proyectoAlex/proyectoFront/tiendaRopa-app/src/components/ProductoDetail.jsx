export const ProductoDetail = ({
  handlerUpdate,
  handlerRemove,
  producto = {},
}) => {
  // console.log(producto);
  return (
    <tr>
      <td className="p-2">{producto.nombre}</td>
      <td className="p-2">{producto.descripcion}</td>
      <td className="p-2">{producto.precio + " €"}</td>
      <td className="p-2">{producto.stock}</td>
      <td>
        <button onClick={() => handlerUpdate(producto)}>Actualizar</button>
      </td>
      <td>
        <button onClick={() => handlerRemove(producto.id)}>Borrar</button>
      </td>
    </tr>
  );
};
