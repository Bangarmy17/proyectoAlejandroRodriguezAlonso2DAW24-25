export const FiltroTalla = ({ onFiltrarTalla }) => (
  <div className="dropdown mb-3 me-lg-3">
    <button
      className="btn dropdown-toggle w-100"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Talla
    </button>
    <ul className="dropdown-menu w-100">
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarTalla(1)}>
          XS
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarTalla(2)}>
          S
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarTalla(3)}>
          M
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarTalla(4)}>
          L
        </button>
      </li>
      <li>
        <button className="dropdown-item" onClick={() => onFiltrarTalla(5)}>
          XL
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={() => onFiltrarTalla("todos")}
        >
          Todas las tallas
        </button>
      </li>
    </ul>
  </div>
);
