import { ProductoCard } from "./ProductoCard";

export const CargarProd = ({ productos = [] }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <ProductoCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};
