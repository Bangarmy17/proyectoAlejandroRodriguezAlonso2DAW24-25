import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  cargarCarrito,
  eliminarProductoDelCarrito,
} from "../../services/CarritoService";
import { crearPedidoDesdeCarrito } from "../../services/PedidoService";
import { CarritoProductoCard } from "./CarritoProductoCard";

export const Carrito = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessingPedido, setIsProcessingPedido] = useState(false);
  const navigate = useNavigate();
  const idUsuario = localStorage.getItem("userId");

  const cargarCarritoUsuario = async () => {
    if (!idUsuario) return;
    setIsLoading(true);
    try {
      const response = await cargarCarrito(idUsuario);
      if (response?.data) {
        if (response.data.length === 0)
          navigate("/"); // No alert, solo redirige si está vacío
        else setProductos(response.data);
      } else setProductos([]);
    } catch (error) {
      setProductos([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!idUsuario) {
      alert("Inicia sesión para ver tu carrito.");
      navigate("/login");
      return;
    }
    cargarCarritoUsuario();
  }, [idUsuario, navigate]);

  const handleEliminarProducto = async (idProducto) => {
    if (!idUsuario) return;
    try {
      await eliminarProductoDelCarrito(idUsuario, idProducto);
      await cargarCarritoUsuario();
    } catch (error) {
      alert("No se pudo eliminar el producto.");
    }
  };

  const handleRealizarPedido = async () => {
    if (!idUsuario || productos.length === 0) return;
    setIsProcessingPedido(true);
    try {
      const response = await crearPedidoDesdeCarrito(idUsuario);
      if (response?.data?.id !== undefined) {
        alert(
          `Pedido #${
            response.data.id
          } realizado! Total: ${response.data.precioTotal.toFixed(2)}€`
        );
        navigate("/");
        setProductos([]);
      } else {
        alert("Problema al procesar pedido.");
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.response?.data ||
        "Error al realizar pedido.";
      alert(msg);
      if (msg.toLowerCase().includes("stock insuficiente"))
        cargarCarritoUsuario();
    } finally {
      setIsProcessingPedido(false);
    }
  };

  const totalCarrito = productos
    .reduce((acc, p) => acc + (p.subtotal || 0), 0)
    .toFixed(2);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-75">
        <div className="spinner-border text-custom-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!isLoading && productos.length === 0 && idUsuario) {
    return (
      <div className="text-center py-5 text-white-50">
        <i className="bi bi-cart-x-fill display-1 text-secondary mb-3"></i>
        <h4 className="mb-3">Tu carrito está vacío</h4>
        <button
          onClick={() => navigate("/")}
          className="btn btn-lg btn-custom-primary"
        >
          Explorar productos
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-white">Mi Carrito</h2>
      {productos.length > 0 && (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {productos.map((producto) => (
              <div
                className="col d-flex"
                key={producto.id || producto.idProducto}
              >
                <CarritoProductoCard
                  producto={producto}
                  handleEliminar={handleEliminarProducto}
                />
              </div>
            ))}
          </div>
          <hr className="my-4 border-secondary" />
          <div className="text-center my-4 p-3 rounded bg-dark-subtle text-white">
            <h3>
              Total del Pedido:{" "}
              <span className="fw-bold text-custom-primary">
                {totalCarrito} €
              </span>
            </h3>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-3 mb-5">
            <button
              className="btn btn-success btn-lg"
              type="button"
              onClick={handleRealizarPedido}
              disabled={isProcessingPedido}
            >
              <i className="bi bi-credit-card-fill me-2"></i>
              {isProcessingPedido ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    aria-hidden="true"
                  ></span>
                  Procesando...
                </>
              ) : (
                "Realizar Pedido"
              )}
            </button>
            <button
              className="btn btn-outline-custom-secondary btn-lg"
              type="button"
              onClick={() => navigate("/")}
            >
              <i className="bi bi-shop me-2"></i>Seguir Comprando
            </button>
          </div>
        </>
      )}
    </div>
  );
};
