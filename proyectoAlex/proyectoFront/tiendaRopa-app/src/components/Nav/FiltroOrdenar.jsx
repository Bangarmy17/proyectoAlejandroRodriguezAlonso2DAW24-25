export const FiltroOrdenar = ({ onFiltrar }) => (
  <div className="dropdown">
    <button
      className="btn btn-sm dropdown-toggle text-white-50"
      type="button"
      id="dropdownMenuOrdenar"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Ordenar por
    </button>
    <ul
      className="dropdown-menu dropdown-menu-dark"
      aria-labelledby="dropdownMenuOrdenar"
    >
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
