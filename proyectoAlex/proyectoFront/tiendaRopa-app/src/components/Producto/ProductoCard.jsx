export const ProductoCard = ({ producto = {} }) => {
  // console.log("Ruta de la imagen:", producto.rutaImagen);
  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={producto.rutaImagen}
        alt={producto.nombre}
        style={{ objectFit: "cover", height: "200px" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title mb-3">{producto.nombre}</h5>
        <p className="card-text mb-2">{producto.precio + "€"}</p>
        <div className="d-flex justify-content-between mt-auto">
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
