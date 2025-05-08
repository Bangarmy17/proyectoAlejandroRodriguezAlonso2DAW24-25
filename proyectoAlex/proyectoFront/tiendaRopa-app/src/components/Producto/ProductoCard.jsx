export const ProductoCard = ({ producto = {} }) => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="card">
          <img src="img/pant1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <div className="row">
              <div className="col-6 mt-3">
                <a href="#" className="btn btn-primary">
                  Comprar
                </a>
              </div>
              <div className="col-6">
                <a href="#" className="btn ms-5">
                  <i className="bi bi-bag" id="iconoBolsa"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
