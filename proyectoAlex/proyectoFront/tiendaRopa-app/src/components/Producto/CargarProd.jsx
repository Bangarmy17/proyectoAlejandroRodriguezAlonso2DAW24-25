import { ProductoCard } from "./ProductoCard";
export const CargarProd = ({ productos = [] }) => {
  {
    productos.map((producto) => {
      return <ProductoCard key={producto.id} producto={producto} />;
    });
  }
};
