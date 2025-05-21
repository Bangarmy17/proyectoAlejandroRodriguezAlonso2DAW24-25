import { agregarProductoAlCarrito } from "../../services/CarritoService";
import { useState } from "react";
import "../../estilosTarjetaProducto.css";

export const ProductoCard = ({ producto = {} }) => {
  const idUsuario = localStorage.getItem("userId");
  const [cantidad, setCantidad] = useState(1);

  const handleAgregarAlCarrito = async () => {
    if (!idUsuario) {
      alert("Debes iniciar sesión para agregar productos al carrito.");
      return;
    }
    const response = await agregarProductoAlCarrito(
      idUsuario,
      producto.id,
      cantidad
    );
    if (response && response.status === 200) {
      alert("Producto añadido al carrito");
    } else {
      alert("No se pudo añadir el producto al carrito");
    }
  };

  return (
    <div className="card producto-card h-100 d-flex flex-column">
      <img
        src={producto.rutaImagen}
        alt={producto.nombre}
        className="card-img-top producto-card-img"
      />
      <div className="card-body producto-card-body">
        <h5 className="card-title producto-card-title mb-3">
          {producto.nombre}
        </h5>
        <p className="card-text producto-card-text mb-2">
          {producto.precio + "€"}
        </p>
        <div className="producto-card-actions d-flex justify-content-between align-items-center mt-auto">
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            style={{ width: "60px", marginRight: "8px" }}
          />
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
          <button
            className="btn btn-primary"
            onClick={handleAgregarAlCarrito}
            title="Agregar al carrito"
          >
            <i className="bi bi-bag" id="iconoBolsa"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
