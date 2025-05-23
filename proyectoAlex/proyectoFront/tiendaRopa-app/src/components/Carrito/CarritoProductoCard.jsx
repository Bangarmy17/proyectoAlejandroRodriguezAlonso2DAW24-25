import "../../estilosCarrito.css";

export const CarritoProductoCard = ({ producto, handleEliminar }) => (
  <div className="card carrito-card h-100 shadow-sm">
    <button
      className="btn btn-outline-danger btn-sm position-absolute"
      style={{ top: "10px", right: "10px", zIndex: 2 }}
      title="Eliminar del carrito"
      onClick={() => handleEliminar(producto.idProducto)}
    >
      <i className="bi bi-trash"></i>
    </button>
    <img
      src={producto.rutaImagen || "/images/error.png"}
      alt={producto.nombreProducto}
      className="carrito-card-img card-img-top"
    />
    <div className="card-body d-flex flex-column">
      <h5 className="carrito-card-title mb-3">{producto.nombreProducto}</h5>
      <p className="mb-1">
        <strong>Cantidad:</strong> {producto.cantidad}
      </p>
      <p className="mb-1">
        <strong>Precio unitario:</strong> {producto.precioUnitario} €
      </p>
      <p className="mb-1">
        <strong>Categoría:</strong> {producto.nombreCategoria}
      </p>
      <p className="mb-1">
        <strong>Talla:</strong> {producto.nombreTalla}
      </p>
      <p className="mb-0 mt-auto">
        <strong>Subtotal:</strong> {producto.subtotal} €
      </p>
    </div>
  </div>
);
