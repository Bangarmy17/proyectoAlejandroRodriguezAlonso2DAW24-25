import { ProductoCard } from "./ProductoCard";

export const CargarProd = ({ productos = [] }) => {
  if (productos.length === 0) {
    return (
      <p className="text-center text-white-50 mt-5">
        No hay productos disponibles en este momento.
      </p>
    );
  }
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {productos.map((producto) => (
        <div key={producto.id} className="col d-flex align-items-stretch">
          <ProductoCard producto={producto} />
        </div>
      ))}
    </div>
  );
};
