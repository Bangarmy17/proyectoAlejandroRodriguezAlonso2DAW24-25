import { ProductoDetail } from "./ProductoDetail";

export const ProductoGrid = ({
  handlerUpdate,
  handlerRemove,
  productos = [],
}) => {
  if (productos.length === 0) {
    return (
      <p className="text-center text-white-50">
        No hay productos para mostrar.
      </p>
    );
  }
  return (
    <div className="table-responsive admin-table-container rounded shadow">
      <table className="table table-dark table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ProductoDetail
              key={producto.id}
              handlerRemove={handlerRemove}
              handlerUpdate={handlerUpdate}
              producto={producto}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
