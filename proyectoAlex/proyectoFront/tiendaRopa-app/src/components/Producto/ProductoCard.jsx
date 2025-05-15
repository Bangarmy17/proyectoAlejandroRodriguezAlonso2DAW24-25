export const ProductoCard = ({ producto = {} }) => {
  // console.log("Ruta de la imagen:", producto.rutaImagen);
  return (
    <div className="card h-100">
      <img
        src={producto.rutaImagen}
        alt={producto.nombre}
        width="50"
        height="50"
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
