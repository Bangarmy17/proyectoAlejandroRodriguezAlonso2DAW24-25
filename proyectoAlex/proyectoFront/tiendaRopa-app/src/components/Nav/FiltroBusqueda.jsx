export const FiltroBusqueda = ({ onBuscar }) => (
  <form
    className="d-flex mb-3 me-lg-3"
    style={{ maxWidth: 300 }}
    onSubmit={onBuscar}
  >
    <input
      className="form-control me-3"
      type="search"
      placeholder="Buscar productos"
      aria-label="Search"
      name="busqueda"
    />
    <button className="btn btn-outline-success me-3" type="submit">
      <i className="bi bi-search"></i>
    </button>
  </form>
);
