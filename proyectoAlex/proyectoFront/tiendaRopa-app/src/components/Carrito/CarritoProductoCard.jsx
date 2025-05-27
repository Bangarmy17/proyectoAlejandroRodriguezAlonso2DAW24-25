export const CarritoProductoCard = ({ producto, handleEliminar }) => (
  <div className="card h-100 shadow-sm product-card-custom">
    <div className="position-relative">
      <img
        src={producto.rutaImagen || "/img/placeholder.png"}
        alt={producto.nombreProducto}
        className="card-img-top cart-product-img-custom"
      />
      <button
        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2 rounded-circle p-0 lh-1"
        style={{ width: "30px", height: "30px" }}
        title="Eliminar"
        onClick={() => handleEliminar(producto.idProducto)}
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
    <div className="card-body d-flex flex-column p-3">
      <h5 className="card-title fs-6 fw-bold product-card-title-custom mb-1">
        {producto.nombreProducto}
      </h5>
      <p className="card-text small text-white-50 mb-1">
        Cat: {producto.nombreCategoria} / Talla: {producto.nombreTalla}
      </p>
      <p className="card-text mb-1">
        Cantidad: <span className="fw-semibold">{producto.cantidad}</span>
      </p>
      <p className="card-text mb-2">
        Precio:{" "}
        <span className="fw-semibold">
          {producto.precioUnitario.toFixed(2)} €
        </span>
      </p>
      <p className="card-text mt-auto fw-bold fs-5 product-card-price-custom mb-0">
        Subtotal: {producto.subtotal.toFixed(2)} €
      </p>
    </div>
  </div>
);
