export const UsuarioDetail = ({ handlerRemove, usuario = {} }) => {
  return (
    <tr>
      <td className="p-2">{usuario.email}</td>
      <td className="p-2">{usuario.password}</td>
      <td className="p-2">{usuario.userName}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            handlerRemove(usuario.id);
          }}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};
