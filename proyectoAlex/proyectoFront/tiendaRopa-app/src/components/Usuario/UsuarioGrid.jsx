import { UsuarioDetail } from "./UsuarioDetail";
export const UsuarioGrid = ({ handlerRemove, usuarios = [] }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th className="p-2">Correo</th>
              <th className="p-2">Password (hasheada con JWT)</th>
              <th className="p-2">Nombre de Usuario</th>
              <th className="p-2">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <UsuarioDetail
                  key={usuario.id}
                  handlerRemove={handlerRemove}
                  usuario={usuario}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
