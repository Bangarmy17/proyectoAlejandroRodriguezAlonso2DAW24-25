import { agregarProductoAlCarrito } from "../../services/CarritoService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductoCard = ({ producto = {} }) => {
  const idUsuario = localStorage.getItem("userId");
  const [cantidad, setCantidad] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  const handleAgregarAlCarrito = async (redirectToCart = false) => {
    if (!idUsuario) {
      alert("Debes iniciar sesión para agregar productos al carrito.");
      navigate("/login");
      return;
    }
    if (cantidad <= 0) {
      alert("La cantidad debe ser al menos 1.");
      return;
    }
    setIsAdding(true);
    try {
      const response = await agregarProductoAlCarrito(
        idUsuario,
        producto.id,
        cantidad
      );
      if (response && response.data) {
        alert(`"${producto.nombre}" (x${cantidad}) añadido al carrito.`);
        if (redirectToCart) navigate("/carrito");
      } else {
        alert("No se pudo añadir el producto al carrito.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        "Error al añadir el producto.";
      alert(errorMessage);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="card h-100 shadow-sm product-card-custom">
      <img
        src={producto.rutaImagen || "/img/placeholder.png"}
        alt={producto.nombre}
        className="card-img-top product-card-img-custom"
      />
      <div className="card-body d-flex flex-column p-3">
        <h5 className="card-title fs-6 fw-bold product-card-title-custom">
          {producto.nombre}
        </h5>
        <p className="card-text fw-semibold product-card-price-custom mb-2">
          {producto.precio ? `${producto.precio.toFixed(2)} €` : ""}
        </p>
        <div className="mt-auto">
          <div className="input-group input-group-sm mb-2">
            <span className="input-group-text">Cant:</span>
            <input
              type="number"
              id={`cantidad-${producto.id}`}
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(Math.max(1, Number(e.target.value)))}
              className="form-control text-center"
              aria-label="Cantidad"
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-sm btn-custom-primary"
              onClick={() => handleAgregarAlCarrito(true)}
              disabled={isAdding}
            >
              {isAdding ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Comprar Ahora"
              )}
            </button>
            <button
              className="btn btn-sm btn-outline-custom-secondary"
              onClick={() => handleAgregarAlCarrito(false)}
              disabled={isAdding}
            >
              <i className="bi bi-bag-plus-fill me-1"></i>
              {isAdding ? "..." : "Añadir"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
