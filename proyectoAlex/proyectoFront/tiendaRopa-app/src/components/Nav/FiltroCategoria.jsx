export const FiltroCategoria = ({ onFiltrarCategoria }) => (
  <div className="dropdown mb-3 me-lg-3">
    <button
      className="btn dropdown-toggle w-100"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Categoría
    </button>
    <ul className="dropdown-menu w-100">
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarCategoria(1)}>
          Pantalones
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarCategoria(2)}>
          Camisetas
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarCategoria(3)}>
          Sudaderas
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarCategoria(4)}>
          Calcetines
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarCategoria(5)}>
          Gorros
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={() => onFiltrarCategoria("todos")}
        >
          Todas las categorías
        </button>
      </li>
    </ul>
  </div>
);
