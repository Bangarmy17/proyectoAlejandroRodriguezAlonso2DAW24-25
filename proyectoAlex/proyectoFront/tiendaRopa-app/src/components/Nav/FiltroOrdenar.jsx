export const FiltroOrdenar = ({ onFiltrar }) => (
  <div className="dropdown mb-3 me-lg-3">
    <button
      className="btn dropdown-toggle w-100"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Ordenar por
    </button>
    <ul className="dropdown-menu w-100">
      <li>
        <button
          className="dropdown-item"
          onClick={() => onFiltrar("precioAsc")}
        >
          Precio: Menor a Mayor
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={() => onFiltrar("precioDes")}
        >
          Precio: Mayor a Menor
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={() => onFiltrar("nombreAsc")}
        >
          Nombre: A-Z
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={() => onFiltrar("nombreDes")}
        >
          Nombre: Z-A
        </button>
      </li>
    </ul>
  </div>
);
