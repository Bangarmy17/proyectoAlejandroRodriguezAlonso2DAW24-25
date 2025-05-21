import { useEffect, useState } from "react";
import { cargarCarrito } from "../../services/CarritoService";
import { CarritoProductoCard } from "./CarritoProductoCard";

export const Carrito = ({ idUsuario }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchCarrito = async () => {
      const response = await cargarCarrito(idUsuario);
      if (response && response.data) {
        setProductos(response.data);
      }
    };
    if (idUsuario) fetchCarrito();
  }, [idUsuario]);

  if (!productos.length) {
    return (
      <div className="text-center text-muted mt-3">El carrito está vacío.</div>
    );
  }

  return (
    <div className="container mt-4">
      <h4>Mi Carrito</h4>
      <div className="row g-3">
        {productos.map((producto) => (
          <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <CarritoProductoCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};
