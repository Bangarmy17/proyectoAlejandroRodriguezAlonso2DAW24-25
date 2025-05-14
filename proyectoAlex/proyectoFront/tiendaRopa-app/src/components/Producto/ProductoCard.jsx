export const ProductoCard = ({ producto = {} }) => {
  return (
    <div className="card h-100">
      <img
        src={`http://localhost:8080/${producto.rutaImagen}`}
        alt={producto.nombre}
        width="200"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.precio + "€"}</p>
        <div className="d-flex justify-content-between mt-3">
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
          <a href="#" className="btn">
            <i className="bi bi-bag" id="iconoBolsa"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
