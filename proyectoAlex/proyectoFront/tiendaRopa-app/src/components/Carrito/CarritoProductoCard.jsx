import "../../estilosCarrito.css";

export const CarritoProductoCard = ({ producto }) => (
  <div className="carrito-card mb-4">
    <div className="carrito-card-img-container">
      <img
        src={producto.rutaImagen || "/img/no-image.png"}
        alt={producto.nombreProducto}
        className="carrito-card-img"
      />
    </div>
    <div className="carrito-card-body">
      <h5 className="carrito-card-title">{producto.nombreProducto}</h5>
      <p className="carrito-card-text mb-1">
        <strong>Cantidad:</strong> {producto.cantidad}
      </p>
      <p className="carrito-card-text mb-1">
        <strong>Precio unitario:</strong> {producto.precioUnitario} €
      </p>
      <p className="carrito-card-text mb-1">
        <strong>Categoría:</strong> {producto.nombreCategoria}
      </p>
      <p className="carrito-card-text mb-1">
        <strong>Talla:</strong> {producto.nombreTalla}
      </p>
      <p className="carrito-card-text">
        <strong>Subtotal:</strong> {producto.subtotal} €
      </p>
    </div>
  </div>
);
