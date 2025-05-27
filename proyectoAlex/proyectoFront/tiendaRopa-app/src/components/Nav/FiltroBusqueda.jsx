export const FiltroBusqueda = ({ onBuscar }) => (
  <form
    className="d-flex"
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const busqueda = formData.get("busqueda");
      onBuscar(busqueda);
    }}
  >
    <input
      className="form-control form-control-sm me-2 navbar-search-input" // Clase custom para input en navbar
      type="search"
      placeholder="Buscar productos..."
      aria-label="Buscar productos"
      name="busqueda"
    />
    <button className="btn btn-sm btn-outline-custom-secondary" type="submit">
      <i className="bi bi-search"></i>
    </button>
  </form>
);
