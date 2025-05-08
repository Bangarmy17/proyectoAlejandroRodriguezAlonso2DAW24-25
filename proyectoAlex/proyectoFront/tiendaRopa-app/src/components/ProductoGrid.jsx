import { ProductoDetail } from "./ProductoDetail";

export const ProductoGrid = ({
  handlerUpdate,
  handlerRemove,
  productos = [],
}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Descripcion</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Actualizar</th>
              <th className="p-2">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => {
              return (
                <ProductoDetail
                  key={producto.id}
                  handlerRemove={handlerRemove}
                  handlerUpdate={handlerUpdate}
                  producto={producto}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
